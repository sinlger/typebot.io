import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@typebot.io/ui/components/Badge";
import { CustomerSupportIcon } from "@typebot.io/ui/icons/CustomerSupportIcon";
import { FilterIcon } from "@typebot.io/ui/icons/FilterIcon";
import { HeadphonesIcon } from "@typebot.io/ui/icons/HeadphonesIcon";
import { Image02Icon } from "@typebot.io/ui/icons/Image02Icon";
import { LayoutBottomIcon } from "@typebot.io/ui/icons/LayoutBottomIcon";
import { Megaphone03Icon } from "@typebot.io/ui/icons/Megaphone03Icon";
import { SparklesIcon } from "@typebot.io/ui/icons/SparklesIcon";
import { WebhookIcon } from "@typebot.io/ui/icons/WebhookIcon";
import type { ComponentType } from "react";
import { Section } from "@/components/Section";
import { Cta } from "@/components/cta/Cta";
import { ButtonLink, CtaButtonLink, TextLink } from "@/components/link";
import {
  discordUrl,
  docsUrl,
  githubRepoUrl,
  registerUrl,
} from "@/constants";
import { SectionLead } from "@/features/homepage/SectionLead";
import { Companies } from "@/features/homepage/companies/components/Companies";
import { Faq } from "@/features/homepage/components/Faq";
import { ForEveryDepartment } from "@/features/homepage/departments/ForEveryDepartment";
import { MainFeatures } from "@/features/homepage/main-features/MainFeatures";
import { Testimonials } from "@/features/homepage/testimonials/Testimonials";
import { createMetaTags } from "@/lib/createMetaTags";

// ── Hero ──────────────────────────────────────────────────────────────

const heroBadges = ["AI 获客", "线索转化", "自动化交付"];

const heroMetrics = [
  { value: "200 万+", label: "月均对话处理量" },
  { value: "15 万+", label: "已创建对话机器人" },
  { value: "3,000+", label: "Discord 社区成员" },
  { value: "650+", label: "企业客户信赖" },
];

// ── Pain Points & Solutions ──────────────────────────────────────────

const painPoints = [
  {
    problem: "表单转化率不足 2%，流量白白流失",
    detail: "传统静态表单让用户望而却步，填写意愿逐年下降，大量广告预算被浪费。",
  },
  {
    problem: "人工客服成本居高不下，响应速度跟不上",
    detail: "重复性问题占据客服 60% 的时间，团队难以规模化支撑业务增长。",
  },
  {
    problem: "营销工具与业务系统割裂，数据孤岛难打通",
    detail: "获客数据散落在不同工具中，无法形成统一视图，营销 ROI 难以衡量。",
  },
];

const solutions = [
  {
    solution: "对话式体验将转化率提升至 40%+",
    detail:
      "用自然的一对一对话代替死板表单，用户参与意愿显著提高，留资率翻倍。",
  },
  {
    solution: "7×24 小时 AI 自动应答，降低 50% 人工投入",
    detail:
      "常见问题由 AI 自动处理，客服团队聚焦高价值服务，响应速度从小时级降到秒级。",
  },
  {
    solution: "Webhook + API 一键打通 CRM 与自动化流程",
    detail:
      "对话数据实时同步至 CRM、表格与企业系统，打通从获客到成交的完整链路。",
  },
];

// ── Core Capabilities ────────────────────────────────────────────────

const capabilities = [
  {
    title: "营销获客",
    description:
      "把广告投放、内容营销和社交流量统一转化为可追踪的对话线索，实时衡量每个渠道的转化效果。",
    features: ["智能留资表单", "活动报名收集", "广告落地页承接"],
    icon: Megaphone03Icon,
    link: { type: "internal" as const, label: "查看模板库", to: "/templates" as const },
  },
  {
    title: "销售转化",
    description:
      "通过分支逻辑自动筛选高意向线索，减少销售团队无效跟进时间，只把高质量商机送入 CRM。",
    features: ["自动线索评分", "预约演示分流", "CRM 双向同步"],
    icon: FilterIcon,
    link: { type: "external" as const, label: "了解集成能力", href: docsUrl },
  },
  {
    title: "客户运营",
    description:
      "将咨询回复、工单支持和用户回访沉淀为标准化对话流程，持续降低人工客服成本。",
    features: ["智能客服分流", "NPS 满意度调研", "用户自动回访"],
    icon: CustomerSupportIcon,
    link: {
      type: "external" as const,
      label: "查看开源能力",
      href: githubRepoUrl,
    },
  },
] satisfies Array<{
  title: string;
  description: string;
  features: string[];
  icon: ComponentType<{ className?: string }>;
  link:
    | { type: "internal"; label: string; to: "/templates" }
    | { type: "external"; label: string; href: string };
}>;

// ── Solution Scenarios ───────────────────────────────────────────────

const solutionCards = [
  {
    eyebrow: "官网转化",
    title: "AI 对话式落地页",
    description:
      "替代传统表单，让咨询、留资和分流在一段自然对话中完成，访客参与度提升数倍。",
    icon: LayoutBottomIcon,
  },
  {
    eyebrow: "广告承接",
    title: "投放线索自动筛选",
    description:
      "广告流量先经对话分诊，按意向评分自动分流至销售或 CRM，显著提高广告 ROI。",
    icon: FilterIcon,
  },
  {
    eyebrow: "客户支持",
    title: "7×24 智能客服",
    description:
      "常见问题自助解决、资料领取、售后工单一站式整合，客户无需排队等待。",
    icon: HeadphonesIcon,
  },
  {
    eyebrow: "自动化",
    title: "Webhook 业务联动",
    description:
      "对话提交后自动触发邮件通知、企微消息、表格写入或下游自动化流程。",
    icon: WebhookIcon,
  },
];

// ── Quick Start Steps ────────────────────────────────────────────────

const journeySteps = [
  {
    step: "01",
    title: "选模板",
    description:
      "从行业模板库中选择适合你场景的对话模板，一键复用，无需从零设计。",
  },
  {
    step: "02",
    title: "调内容",
    description:
      "按品牌语气和业务规则修改问题、分支逻辑与视觉风格，所见即所得。",
  },
  {
    step: "03",
    title: "接系统",
    description:
      "通过 Webhook 或 API 将对话数据实时同步至 CRM、表格或内部业务系统。",
  },
  {
    step: "04",
    title: "看数据优化",
    description:
      "基于转化率、流失点等数据分析对话表现，持续迭代提升效果。",
  },
];

// ── Route ─────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  head: () => ({
    meta: createMetaTags({
      title: "Typebot | AI 对话式获客与自动化平台",
      description:
        "Typebot 帮你搭建更高转化的对话式落地页、聊天机器人与自动化流程，用一套体验串起获客、转化与交付。",
      imagePath: "/images/default-og.png",
      path: "",
    }),
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative isolate flex flex-col items-stretch overflow-hidden">
      {/* ── Ambient glows ──────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_70%)] blur-3xl"
      />

      {/* ── 1. Hero ───────────────────────────────────── */}
      <Section className="gap-10 py-10 md:py-24">
        <div className="flex w-full max-w-7xl flex-col gap-7 md:flex-row md:items-center">
          {/* Left — copy */}
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex flex-wrap gap-1.5">
              {heroBadges.map((badge) => (
                <Badge key={badge} variant="solid" colorScheme="blue">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                打造高转化对话体验
                <br />
                让每一次互动都产生价值
              </h1>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
                Typebot
                是新一代开源 AI 对话式营销平台，帮助企业轻松搭建智能聊天机器人，
                在官网、飞书、微信等渠道实现自动化获客、转化与客户运营。
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <CtaButtonLink
                size="lg"
                href={registerUrl}
                className="shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(234,88,12,0.35)]"
              >
                免费开始搭建
              </CtaButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                to="/templates"
                className="border-blue-300 bg-blue-50 text-blue-700 transition-colors hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800"
              >
                查看模板方案
              </ButtonLink>
            </div>
          </div>
          {/* Right — visual */}
          <ImagePlaceholder
            label="产品主视觉"
            hint="对话式落地页与流程编辑器预览"
            tone="light"
            icon={SparklesIcon}
            className="min-h-[240px] flex-1 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:min-h-[400px]"
          />
        </div>

        {/* Metrics bar */}
        <div className="grid w-full max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-1 rounded-2xl border bg-white p-5 text-center shadow-sm"
            >
              <div className="text-2xl font-bold md:text-3xl">
                {metric.value}
              </div>
              <div className="text-sm leading-6 text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 2. Pain Points → Solutions ────────────────── */}
      <Section className="gap-10 bg-white py-10 md:py-24">
        <SectionLead
          eyebrow="为什么选择 Typebot"
          title="传统获客方式正在拖慢你的增长"
          description="表单填写率低、人工回复成本高、数据系统难以打通——Typebot 用对话式 AI 重新定义获客与转化流程。"
        />
        <div className="grid w-full max-w-7xl gap-6 md:grid-cols-2">
          {/* Pain points */}
          <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-foreground/50">
              面临的问题
            </div>
            {painPoints.map((item) => (
              <div
                key={item.problem}
                className="flex flex-col gap-1.5 rounded-2xl border-l-4 border-gray-200 bg-gray-50/50 p-4"
              >
                <div className="font-semibold">{item.problem}</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          {/* Solutions */}
          <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-blue-600">
              Typebot 的解决方案
            </div>
            {solutions.map((item) => (
              <div
                key={item.solution}
                className="flex flex-col gap-1.5 rounded-2xl border-l-4 border-blue-500 bg-blue-50/50 p-4"
              >
                <div className="font-semibold">{item.solution}</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 3. Core Capabilities ──────────────────────── */}
      <Section className="gap-10 py-10 md:py-24">
        <SectionLead
          eyebrow="核心能力"
          title="三大核心场景，覆盖完整客户旅程"
          description="从获客到转化再到运营，Typebot 在每个环节都提供专业级对话能力，帮助企业用一套工具打通客户生命周期。"
        />
        <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col gap-5 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50">
                <cap.icon className="size-7 text-blue-600" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="text-lg font-semibold">{cap.title}</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {cap.description}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-2">
                {cap.features.map((f) => (
                  <Badge key={f} colorScheme="blue">
                    {f}
                  </Badge>
                ))}
              </div>
              {cap.link.type === "internal" ? (
                <ButtonLink
                  to={cap.link.to}
                  variant="outline"
                  className="w-fit border-blue-300 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800"
                >
                  {cap.link.label}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href={cap.link.href}
                  target="_blank"
                  variant="outline"
                  className="w-fit border-blue-300 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800"
                >
                  {cap.link.label}
                </ButtonLink>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. Solution Scenarios + MainFeatures ──────── */}
      <Section className="gap-10 bg-white py-10 md:py-24">
        <SectionLead
          eyebrow="解决方案"
          title="无论业务场景如何变化，Typebot 都能灵活应对"
          description="从官网营销到广告承接，从客服支持到业务自动化，一个平台满足所有对话需求，无需在多个工具间切换。"
        />
        <div className="grid w-full max-w-7xl gap-4 md:grid-cols-2">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-52 flex-col gap-3.5 rounded-2xl border bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FAFB_100%)] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50">
                <card.icon className="size-5 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-foreground/50">
                {card.eyebrow}
              </div>
              <div className="text-lg font-bold">{card.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* MainFeatures (unchanged) */}
        <div className="flex w-full max-w-7xl flex-col gap-5 rounded-2xl border bg-white p-5 md:p-7">
          <div className="flex flex-col gap-2.5 md:max-w-3xl">
            <div className="text-sm font-medium text-foreground/50">
              核心产品能力
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              从搭建到交付，每一个环节都围绕转化效率设计
            </h2>
          </div>
          <MainFeatures />
        </div>
      </Section>

      {/* ── 5. Business Scenarios ─────────────────────── */}
      <Section className="gap-12 bg-white py-10 md:py-24">
        <SectionLead
          eyebrow="业务场景"
          title="一个平台，多个团队协同提效"
          description="营销、销售、客服团队都能用同一套对话能力，在不同阶段推动客户旅程向前，打破部门间的工具壁垒。"
        />
        <ForEveryDepartment />
      </Section>

      {/* ── 6. Social Proof ───────────────────────────── */}
      <Section className="gap-10 bg-white py-10 md:py-24">
        <div className="flex w-full max-w-7xl flex-col gap-8 rounded-2xl border bg-white p-5 md:p-8 shadow-sm">
          <Companies />
          <Testimonials />
        </div>
      </Section>

      {/* ── 7. Quick Start + Mid-page CTA ─────────────── */}
      <Section className="gap-10 py-10 md:py-24">
        <SectionLead
          eyebrow="快速上手"
          title="从零到上线，四步完成对话体验搭建"
          description="无需技术背景，半天即可完成从设计到发布的全流程，每个环节都为你准备好了模板与工具。"
        />
        <div className="grid w-full max-w-7xl gap-4 xl:grid-cols-4">
          {journeySteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col gap-3.5 rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:bg-blue-50/30"
            >
              <div className="text-sm font-semibold text-foreground/40">
                {step.step}
              </div>
              <div className="text-base font-bold">{step.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 pt-4">
          <CtaButtonLink
            size="lg"
            href={registerUrl}
            className="shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(234,88,12,0.35)]"
          >
            免费开始搭建
          </CtaButtonLink>
          <p className="text-sm text-muted-foreground">
            无需试用期，基础版永久免费
          </p>
        </div>
      </Section>

      {/* ── 8. FAQ ────────────────────────────────────── */}
      <Section className="gap-10 bg-white py-10 md:py-24">
        <Faq />
      </Section>

      {/* ── 9. Bottom CTA ─────────────────────────────── */}
      <Section className="gap-10 py-10 md:py-24">
        <Cta buttonLabel="免费开始使用">
          准备好用更智能的方式，让每一次对话都创造价值了吗？
        </Cta>
      </Section>
    </div>
  );
}

// ── ImagePlaceholder (used only in Hero) ──────────────────────────────

const ImagePlaceholder = ({
  label,
  hint,
  className,
  icon: IconComponent = Image02Icon,
}: {
  label: string;
  hint: string;
  className?: string;
  tone?: "light" | "dark";
  icon?: ComponentType<{ className?: string }>;
}) => (
  <div
    className={`relative flex w-full overflow-hidden rounded-xl border bg-linear-to-br from-blue-50/50 to-white p-6 ${
      className ?? ""
    }`}
  >
    <div className="relative flex flex-1 flex-col justify-center items-center gap-5">
      <div className="flex items-center justify-center rounded-2xl bg-blue-50 p-4">
        <IconComponent className="size-12 text-blue-500" />
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-foreground">{label}</div>
        <div className="mt-1 text-sm text-muted-foreground">{hint}</div>
      </div>
    </div>
  </div>
);
