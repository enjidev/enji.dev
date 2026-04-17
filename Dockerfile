# 1. Cài đặt toàn bộ dependencies cho Monorepo
FROM node:20-alpine AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy các file cấu hình và toàn bộ code để cài deps cho đủ
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
COPY packages ./packages
COPY apps ./apps

RUN corepack enable && pnpm i --frozen-lockfile

# 2. Giai đoạn Build (Sử dụng node_modules từ installer)
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=installer /app ./
COPY . .
RUN sed -i "s/reactStrictMode: true,/reactStrictMode: true, output: 'standalone',/" apps/enji.dev/next.config.mjs
ENV NEXT_TELEMETRY_DISABLED=1

# Build toàn bộ dự án
RUN corepack enable && pnpm build

# 3. Giai đoạn chạy (Runner)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# LƯU Ý: Enji.dev build standalone sẽ nằm trong apps/enji.dev/.next/standalone
COPY --from=builder /app/apps/enji.dev/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/enji.dev/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/enji.dev/.next/static ./apps/enji.dev/.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

# Chạy server từ thư mục standalone của app
CMD ["node", "apps/enji.dev/server.js"]