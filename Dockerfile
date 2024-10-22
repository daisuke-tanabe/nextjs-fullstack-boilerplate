FROM node:20.18.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm@9.12.2


FROM base AS dev-runner
WORKDIR /app
COPY . .
RUN pnpm i


FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN pnpm i
COPY prisma ./
RUN pnpm prisma generate


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN pnpm build


FROM base AS prod-runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
CMD ["pnpm", "start"]
