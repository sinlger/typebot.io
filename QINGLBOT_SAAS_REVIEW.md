# QinglBot SaaS 化审计与优化报告

> 生成时间：本次会话
> 目标：品牌改造查漏（typebot → QinglBot）、汉化补全、为"先免费后收费"的 SaaS 化做准备，并记录不合理/可优化之处。
> 说明：`@typebot.io/*` 包名、Prisma 字段、CSS 类、API 路径、自定义元素名等**技术性引用**不在替换范围（改动会破坏兼容性，AGENTS.md 也明确这是有意的）。

---

## 一、本次已修复（可直接上线）

### 1. 品牌残留（用户可见）

| 文件 | 修改 |
|---|---|
| `apps/builder/src/i18n/zh-CN.json` | 4 处：billing.contribution.preLink、editor.sidebarBlock.typebot.label、publish.versionWarning（Typebot V6 → QinglBot V6）、workspace 删除确认（typebot → 机器人） |
| `apps/builder/src/i18n/*.json`（10 语言） | 值域内 `Typebot`→`QinglBot`、`typebots`→`QinglBots`、`typebot`→`QinglBot`（模板变量 `typebotName` 保留）；顺带修了 en 一处 "about to a deploy" 语法 |
| `apps/viewer/src/lib/i18n.ts` | 欢迎页文案 Typebot → QinglBot（zh+en），docs.typebot.com 链接 → qinglbot.com |
| `apps/viewer/src/components/Seo.tsx` | og:url / twitter:url 兜底 `bot.typebot.io` → viewer.qinglbot.com |
| `apps/viewer/src/pages/[[...publicId]].tsx` | `app.typebot.com` 兜底 → builder.qinglbot.com；错误页英文消息 → 中文 |
| `apps/viewer/src/components/TypebotLogo.tsx` | SVG `<title>` → QinglBot Logo |
| `packages/env/src/index.ts` | `NEXT_PUBLIC_VIEWER_404_SUBTITLE` 默认值英文 → 中文 |
| `apps/builder/src/features/theme/galleryTemplates.ts` | 4 个主题模板显示名：Typebot Light/Dark → QinglBot 浅色/深色（id 保留，避免破坏已存模板） |
| `apps/builder/src/components/NotFoundPage.tsx` + 2 调用方 | "not found." → "未找到…"、"Dashboard" → "返回控制台"、resourceName 汉化 |
| `apps/builder/.../IframeSnippet.tsx` | iframe title="Typebot" → "QinglBot" |
| `apps/builder/.../Script*Instructions.tsx` + NotionDeployDialog | 部署引导英文句 → 中文 |
| `packages/embeds/js/.../LiteBadge.tsx` | "Made with Typebot" → "由 QinglBot 驱动"；typebot.io 链接 → qinglbot.com |
| `packages/embeds/js/.../TypebotLogo.tsx` | SVG title → QinglBot Logo |
| `packages/embeds/js/.../guessApiHost.ts`、`getPartyKitHost.ts` | 云端兜底 host typebot.io/partykit.typebot.io → qinglbot.com |
| `apps/landing-page-v0/.../ChatSimulator.tsx` | iframe title="Typebot" → "擎流对话演示" |
| `apps/builder/.../TypebotHeader.tsx` | 清理冗余三元 + 未使用 import |

### 2. 邮件模板（packages/emails）

| 文件 | 修改 |
|---|---|
| `VerificationCodeEmail.tsx` | 3 处 "您的 Typebot 验证码" → QinglBot |
| `UserOnboardingEmail.tsx` + `packages/user/src/workflows/startUserOnboardingWorkflow.ts` | 主题 "Welcome to Typebot!" → 中文；移除上游创始人 Baptiste 署名与上游 YouTube 视频；正文改 QinglBot 团队口吻 |
| `packages/results/src/workflows/exportResultsWorkflow.ts` | 主题 "Your results export is ready" → 中文（与模板 helper 一致） |
| `AlmostReachedChatsLimitEmail.tsx` | 正文整段英文 → 中文；死链 qinglbot.com/pricing → qinglbot.com/#pricing |
| `GuestInvitationEmail.tsx` | typebot 术语 → 机器人；示例邮箱 typebot.io → qinglbot.com |
| `BillingCycleResetFailedEmail.tsx` | mailto:support@typebot.io → support@qinglbot.com |
| `InactiveWorkspaceFirstNoticeEmail.tsx` | Typebot/typebot → QinglBot/机器人（主题+正文 5 处） |
| `WorkspaceMemberInvitationEmail.tsx` | 示例邮箱 typebot.io → qinglbot.com |
| `components/Logo.tsx`、`marketing/components/NewsletterLayout.tsx` | alt "Typebot's Logo" → QinglBot Logo；页脚 "Typebot.io - Build Faster, Chat Smarter" → 中文品牌行 |
| `LoginCodeEmail.tsx`、`BillingCycleResetEmail.tsx`、`ResultsExportLinkEmail.tsx` | 标点/空格/句号 P1 修正 |

### 3. 终端用户默认文案汉化（重要）

新建机器人的**输入块默认文案**与**系统消息默认值**此前全是英文，终端用户（你的客户）会直接看到：

| 文件 | 修改 |
|---|---|
| `packages/blocks/inputs/src/constants.ts` | `defaultButtonLabel` "Send" → "发送"（影响所有输入块按钮） |
| `text/email/url/phone/number` constants | placeholder + 重试消息 → 中文 |
| `file/constants.ts` | 上传占位/按钮/成功消息 → 中文 |
| `date/constants.ts` | From:/To: → 开始/结束日期 |
| `choice/pictureChoice/constants.ts` | "Filter the options..." → "筛选选项..." |
| `payment/constants.ts` | Pay/Success/失败重试 → 中文 |
| `packages/settings/src/constants.ts` | `defaultSystemMessages` 全部 → 中文 |
| `apps/viewer/src/test/*.spec.ts`（6 个） | e2e 断言同步更新为新 placeholder |

> ⚠️ 注意：这些是**默认值**。已创建的旧机器人若显式存了英文文案，不会自动更新，需在编辑器里逐个改或重新创建。新创建的机器人直接用中文。

### 4. SaaS 免费化开关

- `.env`、`.env.prod`、`.env.example`：新增 `DEFAULT_WORKSPACE_PLAN=UNLIMITED`（新工作区默认全功能解锁，无限对话/席位/自定义域名/Pro 功能）。`isFreePlan` 只认 FREE、`hasProPerks` 已含 UNLIMITED，所以该配置生效即可解锁一切。

### 5. 部署配置一致性

- `deploy/nginx-qinglbot.conf`：qinglbot.com 由 proxy→3004（旧 landing SSR）改为**静态托管** landing-page-v0（与 ECS_DEPLOY.md §4.5 一致）
- `deploy/ecosystem.config.js`：删除已废弃的 `typebot-landing`（3004）进程（v2 已无此项）

### 6. 其他

- `apps/builder/.../ChangePlanForm.tsx`：硬编码英文"contact admin"文案 → 中文
- `apps/builder/.../WorkspaceMembersList.tsx`："Unlock more members"/"Upgrade" → 中文
- `apps/builder/.../DashboardPage.tsx`：toast "Template not found" → 中文
- `packages/whatsapp/*`：2 处错误消息 → 中文

---

## 二、已发现但未改动（需你决策）

### P0 决策项

1. **存量工作区仍是 FREE（200 对话/月/1 席位）**：`DEFAULT_WORKSPACE_PLAN` 只影响之后新建的。线上已有用户若是在 FREE，仍会被限流（虽然 `checkAndReportLastHourResults` 限制执行脚本当前未接入任何 app，实际可能没强制，但 UI 会显示"升级/限额"提示）。
   - 建议：上线前执行
     ```sql
     UPDATE "Workspace" SET "plan"='UNLIMITED' WHERE "plan"='FREE';
     ```
   - 或接入上游的限额 cron（暂不建议，先免费）。

2. **`apps/landing-page`（旧英文 Typebot 站）**：不在部署流程内（deploy 用的是 landing-page-v0），仓库内整站仍是 typebot.com 品牌 + 128 篇英文 content + `constants.ts` 12 条 typebot 域名。
   - 建议：从 nx 配置中移除/归档，避免误部署；或彻底品牌化（工作量大）。

3. **`apps/docs`（Mintlify 文档站）**：`mint.json` 品牌名 Typebot Docs + 大量 app.typebot.io / github.com/baptisteArno/typebot.io 链接（735 处）。ECS_DEPLOY.md 标注"当前未部署"。
   - 建议：未部署前可先归档或排期品牌化。

### P1 建议项

4. **「账单与用量」菜单仍展示**：Stripe 已移除，但工作区设置里的"账单与用量"入口 + 套餐卡片 + 使用进度条仍在（免费阶段会给用户"要收费"的错觉）。
   - 建议：免费阶段隐藏 `WorkspaceSettingsDialog.tsx` 的 billingAndUsage 菜单项，或改成一个说明性页面。

5. **营销邮件（marketing/*Update.tsx）整套休眠**：仓库内无调用点，仍是 Typebot 品牌 + 英文页脚 + app.typebot.io 链接。
   - 建议：删除或全面改牌（决定后我再改）。

6. **`feedback.typebot.io`**（`apps/builder/src/pages/feedback.tsx`）：孤页（无导航入口），重定向到 Typebot 的反馈系统。建议：改为你自己的反馈渠道或删除。

7. **WordPress 插件（packages/embeds/wordpress）**：插件头、后台菜单、默认云端地址都是 Typebot。若你计划发布 WP 插件需品牌化；否则标注弃用。

### P2 记录项（低优先级/技术性）

8. **`apps/viewer/next.config.mjs`**：`has: [{ type: "host", value: "typebot.io" }]` 旧域名重写规则——当前死配置，若不再持有 typebot.io 可删。
9. **`packages/embeds/js` 内 `typebot-standard/popup/bubble` 自定义元素名 + `window.Typebot`**：嵌入 API 面，改动有兼容性影响，建议保留。
10. **测试资产 `apps/viewer/src/test/assets/typebots/*.json`** 里 name/块类型含 typebot，不影响生产。
11. **`galleryTemplates.ts` 的 id（typebot-light 等）**：存库值，保留（只改了显示名）。
12. **`cards` 块 `cardMappableFields`（"Image URL"/"Title"…）**：下拉值=存储值，翻译会破坏已存数据，保留。
13. **i18n 其他 9 语言**：已统一品牌词（Typebot→QinglBot），但各语言的"机器人"术语可能还需校对（非目标市场，低优先）。

---

## 三、优化建议（为 SaaS 化铺路）

1. **术语统一**：全站把"typebot"作为产品名词的 UI/邮件统一为"机器人"（zh）或 "QinglBot"（en）。目前 zh-CN 混用「机器人」「QinglBot」两种说法，建议后续统一（可在 i18n 里定一个术语表）。
2. **i18n 体积**：Tolgee 静态导入了 10 个语言 JSON（约 400KB+），而语言选择器已隐藏、默认 zh-CN。建议只保留 zh-CN + en（兜底），其余 8 个从 `tolgee.tsx` 移除 → 减小首屏 bundle。**（需确认你不再提供多语言）**
3. **限额/用量是未来收费点**：免费阶段虽设为 UNLIMITED，但 `chatsLimits`/`seatsLimits`/`prices` 常量都在，将来接入支付只需：改 `DEFAULT_WORKSPACE_PLAN` 回 FREE + 接入 `checkAndReportLastHourResults` cron + 恢复 ChangePlanForm。建议把"免费额度"设计（如每月免费对话数）现在就定下来。
4. **`NEXT_PUBLIC_TOLGEE_API_KEY`**：当前 tolgee 用静态数据。若 `.env` 配了线上 Tolgee key，会从远程拉翻译并可能覆盖静态中文，建议免费阶段确认静态 zh-CN 生效。
5. **安全**：`ecs.pem` 私钥、`.env`（含数据库/Redis 密码）在仓库里。建议确认 `.gitignore` 已排除，且不要在 git 提交中带上密码。
6. **隐藏语言选择**的 commit 已做，但 `tolgee.tsx` 的 `availableLanguages` 仍列出 10 语言——若浏览器 localStorage 曾有旧语言选择，可能显示非中文。建议在 tolgee 初始化强制 zh-CN 或清理旧 key。

---

## 四、硬编码英文（i18n 缺口）修复进展

扫描（子代理）共发现约 **180+ 处**有效硬编码英文（不含品牌名/SVG title/数据项），重灾区：WhatsApp 部署对话框（40+）、deploy settings 与 instructions 系列（50+）、服务端 ORPCError 消息（40+）、编辑器画布 aria-label/tooltip（20+）、块编辑器表单标签与占位符（60+）。

**全部修复完成**（本人 + 批量子代理，已通过 `bunx nx typecheck builder/viewer` 与 biome lint 复核）：
- 登录/退订/邮件页：`EmailRedirectPage`、`UnsubscribePageClient`（全套状态文案）、`unsubscribe/page.tsx`、`_app.tsx` 升级 toast、`SignInForm` 登录验证码
- 页面标题：Editor/Settings/Theme/Templates/Share（汉化）
- SharePage 校验 toast、DashboardPage 模板 toast
- 结果页全套（ResultDialog/LogsDialog/ResultsPage/表格设置/导出）与主题设置（容器/按钮输入/进度条）表单标签
- 编辑器画布 aria-label/tooltip（缩放/复制/预览/未知错误等）
- 发布/嵌入部署弹窗（Standard/Popup/Bubble settings、iframe/Blink/FlutterFlow/Framer/GTM/Next.js/React/Webflow/Wix/Shopify/WordPress instructions 全套）
- WhatsApp 部署三件套（DeployDialog/CredentialsDialog 全流程指引/ComparisonItem）
- Forge 凭据与 zod 布局
- 块编辑器表单标签与占位符（bubbles/inputs/logic/integrations 各块）
- **服务端 ORPCError 消息 92 处**全部汉化（经 toast 透传 UI 的错误提示）
- 附带清理：`DashboardPage` 移除已失效的 Stripe checkout 死代码（`orpc.billing.createCheckoutSession` 后端已删，原会导致 typecheck 报错）；`TypebotHeader` 移除死代码（冗余三元、未用导入）；`CurrentSubscriptionSummary` 移除未用导入；`LiteBadge` 静态 href `#` → `https://qinglbot.com/`

保留未翻译（有意）：平台/品牌名 label（WhatsApp/Stripe/Google Sheets/OpenAI/360Dialog 等）、枚举/存储值（PlanTag Free/Starter/Pro、EmbedTypeMenu Bubble/Popup/Standard）、货币列表、SVG `<title>`、格式示例占位（邮箱/金额/密钥前缀）。

## 五、待办（本次会话可能继续处理）

- [x] 硬编码英文汉化（完成并通过 typecheck/lint）
- [ ] 确认上面 P0/P1 决策项（需要你拍板）
- [ ] 生成 commit（品牌/汉化/SaaS 开关）
