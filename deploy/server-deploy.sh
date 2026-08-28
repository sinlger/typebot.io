#!/bin/bash
# ============================================================
# QinglBot 服务器端一键部署脚本（在 ECS 上以 root 执行）
# 由 Agent 编排：先上传 tar.gz + 配置文件到 /opt，再执行本脚本
# ============================================================
set -euo pipefail
TS=$(date +%Y%m%d%H%M%S)
echo "===== 服务器部署开始 $(date) ====="

# ---------- 1. 解压 builder ----------
echo "[1/8] 解压 builder..."
if [ -d /opt/typebot-builder ]; then mv /opt/typebot-builder /opt/typebot-builder.bak-$TS; fi
mkdir -p /opt/typebot-builder
tar xzf /opt/builder-deploy.tar.gz -C /opt/typebot-builder --strip-components=1
test -f /opt/typebot-builder/apps/builder/server.js && echo "  OK builder server.js"

# ---------- 2. 解压 viewer ----------
echo "[2/8] 解压 viewer..."
if [ -d /opt/typebot-viewer ]; then mv /opt/typebot-viewer /opt/typebot-viewer.bak-$TS; fi
mkdir -p /opt/typebot-viewer
tar xzf /opt/viewer-deploy.tar.gz -C /opt/typebot-viewer --strip-components=1
test -f /opt/typebot-viewer/apps/viewer/server.js && echo "  OK viewer server.js"

# ---------- 3. 解压 landing（strip 到 /opt/typebot-landing-v0 顶层，nginx root 指向这里） ----------
echo "[3/8] 解压 landing..."
if [ -d /opt/typebot-landing-v0 ]; then mv /opt/typebot-landing-v0 /opt/typebot-landing-v0.bak-$TS; fi
mkdir -p /opt/typebot-landing-v0
tar xzf /opt/landing-v0-deploy.tar.gz -C /opt/typebot-landing-v0 --strip-components=1
test -f /opt/typebot-landing-v0/index.html && echo "  OK landing index.html"

# ---------- 4. 解压 workflows ----------
echo "[4/8] 解压 workflows..."
if [ -d /opt/typebot-workflows ]; then mv /opt/typebot-workflows /opt/typebot-workflows.bak-$TS; fi
mkdir -p /opt/typebot-workflows
tar xzf /opt/workflows-deploy.tar.gz -C /opt/typebot-workflows --strip-components=1
chmod +x /opt/typebot-workflows/start.sh
test -f /opt/typebot-workflows/index.js && echo "  OK workflows index.js"

# ---------- 5. 环境变量 ----------
echo "[5/8] 同步环境变量 /opt/typebot.env..."
cp -f /opt/.env.prod /opt/typebot.env
chmod 600 /opt/typebot.env
echo "  OK typebot.env (md5: $(md5sum /opt/typebot.env | cut -d' ' -f1))"

# ---------- 6. PM2 配置 + 启动 ----------
echo "[6/8] 更新 PM2 配置并启动..."
cp -f /opt/ecosystem.config.js /opt/ecosystem.config.js
pm2 delete all 2>/dev/null || true
pm2 start /opt/ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null | tail -1 || true

# ---------- 7. 原生模块自检（sharp / isolated-vm 能否在 Linux 加载） ----------
echo "[7/8] 原生模块自检..."
cd /opt/typebot-builder
node -e "try{require('sharp');console.log('  sharp OK')}catch(e){console.log('  sharp WARN:',e.message.split('\n')[0])}" 2>&1 | head -2
node -e "try{require('isolated-vm');console.log('  isolated-vm OK')}catch(e){console.log('  isolated-vm WARN:',e.message.split('\n')[0])}" 2>&1 | head -2
cd /opt/typebot-viewer
node -e "try{require('sharp');console.log('  viewer sharp OK')}catch(e){console.log('  viewer sharp WARN:',e.message.split('\n')[0])}" 2>&1 | head -2
node -e "try{require('isolated-vm');console.log('  viewer isolated-vm OK')}catch(e){console.log('  viewer isolated-vm WARN:',e.message.split('\n')[0])}" 2>&1 | head -2

# ---------- 8. 本地端口验证 ----------
echo "[8/8] 本地端口验证..."
sleep 12
for port in 3000 3001 3002 1999; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' -m 6 http://127.0.0.1:$port/ 2>/dev/null || echo ERR)
  echo "  :$port -> HTTP $code"
done

echo "===== 服务器部署脚本完成 $(date) ====="
