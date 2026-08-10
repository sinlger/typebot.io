# 重定向链接环境感知优化

## 目标
landing-page-v0 的外链目前全部硬编码为线上域名。改为：本地开发 (`vite dev`) 跳本地服务，线上构建 (`vite build`) 跳正式域名。

## 端口映射（来自仓库 `.env` 与各 app nx 配置，已核实）
| 服务 | 线上 | 本地 |
|---|---|---|
| builder | https://builder.qinglbot.com | http://localhost:8080 |
| viewer | https://viewer.qinglbot.com | http://localhost:8081 |
| 主站 landing | https://qinglbot.com | http://localhost:6173 |

环境判断用 Vite 内建 `import.meta.env.DEV`（dev=true / build=false），语义与"本地运行 vs 线上"完全吻合。端口均为 strictPort 固定值，可直接硬编码。

## 影响分析（grep + GitNexus 符号追踪）
所有外链消费者都经过 `src/lib/site.ts` 集中导出，改源头即全链路生效：
- `signinUrl` / `registerUrl` / `registerPlanUrl` → Header / Hero / CtaBanner
- `homeUrl` → Footer
- `pricingPlans[].cta.href`（模块加载时由上述变量计算）→ Pricing / PricingComparison，自动跟随
- **唯一未集中**：`ChatSimulator.tsx:31` 硬编码 viewer iframe `src`

不变项（与环境无关，保持原样）：
- `contactEmail` / `contactMailto`（邮箱）
- `icp.link = https://beian.miit.gov.cn`（政府备案站，必须始终真实）
- `navLinks`（页内锚点 `#xxx`）
- `template.html`（静态设计稿，未被构建引用，不动）

## 改动清单（3 个文件，其中 1 个新增）

### 1. `src/lib/site.ts`（修改）
顶部新增 origin 计算，按 `import.meta.env.DEV` 二选一：
```ts
const isDev = import.meta.env.DEV;
const builderOrigin = isDev ? "http://localhost:8080" : "https://builder.qinglbot.com";
const viewerOrigin  = isDev ? "http://localhost:8081" : "https://viewer.qinglbot.com";
const homeOrigin    = isDev ? "http://localhost:6173" : "https://qinglbot.com";

export const signinUrl  = `${builderOrigin}/signin`;
export const registerUrl = `${builderOrigin}/register`;
export const registerPlanUrl = (plan: string) => `${registerUrl}?plan=${plan}`;
export const homeUrl = homeOrigin;
export const chatSimulatorUrl = `${viewerOrigin}/faq-bax18sd`; // 新增，集中 viewer 外链
```
`contactEmail` / `icp` / `navLinks` / `pricingPlans` 结构不变；`pricingPlans` 的 `cta.href` 因引用上面变量，自动得到环境正确值。

### 2. `src/components/sections/ChatSimulator.tsx`（修改）
iframe `src="https://viewer.qinglbot.com/faq-bax18sd"` → `src={chatSimulatorUrl}`，并从 `@/lib/site` 引入。把唯一散落外链收编回集中配置。

### 3. `src/vite-env.d.ts`（新增）
当前无此文件、无 `import.meta.env` 类型声明。新增：
```ts
/// <reference types="vite/client" />
```
使 `import.meta.env.DEV` 有类型，`tsc -b` 不报错。

## 验证
- `vite dev`：Header/Hero/CtaBanner/Pricing 按钮 → `localhost:8080/...`；ChatSimulator iframe → `localhost:8081/...`；Footer 主站链接 → `localhost:6173`。
- `vite build` 后产物中链接为 `builder.qinglbot.com` / `viewer.qinglbot.com` / `qinglbot.com`。
- `tsc -b`（build 脚本前置）类型检查通过，无 noUnusedLocals 报错。

## 风险
极低。改动集中在配置层，不改任何组件结构/样式/标签；`icp` 与邮箱不受影响；`template.html` 不动。
