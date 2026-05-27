# ================== RELEASE ======================
FROM node:24-bullseye-slim AS release

RUN apt-get update -qq \
    && apt-get install -qq --no-install-recommends \
    ca-certificates \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# 单独安装 prisma CLI（仅一个包，不使用 bun install 全量依赖）
RUN npm install -g prisma --registry=https://registry.npmmirror.com

WORKDIR /app

# Next.js standalone 产物（内含 server.js + traced node_modules）
COPY apps/builder/.next/standalone ./

# Next.js 静态资源
COPY apps/builder/.next/static ./apps/builder/.next/static

# Next.js public 目录
COPY apps/builder/public ./apps/builder/public

# Prisma schema & migrations（entrypoint 执行 migrate deploy 需要）
COPY packages/prisma/postgresql ./packages/prisma/postgresql
COPY packages/prisma/prisma.config.ts ./packages/prisma/prisma.config.ts

# Turbopack 用 hash 后缀名引用模块，standalone 只 trace 了原始名
# 自动扫描所有 hash 引用并创建符号链接
RUN cd /app && grep -roh 'e\.x("[^"]*-[0-9a-f]\{8,\}"' apps/builder/.next/server/chunks/ \
    | sed 's/e\.x("//;s/"$//' \
    | sort -u \
    | while IFS= read -r hashed; do \
        base=$(echo "$hashed" | sed 's/-[0-9a-f]\{8,\}$//'); \
        dir=$(dirname "$base"); \
        if [ "$dir" = "." ]; then \
          if [ -d "node_modules/$base" ] && [ ! -e "node_modules/$hashed" ]; then \
            ln -s "$base" "node_modules/$hashed"; \
          fi; \
        else \
          if [ -d "node_modules/$dir/$(basename $base)" ] && [ ! -e "node_modules/$dir/$(basename $hashed)" ]; then \
            ln -s "$(basename $base)" "node_modules/$dir/$(basename $hashed)"; \
          fi; \
        fi; \
      done

COPY scripts/builder-entrypoint.sh ./
RUN chmod +x ./builder-entrypoint.sh

USER node
ENTRYPOINT ["./builder-entrypoint.sh"]
EXPOSE 3000
ENV PORT=3000
