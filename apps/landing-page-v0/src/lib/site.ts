// 擎流站点全局常量 —— 所有外链集中管理

export const signinUrl = "https://builder.qinglbot.com/signin";
export const registerUrl = "https://builder.qinglbot.com/register";
export const registerPlanUrl = (plan: string) => `${registerUrl}?plan=${plan}`;
export const contactEmail = "support@qinglbot.com";
export const contactMailto = `mailto:${contactEmail}`;
export const homeUrl = "https://qinglbot.com";

export const icp = {
  number: "冀ICP备2026020393号",
  link: "https://beian.miit.gov.cn",
};

export const navLinks = [
  { label: "核心优势", href: "#features" },
  { label: "使用场景", href: "#use-cases" },
  { label: "可视化画布", href: "#editor-preview" },
  { label: "互动体验", href: "#chat-simulator" },
  { label: "资费方案", href: "#pricing" },
  { label: "常见问题", href: "#faq" },
] as const;

export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  name: string;
  badge?: string;
  highlight?: boolean;
  dark?: boolean;
  monthly: number | null; // null = 价格面议 / 免费
  yearly: number | null;
  priceLabel?: string; // 覆盖价格展示（如“￥0 / 永久免费”）
  unit?: string;
  features: string[];
  strikethrough?: string[];
  cta: { label: string; href: string };
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "个人探索",
    monthly: 0,
    yearly: 0,
    priceLabel: "￥0",
    unit: "永久免费",
    features: ["100 次 / 月 互动对话回复", "无限制 创建连线和工作流"],
    strikethrough: ["含有“由擎流驱动”品牌水印"],
    cta: { label: "立即注册", href: registerUrl },
  },
  {
    name: "高级个人 (Starter)",
    monthly: 78,
    yearly: 62,
    unit: "/ 月",
    features: [
      "2,000 次 / 月 互动对话回复",
      "完全去除 擎流官方出厂水印",
      "支持添加高级 API/Webhook 连接",
    ],
    cta: { label: "立即订阅", href: registerPlanUrl("starter") },
  },
  {
    name: "企业协作 (Pro)",
    badge: "🔥 团队首选",
    highlight: true,
    monthly: 178,
    yearly: 142,
    unit: "/ 月",
    features: [
      "10,000 次 / 月 互动对话回复",
      "5 名 团队核心成员协作管理席位",
      "高级统计分析看板，线索数据一键导出",
    ],
    cta: { label: "立即订购", href: registerPlanUrl("pro") },
  },
  {
    name: "专属私有部署",
    dark: true,
    monthly: null,
    yearly: null,
    priceLabel: "价格面议",
    unit: "私有化一键交付",
    features: [
      "完美部署交付于您自己的阿里云/腾讯云后台",
      "数据100%自主隔离，不限制会话并发额度",
      "包年服务期内享一键无损系统升级更新补丁",
    ],
    cta: { label: "咨询独立部署方案", href: contactMailto },
  },
];

// 功能对比表（参考旧 landing-page 的 PlanComparisonTables 结构，本地化为中文 + 人民币套餐）
export type ComparisonGroup = {
  title: string;
  rows: { label: string; values: (string | boolean)[] }[];
};

// 列顺序对应 pricingPlans：个人探索 / 高级个人 / 企业协作 / 专属私有部署
export const comparisonGroups: ComparisonGroup[] = [
  {
    title: "用量",
    rows: [
      { label: "互动对话回复 / 月", values: ["100 次", "2,000 次", "10,000 次", "不限"] },
      { label: "创建工作流数量", values: [true, true, true, true] },
      { label: "团队协作席位", values: ["1", "1", "5", "不限"] },
      { label: "会话并发额度", values: ["标准", "标准", "高并发", "不限"] },
    ],
  },
  {
    title: "功能",
    rows: [
      { label: "可视化拖拽画布", values: [true, true, true, true] },
      { label: "多分支跳转逻辑", values: [true, true, true, true] },
      { label: "去除官方水印", values: [false, true, true, true] },
      { label: "API / Webhook 节点", values: [false, true, true, true] },
      { label: "多端内嵌（气泡/弹窗/全屏）", values: [true, true, true, true] },
      { label: "自定义域名", values: [false, false, true, true] },
      { label: "全链路漏斗分析看板", values: [false, false, true, true] },
      { label: "线索数据一键导出", values: [false, false, true, true] },
    ],
  },
  {
    title: "支持",
    rows: [
      { label: "社区支持与文档", values: [true, true, true, true] },
      { label: "工单优先支持", values: [false, true, true, true] },
      { label: "专属客户经理", values: [false, false, false, true] },
      { label: "一键系统升级补丁", values: [false, false, false, true] },
      { label: "数据私有化隔离", values: [false, false, false, true] },
    ],
  },
];
