FROM node:20.16.0 AS base


FROM base AS dev-runner
WORKDIR /app
COPY . .
RUN npm ci


FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts

COPY prisma ./
RUN npm prisma generate


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build


FROM base AS prod-runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["npm", "start"]
