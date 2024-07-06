FROM node:20.15.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


FROM base AS dev-runner
WORKDIR /app
COPY . .
ENV NODE_ENV=development
RUN pnpm install


FROM base AS prod-runner
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
RUN pnpm install
CMD pnpm start


