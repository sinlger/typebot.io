FROM oven/bun:1.3.9-slim AS release

WORKDIR /app
ENV NODE_ENV=production

# 预构建产物（由 scripts/docker-build.ps1 生成，所有依赖已内联）
COPY apps/workflows/dist/index.js /app/index.js

USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "/app/index.js"]
