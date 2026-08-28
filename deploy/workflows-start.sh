#!/bin/bash

# workflows 启动脚本（由 PM2 以 bash interpreter 执行）
# 修正1：产物是单文件 bundle dist/index.js，不是 src/index.ts
# 修正2（关键）：effect cluster 的 runnerAddress 端口跟随 PORT 环境变量。若 PORT 与 HTTP 端口
#        (WORKFLOWS_SERVER_PORT=3002) 相同，cluster 会尝试绑 localhost:3002，与 HTTP 的 0.0.0.0:3002
#        在 Linux 上 EADDRINUSE 冲突（报 "Failed to listen at localhost"）。必须让 PORT 用独立端口。

if [ -z "$ENCRYPTION_SECRET" ]; then
  echo "Error: ENCRYPTION_SECRET is not set (via PM2 env)"
  exit 1
fi

# 关键修复：cluster socket 端口与 HTTP 端口分离（PORT 控制 cluster，WORKFLOWS_SERVER_PORT 控制 HTTP）
export PORT="${PORT:-34431}"
export WORKFLOWS_SERVER_PORT="${WORKFLOWS_SERVER_PORT:-3002}"

# 调试信息（写入 PM2 out 日志）
echo "Starting workflows (index.js) with Bun..."
echo "   PORT(cluster)=$PORT WORKFLOWS_SERVER_PORT(http)=$WORKFLOWS_SERVER_PORT ENCRYPTION_SECRET set=$([ -n "$ENCRYPTION_SECRET" ] && echo yes || echo no)"

cd /opt/typebot-workflows
exec /root/.bun/bin/bun run index.js
