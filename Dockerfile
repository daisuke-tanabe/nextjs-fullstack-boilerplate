FROM node:20.16.0 AS base
RUN corepack enable


FROM base AS dev-runner
WORKDIR /app
COPY . .
ENV NODE_ENV=development
RUN npm install


FROM base AS prod-runner
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
RUN npm install
