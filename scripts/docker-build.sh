#!/bin/bash
set -e

# ============================================================
# Typebot Docker 本地构建脚本
# 使用场景：在国内网络环境下，先本地构建好产物，
# 然后 Dockerfile 只需 COPY 产物，无需 bun install
# ============================================================

# 确保 bun 在 PATH 中（Windows 环境兼容）
BUN_BIN_DIR="${BUN_BIN_DIR:-$HOME/.bun/bin}"
if [ ! -d "$BUN_BIN_DIR" ]; then
  BUN_BIN_DIR="/c/Users/DongHe/.bun/bin"
fi
export PATH="$BUN_BIN_DIR:$PATH"

SCOPE=${1:-all}  # 可选: builder | viewer | workflows | landing-page | all

echo "==> 安装依赖..."
bun install --frozen-lockfile

if [ "$SCOPE" = "all" ] || [ "$SCOPE" = "builder" ]; then
  echo "==> 构建 builder..."
  SKIP_ENV_CHECK=true \
    DATABASE_URL=postgresql:// \
    NEXT_PUBLIC_VIEWER_URL=http://localhost \
    bunx nx build builder
fi

if [ "$SCOPE" = "all" ] || [ "$SCOPE" = "viewer" ]; then
  echo "==> 构建 viewer..."
  SKIP_ENV_CHECK=true \
    DATABASE_URL=postgresql:// \
    NEXT_PUBLIC_VIEWER_URL=http://localhost \
    bunx nx build viewer
fi

if [ "$SCOPE" = "all" ] || [ "$SCOPE" = "workflows" ]; then
  echo "==> 构建 workflows..."
  cd apps/workflows && bun run build && cd ../..
fi

if [ "$SCOPE" = "all" ] || [ "$SCOPE" = "landing-page" ]; then
  echo "==> 构建 landing-page-v2..."
  VITE_LANDING_PAGE_BASE_URL=http://localhost:8003 \
    VITE_TYPEBOT_APP_BASE_URL=http://localhost:8000 \
    bunx nx build landing-page-v2
fi

echo "==> 生成 Prisma Client..."
DATABASE_URL=postgresql:// bunx nx db:generate prisma

echo ""
echo "=============================="
echo " 构建完成！现在可以打镜像："
echo " docker build -f Dockerfile.builder -t typebot-builder ."
echo " docker build -f Dockerfile.viewer -t typebot-viewer ."
echo " docker build -f apps/workflows/Dockerfile -t typebot-workflows ."
echo " docker build -f Dockerfile.landing-page-v2 -t typebot-landing-page ."
echo "=============================="
