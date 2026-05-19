import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@typebot.io/ui/components/Badge";
import { ChatIcon } from "@typebot.io/ui/icons/ChatIcon";
import { CustomerSupportIcon } from "@typebot.io/ui/icons/CustomerSupportIcon";
import { FilterIcon } from "@typebot.io/ui/icons/FilterIcon";
import { GridViewIcon } from "@typebot.io/ui/icons/GridViewIcon";
import { HeadphonesIcon } from "@typebot.io/ui/icons/HeadphonesIcon";
import { Image02Icon } from "@typebot.io/ui/icons/Image02Icon";
import { LayoutBottomIcon } from "@typebot.io/ui/icons/LayoutBottomIcon";
import { Megaphone03Icon } from "@typebot.io/ui/icons/Megaphone03Icon";
import { SparklesIcon } from "@typebot.io/ui/icons/SparklesIcon";
import { UsersIcon } from "@typebot.io/ui/icons/UsersIcon";
import { WebhookIcon } from "@typebot.io/ui/icons/WebhookIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import type { ComponentType } from "react";
import { Section } from "@/components/Section";
import { ButtonLink, CtaButtonLink, TextLink } from "@/components/link";
import { discordUrl, docsUrl, githubRepoUrl, registerUrl } from "@/constants";
import { Companies } from "@/features/homepage/companies/components/Companies";
import { ForEveryDepartment } from "@/features/homepage/departments/ForEveryDepartment";
import { MainFeatures } from "@/features/homepage/main-features/MainFeatures";
import { Testimonials } from "@/features/homepage/testimonials/Testimonials";
import { createMetaTags } from "@/lib/createMetaTags";

const heroBadges = ["AI 获客", "线索转化", "自动化交付"];

const heroMetrics = [
  {
    value: "10 分钟",
    label: "搭起第一个对话流程",
  },
  {
    value: "多渠道",
    label: "网站、飞书、微信 与嵌入式表单",
  },
  {
    value: "可扩展",
    label: "API、Webhook、独立部署",
  },
];

const capabilityColumns = [
  {
    title: "营销获客",
    description: "把广告、内容、社媒和官网入口统一成可追踪的转化路径。",
    items: ["嵌入咨询与留资", "活动报名收集"],
    imageLabel: "营销场景图",
    imageHint: "投放页与对话式留资组合展示",
    icon: Megaphone03Icon,
    link: {
      type: "internal",
      label: "查看模板库",
      to: "/templates",
    },
  },
  {
    title: "销售转化",
    description: "用分支逻辑自动筛选客户，把更高质量的线索送进团队。",
    items: ["自动资格判断", "预约演示分流"],
    imageLabel: "销售流程图",
    imageHint: "筛选、分流与 CRM 同步路径",
    icon: FilterIcon,
    link: {
      type: "external",
      label: "了解集成能力",
      href: docsUrl,
    },
  },
  {
    title: "客户运营",
    description: "把咨询、支持、回访沉淀成标准化对话，持续降低人工成本。",
    items: ["客服分流", "用户回访"],
    imageLabel: "运营支持图",
    imageHint: "7x24 自助服务与回访闭环",
    icon: CustomerSupportIcon,
    link: {
      type: "external",
      label: "查看开源能力",
      href: githubRepoUrl,
    },
  },
] satisfies Array<{
  title: string;
  description: string;
  items: string[];
  imageLabel: string;
  imageHint: string;
  icon: ComponentType<{ className?: string }>;
  link:
    | {
        type: "internal";
        label: string;
        to: "/templates";
      }
    | {
        type: "external";
        label: string;
        href: string;
      };
}>;

const solutionCards = [
  {
    eyebrow: "官网转化",
    title: "AI 对话式落地页",
    description: "替代传统表单页，让咨询、留资和分流在一段对话里完成。",
    imageLabel: "落地页主图",
    imageHint: "对话式组件与转化路径预览",
    icon: LayoutBottomIcon,
  },
  {
    eyebrow: "广告承接",
    title: "投放线索自动筛选",
    description: "让广告流量先经过对话分诊，再同步到 CRM 或销售。",
    imageLabel: "广告承接图",
    imageHint: "漏斗筛选与线索归因展示",
    icon: FilterIcon,
  },
  {
    eyebrow: "客户支持",
    title: "客服与自助服务",
    description: "把常见问题、资料领取和售后入口整合成 7x24 小时自助体验。",
    imageLabel: "客服场景图",
    imageHint: "FAQ、资料与工单入口整合",
    icon: HeadphonesIcon,
  },
  {
    eyebrow: "自动化",
    title: "Webhook 与业务联动",
    description: "提交后自动触发邮件、企业系统、表格、工单或下游自动化流程。",
    imageLabel: "自动化流程图",
    imageHint: "事件触发与系统联动路径",
    icon: WebhookIcon,
  },
];

const journeySteps = [
  {
    step: "01",
    title: "选模板",
    description: "从成熟模板开始，快速确认第一版方向。",
  },
  {
    step: "02",
    title: "改文案",
    description: "按品牌语气和业务规则调整问题与分支。",
  },
  {
    step: "03",
    title: "接系统",
    description: "把数据送进 CRM、表格或自动化流程。",
  },
  {
    step: "04",
    title: "持续优化",
    description: "根据转化数据迭代问题顺序和路径设计。",
  },
];

const nextStepCards = [
  {
    title: "模板库",
    description: "快速选择线索收集、客服、问卷与预约模板。",
    to: "/templates",
  },
  {
    title: "开发文档",
    description: "查看 API、Webhook 与更深度的接入方式。",
    href: docsUrl,
  },
  {
    title: "开源仓库",
    description: "了解自部署、源码能力与可控性边界。",
    href: githubRepoUrl,
  },
  {
    title: "社区交流",
    description: "加入社区获取最佳实践、模板灵感与案例。",
    href: discordUrl,
  },
] satisfies Array<
  | {
      title: string;
      description: string;
      to: "/templates";
    }
  | {
      title: string;
      description: string;
      href: string;
    }
>;


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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(249,115,22,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.14),transparent_70%)] blur-3xl"
      />
      <Section className="dark gap-10 py-6 md:py-10">
        <div className="relative flex w-full max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2B2B2B,transparent_45%),linear-gradient(180deg,#171717_0%,#0B0B0B_100%)] p-5 shadow-[0_32px_90px_rgba(0,0,0,0.45)] md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex flex-wrap gap-1.5">
                {heroBadges.map((badge) => (
                  <Badge key={badge} variant="solid" colorScheme="orange">
                    {badge}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  用对话式体验升级你的落地页
                  <br />
                  把流量更快变成线索与成交
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-foreground/70 md:text-base">
                  用更少文字把价值讲清楚，把更多空间留给界面与转化路径。
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <CtaButtonLink
                  size="lg"
                  href={registerUrl}
                  className="shadow-[0_18px_50px_rgba(255,112,63,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  免费开始搭建
                </CtaButtonLink>
                <ButtonLink
                  size="lg"
                  variant="outline"
                  to="/templates"
                  className="border-orange-300 bg-orange-50 text-orange-700 transition-colors hover:border-orange-400 hover:bg-orange-100 hover:text-orange-800"
                >
                  查看模板方案
                </ButtonLink>
              </div>
            </div>
            <ImagePlaceholder
              label="首页主视觉"
              hint="对话式落地页与流程预览"
              tone="dark"
              icon={SparklesIcon}
              className="min-h-[240px] flex-1 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:min-h-[360px]"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-1.5 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="text-2xl font-semibold md:text-3xl">
                  {metric.value}
                </div>
                <div className="text-sm leading-6 text-foreground/65">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="gap-10 py-6 md:py-10">
        <VisualSectionLead
          eyebrow="能力总览"
          title="一套 Typebot，覆盖获客、转化、支持与自动化"
          description="用更紧凑的结构把关键能力铺开，让访问者快速理解能做什么。"
          imageLabel="能力总览图"
          imageHint="模块总览与关键路径展示"
          icon={GridViewIcon}
        />
        <div className="grid w-full max-w-7xl gap-4 lg:grid-cols-3">
          {capabilityColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-4 rounded-[1.75rem] border bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
            >
              <ImagePlaceholder
                label={column.imageLabel}
                hint={column.imageHint}
                icon={column.icon}
                className="min-h-[156px]"
              />
              <div className="flex flex-col gap-2.5">
                <div className="text-lg font-semibold">{column.title}</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {column.description}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-2">
                {column.items.map((item) => (
                  <Badge key={item} colorScheme="orange">
                    {item}
                  </Badge>
                ))}
              </div>
              {column.link.type === "internal" ? (
                <ButtonLink
                  to={column.link.to}
                  variant="outline"
                  className="w-fit border-orange-300 bg-orange-50 text-orange-700 hover:border-orange-400 hover:bg-orange-100 hover:text-orange-800"
                >
                  {column.link.label}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href={column.link.href}
                  target="_blank"
                  variant="outline"
                  className="w-fit border-orange-300 bg-orange-50 text-orange-700 hover:border-orange-400 hover:bg-orange-100 hover:text-orange-800"
                >
                  {column.link.label}
                </ButtonLink>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="gap-10 py-6 md:py-10">
        <VisualSectionLead
          eyebrow="解决方案矩阵"
          title="把首页升级成更像业务总入口"
          description="用矩阵化卡片把场景分清楚，让用户直接点到关心的入口。"
          imageLabel="解决方案总览图"
          imageHint="解决方案拼图与场景入口"
          icon={ChatIcon}
          reverse
        />
        <div className="grid w-full max-w-7xl gap-4 md:grid-cols-2">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-52 flex-col gap-3.5 rounded-[1.75rem] border bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F6F6_100%)] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]"
            >
              <ImagePlaceholder
                label={card.imageLabel}
                hint={card.imageHint}
                icon={card.icon}
                className="min-h-[140px]"
              />
              <div className="text-sm font-medium text-foreground/50">
                {card.eyebrow}
              </div>
              <div className="text-xl font-semibold">{card.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-7xl flex-col gap-5 rounded-[2rem] border bg-white p-5 md:p-7">
          <div className="flex flex-col gap-2.5 md:max-w-3xl">
            <div className="text-sm font-medium text-foreground/50">
              核心产品能力
            </div>
            <h2 className="text-3xl md:text-4xl">
              从搭建到交付，每个环节都围绕转化效率设计
            </h2>
          </div>
          <MainFeatures />
        </div>
      </Section>

      <Section className="gap-12 py-6 md:py-10">
        <VisualSectionLead
          eyebrow="业务场景"
          title="不同团队，都能用同一套对话能力完成目标"
          description="营销、销售与客服团队都能复用同一套对话能力。"
          imageLabel="团队场景图"
          imageHint="典型团队场景与入口"
          icon={UsersIcon}
        />
        <ForEveryDepartment />
      </Section>

      <Section className="gap-12 py-6 md:py-10">
        <VisualSectionLead
          eyebrow="落地路径"
          title="比传统落地页更进一步，把后续动作也设计好"
          description="从模板搭建到系统联动，再到持续优化，形成完整上线闭环。"
          imageLabel="落地流程图"
          imageHint="实施路径与上线步骤"
          icon={SparklesIcon}
          reverse
        />
        <div className="grid w-full max-w-7xl gap-4 xl:grid-cols-4">
          {journeySteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col gap-3.5 rounded-[1.75rem] border bg-white p-5 transition-colors hover:bg-orange-50/50"
            >
              <div className="text-sm font-semibold text-foreground/40">
                {step.step}
              </div>
              <div className="text-xl font-semibold">{step.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="gap-10 py-6 md:py-10">
        <div className="flex w-full max-w-7xl flex-col gap-8 rounded-[2rem] border bg-white p-5 md:p-8">
          <Companies />
          <Testimonials />
        </div>
      </Section>

      <Section className="gap-10 py-6 md:py-10">
        <div className="flex w-full max-w-5xl flex-col items-center gap-3 text-center">
          <div className="text-sm font-medium text-foreground/50">下一步行动</div>
          <h2 className="text-3xl md:text-4xl">
            让访问者快速找到下一步，而不是继续读大段说明
          </h2>
        </div>
        <div className="grid w-full max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {nextStepCards.map((card) => (
            <ActionCard
              key={card.title}
              title={card.title}
              description={card.description}
              to={"to" in card ? card.to : undefined}
              href={"href" in card ? card.href : undefined}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

const VisualSectionLead = ({
  eyebrow,
  title,
  description,
  imageLabel,
  imageHint,
  icon,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  imageLabel: string;
  imageHint: string;
  icon?: ComponentType<{ className?: string }>;
  reverse?: boolean;
}) => (
  <div
    className={cn(
      "flex w-full max-w-7xl flex-col gap-5 rounded-[2rem] border bg-white/95 p-5 shadow-[0_14px_44px_rgba(15,23,42,0.08)] backdrop-blur-sm md:items-center md:gap-6 md:p-6",
      reverse ? "md:flex-row-reverse" : "md:flex-row",
    )}
  >
    <div className="flex flex-1 flex-col gap-4">
      <Badge colorScheme="orange">{eyebrow}</Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
    <ImagePlaceholder
      label={imageLabel}
      hint={imageHint}
      icon={icon}
      className="min-h-[200px] flex-1 md:min-h-[260px]"
    />
  </div>
);

const ImagePlaceholder = ({
  label,
  hint,
  className,
  tone = "light",
  icon: IconComponent = Image02Icon,
}: {
  label: string;
  hint: string;
  className?: string;
  tone?: "light" | "dark";
  icon?: ComponentType<{ className?: string }>;
}) => (
  <div
    className={cn(
      "relative flex w-full overflow-hidden rounded-[1.5rem] border p-4",
      tone === "dark"
        ? "border-white/10 bg-white/5 text-foreground/80"
        : "border-border bg-muted/30 text-foreground/70",
      className,
    )}
  >
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-70",
        tone === "dark"
          ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"
          : "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]",
      )}
    />
    <div className="relative flex flex-1 flex-col justify-between gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-medium">{label}</div>
        <div
          className={cn(
            "rounded-full border px-2 py-0.5 text-xs font-medium",
            tone === "dark"
              ? "border-white/10 bg-white/5 text-foreground/70"
              : "border-border bg-white/60 text-foreground/60",
          )}
        >
          预览
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center">
        <div className="pointer-events-none absolute inset-x-2 top-1 flex gap-2 opacity-70">
          <div
            className={cn(
              "h-1.5 flex-1 rounded-full",
              tone === "dark" ? "bg-white/15" : "bg-foreground/10",
            )}
          />
          <div
            className={cn(
              "h-1.5 w-16 rounded-full",
              tone === "dark" ? "bg-white/10" : "bg-foreground/5",
            )}
          />
        </div>
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl border backdrop-blur-sm",
            tone === "dark"
              ? "border-white/10 bg-black/20"
              : "border-border bg-white/70",
          )}
          style={{
            width: 72,
            height: 72,
          }}
        >
          <IconComponent className="size-7 opacity-80" />
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-x-2 bottom-1 rounded-xl border p-2",
            tone === "dark"
              ? "border-white/10 bg-white/[0.03]"
              : "border-border bg-white/65",
          )}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-2.5 flex-1 rounded-full",
                tone === "dark" ? "bg-white/12" : "bg-foreground/10",
              )}
            />
            <div
              className={cn(
                "h-2.5 w-10 rounded-full",
                tone === "dark" ? "bg-white/10" : "bg-foreground/5",
              )}
            />
          </div>
        </div>
      </div>
      <div className="text-xs leading-5 opacity-70">{hint}</div>
    </div>
  </div>
);

const ActionCard = ({
  title,
  description,
  to,
  href,
}: {
  title: string;
  description: string;
  to?: "/templates";
  href?: string;
}) => {
  const content = (
    <div className="flex h-full flex-col gap-2.5 rounded-[1.5rem] border bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm leading-6 text-muted-foreground">
        {description}
      </div>
    </div>
  );

  if (to) {
    return <TextLink to={to}>{content}</TextLink>;
  }

  if (!href) return null;

  return (
    <TextLink href={href} target="_blank" hideExternalIcon>
      {content}
    </TextLink>
  );
};
