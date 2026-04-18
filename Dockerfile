# 1. Cài đặt toàn bộ dependencies
FROM node:20-alpine AS installer
# Thêm openssl cho Prisma và các thư viện cần thiết cho Alpine
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
COPY packages ./packages
COPY apps ./apps

RUN corepack enable && pnpm i --frozen-lockfile

# 2. Giai đoạn Build
FROM node:20-alpine AS builder
# BẮT BUỘC phải thêm openssl ở đây để Prisma Generate chạy được
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=installer /app ./
COPY . .

# --- KHU VỰC QUAN TRỌNG ---
# Sếp phải dán trực tiếp cái IP vào đây để lúc BUILD nó nạp vào Prisma Client luôn
ENV DATABASE_URL="mongodb://admin:33015676e4aac2d25b57478da17613822ada39e1@10.0.0.74:27017/portfolio?authSource=admin"
# --------------------------

RUN sed -i "s/reactStrictMode: true,/reactStrictMode: true, output: 'standalone',/" apps/enji.dev/next.config.mjs
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && pnpm build

# 3. Giai đoạn chạy (Runner)
FROM node:20-alpine AS runner
# Runner cũng phải có openssl để Prisma Engine kết nối được DB
RUN apk add --no-cache openssl
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/enji.dev/public ./apps/enji.dev/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/enji.dev/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/enji.dev/.next/static ./apps/enji.dev/.next/static

# Chép luôn cái schema prisma vào để runner nó biết đường mà lần (nếu cần)
COPY --from=builder /app/apps/enji.dev/prisma ./apps/enji.dev/prisma

USER nextjs
EXPOSE 3000
ENV PORT=3000
# Truyền lại biến môi trường lần nữa cho chắc
ENV DATABASE_URL="mongodb://admin:33015676e4aac2d25b57478da17613822ada39e1@10.0.0.74:27017/portfolio?authSource=admin"

CMD ["node", "apps/enji.dev/server.js"]
