#!/bin/bash

cd apps/builder;
node  -e "const { configureRuntimeEnv } = require('next-runtime-env/build/configure'); configureRuntimeEnv();"
cd ../..;

# 优先使用全局 prisma（Dockerfile.builder 安装），其次本地 node_modules
if command -v prisma &> /dev/null; then
  prisma migrate deploy --schema=packages/prisma/postgresql/schema.prisma --config=packages/prisma/prisma.config.ts;
else
  ./node_modules/.bin/prisma migrate deploy --schema=packages/prisma/postgresql/schema.prisma --config=packages/prisma/prisma.config.ts;
fi

NODE_OPTIONS=--no-node-snapshot HOSTNAME=${HOSTNAME:-0.0.0.0} PORT=${PORT:-3000} node apps/builder/server.js;
