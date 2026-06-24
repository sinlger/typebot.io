# Typebot 本地部署注意事项

> 适用于 Windows + Docker Desktop + Bun 的开发环境。生产部署另见 [docs.typebot.io/self-hosting](https://docs.typebot.io/self-hosting)。

---

## 一、环境前置

| 项 | 版本 / 要求 |
|---|---|
| Node.js | 22.x（与 `bun install` 时一致即可） |
| Bun | ≥ 1.3.10 |
| Docker Desktop | ≥ 20.10（含 docker compose v2） |
| Git | 任意 |

> **本地实测版本**：Bun 1.3.10、Docker 20.10.21、Compose v2.13.0、Node v22.20.0

---

## 二、依赖安装（`bun install` 的坑）

### 坑 1：Windows 文件锁导致 postinstall 失败

`bun install` 解压完 4000+ 文件后立即跑 `postinstall`，但此时 Windows Defender / VS Code 还在扫 `node_modules`，esbuild 拿不到目录读权限：

```
X [ERROR] Cannot read directory "../../node_modules":
   The process cannot access the file because it is being used by another process.
```

**处理**：直接重跑一次即可。

```bash
cd packages/env && bun run compile
cd ../.. && bunx nx db:generate prisma
bun install   # 第二次会幂等通过
```

**根治**（任选其一）：
- 把 `e:/workSpace/qinglbot` 加入 Windows Defender 排除目录
- 关闭 VS Code 后再 `bun install`

### 坑 2：postinstall 链路

`bun install` 完会触发以下连锁动作，任一失败都会让 install 整体 fail：
1. `packages/env` 用 esbuild 编译 → 产生 `dist/index.js`
2. `nx db:generate prisma` → 产生 `@prisma/client` 与 Effect generator
3. `husky` + `effect-language-service patch` → patch `node_modules/typescript/lib/{typescript,_tsc}.js`

如需逐步排错可分别手动跑。

---

## 三、环境变量（.env）

**根目录** `.env` 是唯一加载源。最小可跑配置：

```ini
# 32 字符随机串，生产必换
ENCRYPTION_SECRET=do+UspMmB/rewbX2K/rskFmtgGSSZ8Ta

# 数据库（与 docker-compose.dev.yml 的密码对齐）
DATABASE_URL=postgresql://postgres:typebot@localhost:5432/typebot

# Redis(BullMQ 队列 + chat session)
REDIS_URL=redis://localhost:6379

# 应用 URL —— 端口与下方"端口冲突"章节对齐
NEXTAUTH_URL=http://localhost:8080
NEXT_PUBLIC_VIEWER_URL=http://localhost:8081
NEXT_PUBLIC_PARTYKIT_HOST=localhost:1999

# 管理员邮箱(首次用此邮箱注册即自动成为 admin)
ADMIN_EMAIL=your@example.com

# workflows 进程独立配置(不能用 DATABASE_URL 复用,会校验失败)
WORKFLOWS_DATABASE_URL=postgresql://postgres:typebot@localhost:5432/typebot
# workflows 进程监听端口(默认 3000 在 Windows 保留段)
WORKFLOWS_SERVER_PORT=8082
# workflows ↔ builder/viewer RPC 鉴权密钥(任意字符串)
WORKFLOWS_RPC_SECRET=local-dev-workflows-rpc-secret-please-change-in-prod

# 让 Node 22 兼容 Next.js
NODE_OPTIONS=--no-node-snapshot

# SMTP(任选,典型示例:139 邮箱)
SMTP_HOST=smtp.139.com
SMTP_PORT=465
SMTP_USERNAME=your@139.com
SMTP_PASSWORD=xxxxxxxx
SMTP_SECURE=true
SMTP_AUTH_DISABLED=false
NEXT_PUBLIC_SMTP_FROM=YourBot <your@139.com>

# S3(任选,典型示例:阿里云 OSS)
S3_ACCESS_KEY=xxx
S3_SECRET_KEY=xxx
S3_BUCKET=typebot
S3_ENDPOINT=oss-cn-beijing.aliyuncs.com
S3_SSL=true
S3_REGION=oss-cn-beijing
S3_PATH_STYLE=false
```

### .env 注意点

| 键 | 注意 |
|---|---|
| `ENCRYPTION_SECRET` | **必须 32 字符**，否则启动报错。本地开发可用 example 的默认值，生产必须自生成 |
| `DATABASE_URL` | 必须 `postgresql://` 或 `postgres://` 前缀，否则 prisma 脚本直接静默退出（见下文坑） |
| `WORKFLOWS_DATABASE_URL` | **workflows 进程独立读取，跟 DATABASE_URL 缺一不可**（哪怕指向同库）；缺了会 SchemaError 退出 |
| `WORKFLOWS_RPC_SECRET` | **必填**，没有默认值；缺了 workflows 进程会 SchemaError 退出 |
| `WORKFLOWS_SERVER_PORT` | 默认 3000，**Windows 保留段命中**，必须改成 8082 之类 |
| `ADMIN_EMAIL` | 大小写敏感、必须与你之后用来注册的邮箱**完全一致** |
| `NEXT_PUBLIC_*` | 这些是注入到前端 bundle 的，改了必须重启 `bun run dev`(热更新不生效) |
| `S3_ENDPOINT` | **不要带 https:// 前缀，也不要带路径**，阿里云 OSS 就填 `oss-cn-beijing.aliyuncs.com` |
| `S3_PATH_STYLE` | 阿里云 OSS 用 virtual-hosted style，填 `false`；MinIO 等填 `true` |
| `S3_PORT` | 阿里云 OSS 走 443，不填即可；MinIO 本地填 `9000` |
| `SMTP_SECURE` | 465 端口 → `true`(SSL);587 端口 → `false`(STARTTLS) |
| `SMTP_PASSWORD` | 139 / QQ / Gmail 都需要"授权码"或"应用专用密码",不是登录密码 |

---

## 四、Docker 基础服务

### 端口规划与冲突排查

启动前**务必预检端口**:

```bash
for port in 5432 6379 8080 8081 8082 1999; do
  netstat -ano | grep -E "[: ]${port}[ ]" | grep LISTENING && echo "port $port BUSY" || echo "port $port FREE"
done
# 检查 Windows 内核保留段(Hyper-V/WSL)
netsh interface ipv4 show excludedportrange protocol=tcp
```

| 端口 | 服务 | 常见冲突源 |
|---|---|---|
| 5432 | PostgreSQL | 本机装的 PostgreSQL 服务 |
| **6379** | **Redis** | **Windows 服务版 `Redis`(Memurai/redis-windows)** |
| **8080** | builder | Tomcat / 旧版 IIS |
| **8081** | viewer | - |
| **8082** | workflows | - |
| 1999 | partykit | Windows 上 partykit 有 path bug,本地暂不启用 |
| 9000 | MinIO（如果起） | clickhouse / 其他对象存储 |

> ⚠️ **Windows 内核保留段（极重要）**:Hyper-V 启用后会保留 3000-4378 整段(具体范围因机器而异)。**3000 / 3001 / 3007 全部不能用**,导致仓库默认的 builder=3000 / viewer=3001 / workflows=3000 都会报 `EACCES: permission denied`。**改用 8080/8081/8082 一次性绕过**。

### 处理 6379 被占用

**方案 A（推荐 / 已实测）**：停掉 Windows 的 Redis 服务

```powershell
# 以管理员身份运行 PowerShell
sc query type= service state= all | findstr /i redis    # 找服务名
net stop Redis
sc config Redis start= disabled                          # 禁止开机自启
```

**方案 B**：改 docker redis 映射端口到 6380，同步改 `.env`：
```ini
REDIS_URL=redis://localhost:6380
```
并在 [docker-compose.dev.yml](docker-compose.dev.yml) 把 `6379:6379` 改成 `6380:6379`。

### 选择性启动 docker 服务

仓库自带的 [docker-compose.dev.yml](docker-compose.dev.yml) 包含 db / minio / createbuckets / redis / grafana 共 5 个 service。**用 docker compose 的 service 选择性启动**，不要全 up：

```bash
# 只起 db + redis（推荐:S3 走在线、不要可观测性)
docker compose -f docker-compose.dev.yml up -d typebot-db redis

# 如果用本地 MinIO 而不是阿里云 OSS,再加:
docker compose -f docker-compose.dev.yml up -d minio createbuckets

# 验证
docker compose -f docker-compose.dev.yml ps
docker exec qinglbot-typebot-db-1 pg_isready -U postgres
docker exec qinglbot-redis-1 redis-cli ping
```

### 容器命名规律

Compose v2 默认命名 `<project>-<service>-<index>`，project 默认是当前目录名（`qinglbot`），所以：
- DB: `qinglbot-typebot-db-1`
- Redis: `qinglbot-redis-1`

数据卷同理：`qinglbot_db_data` / `qinglbot_redis-data`。**不要随便 `docker compose down -v`，会一并删卷丢数据**。

---

## 五、数据库初始化（**严重的坑**）

### 坑：`bun run db:migrate` 静默不执行

仓库的 [migrate-deploy.ts](packages/prisma/scripts/migrate-deploy.ts) 第 3 行：
```ts
if (process.env.DATABASE_URL?.startsWith("postgres"))
  executePrismaCommand("prisma migrate deploy");
```

`bun run` 在子包目录跑时**不会自动加载根目录 `.env`**，`process.env.DATABASE_URL` 为 `undefined`，整个 if 短路退出，**既不报错也不写日志**。表现就是命令秒退、`\dt` 看 0 张表。

**正确姿势**:

```bash
# 方式 A:从根目录手动注入(推荐)
cd e:/workSpace/qinglbot
cd packages/prisma && DATABASE_URL="postgresql://postgres:typebot@localhost:5432/typebot" bun run db:migrate

# 方式 B:用 dotenv-cli
bunx dotenv -e ../../.env -- bun run db:migrate
```

成功标志:`All migrations have been successfully applied.` + `\dt` 看到 32 张表(含 `_prisma_migrations`)。

### 重置 / 重做迁移

```bash
# 危险:删全部数据 + 重跑迁移
cd packages/prisma && DATABASE_URL="..." bun run db:reset

# 只看 schema 不留 migration 历史(快速 dev)
cd packages/prisma && DATABASE_URL="..." bun run db:push
```

---

## 六、启动开发服务

⚠️ **Windows 用户不要直接 `bun run dev`**(partykit 会因为路径 bug 立即崩溃，影响 nx 进度)。改用:

```bash
cd e:/workSpace/qinglbot
# Windows: 跳过 partykit、用 8080/8081/8082 端口
PORT=8080 bunx nx run-many --configuration=development -t dev,watch-deps -p builder,viewer,workflows
```

非 Windows / WSL 环境可以直接 `bun run dev`。

会通过 Nx 并行起 3-4 个进程:
- builder(管理端): http://localhost:8080
- viewer(展示端): http://localhost:8081
- workflows(后台 RPC): http://localhost:8082/healthz
- (Linux/Mac) @typebot.io/partykit: WebSocket(`localhost:1999`)

> **partykit 是什么**:用于实时多人协作编辑同一个 typebot 时的 WebSocket 同步。**单人开发本地可缺**;团队部署生产时再启用(用 PartyKit Cloud 托管,见下文 partykit 章节)。

首次启动较慢(每个 app 第一次都要冷编译)。看到 `Ready in ...ms` 才能访问。

### 冒烟测试清单

按这个顺序逐项验证:

1. 打开 [http://localhost:8080](http://localhost:8080) → 输入 `ADMIN_EMAIL` 同款邮箱 → 提交
2. **收到登录邮件** → 验证 **SMTP 通**
3. 点邮件里的 magic link → 进入 dashboard → 验证 **DB 通** + **管理员身份生效**
4. 新建一个 typebot → 保存 → 验证 **DB 写入**
5. 给 bot 加一个 image block 上传图片 → 验证 **S3 通**
6. 点 "Preview" → 跟 bot 对话几句 → 验证 **Redis(session)**;协作编辑/多端同步需要 partykit,本地单人开发可跳过

任何一步失败,对照下表排查:

| 失败步骤 | 排查 |
|---|---|
| 邮件没到 | 检查垃圾邮件;`SMTP_PASSWORD` 是否是授权码;`SMTP_SECURE` 是否与端口匹配 |
| 登录后转圈 | DB 表是否建好;`NEXTAUTH_URL` 是否与浏览器实际访问的域名/端口一致(必须 8080) |
| 不是 admin | `.env` 的 `ADMIN_EMAIL` 大小写;改完需重启 |
| 上传图片报错 | `S3_ENDPOINT` 不能带 `https://`;`S3_BUCKET` 是否已创建并对应 ACL;阿里云需要 `S3_PATH_STYLE=false` |
| 预览不响应 | `REDIS_URL` 是否能连 |
| 多端协作不同步 | 是 partykit 缺位导致,Windows 本地暂时无解,只影响协作场景 |

### Windows partykit 路径 bug

直接 `bun run dev` 时 partykit 会立刻报:
```
TypeError: Invalid URL
  input: '.\\file:\\E:\\workSpace\\qinglbot\\node_modules\\partykit\\dist\\generated.js'
```
原因:`partykit/dist/bin.mjs` 用 `fileURLToPath` 时拼了一个 `.\file:\...` 这种非法 URL,Windows 路径解析问题。**单人本地开发可以直接不起这个 service**(协作编辑功能不可用,其他全 ok)。要修需要给 partykit upstream 提 PR。

---

## 七、常用运维命令

```bash
# 查容器状态
docker compose -f docker-compose.dev.yml ps

# 看日志
docker compose -f docker-compose.dev.yml logs -f typebot-db
docker compose -f docker-compose.dev.yml logs -f redis

# 进 psql
docker exec -it qinglbot-typebot-db-1 psql -U postgres -d typebot

# 进 redis-cli
docker exec -it qinglbot-redis-1 redis-cli

# 停服务(保留数据)
docker compose -f docker-compose.dev.yml stop

# 重启
docker compose -f docker-compose.dev.yml start

# 彻底清理(危险:删数据)
docker compose -f docker-compose.dev.yml down -v
```

---

## 八、生产部署提醒(若以后切到生产)

- 必须替换 `ENCRYPTION_SECRET` 为生产专属随机 32 字符,**生产换了 secret 会导致老的 credentials 全失效**
- 用 [docker-compose.yml](docker-compose.yml) 而非 dev 版,镜像走 `baptistearno/typebot-builder:latest` + `viewer:latest`
- 反向代理(Nginx / Caddy / Traefik)接 SSL;`NEXTAUTH_URL` / `NEXT_PUBLIC_VIEWER_URL` 必须填 **public https URL**
- PostgreSQL **不要**直接用 docker 跑,改用 RDS / Supabase / 自建 + 备份
- Redis 同样建议托管(Tair / Upstash),并设 `requirepass`
- SMTP 用企业邮箱或 Sendgrid / 阿里云邮推,避免触发个人邮箱风控
- 日志写到外部(Loki / ELK / CloudWatch),不要堆在容器 stdout
- 启用 Sentry: `SENTRY_DSN` / `NEXT_PUBLIC_SENTRY_DSN`

---

## 九、本次部署快照(2026-06-24)

| 项 | 状态 |
|---|---|
| Windows Redis 服务 | 已停止 + 已 disable 自启 |
| `qinglbot-typebot-db-1` (postgres:16) | running, 0.0.0.0:5432 |
| `qinglbot-redis-1` (redis:alpine) | running (healthy), 0.0.0.0:6379 |
| Prisma migrations | 83/83 applied, 32 张表已建 |
| builder (next dev) | http://localhost:8080 ✅ HTTP 200 |
| viewer (next dev) | http://localhost:8081 ✅ HTTP 200 |
| workflows (bun --watch) | http://localhost:8082/healthz ✅ HTTP 200 |
| partykit | 跳过(Windows path bug,协作编辑暂不可用) |
| SMTP | 139 邮箱(在线) |
| S3 | 阿里云 OSS(在线) |
| App | 本地 `PORT=8080 bunx nx run-many ... -p builder,viewer,workflows`(未容器化) |

最后改动文件:
- [.env](.env) - 补 DATABASE_URL / REDIS_URL / NEXTAUTH_URL / NEXT_PUBLIC_VIEWER_URL / ADMIN_EMAIL / NEXT_PUBLIC_PARTYKIT_HOST / WORKFLOWS_RPC_SECRET / WORKFLOWS_DATABASE_URL / WORKFLOWS_SERVER_PORT
- [apps/viewer/package.json](apps/viewer/package.json) - dev 端口 3001 → 8081

未改动:
- [docker-compose.dev.yml](docker-compose.dev.yml) - 直接复用,选择性 up
- [docker-compose.yml](docker-compose.yml) - 生产模板,本次不用
