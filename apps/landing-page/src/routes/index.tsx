import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@typebot.io/ui/lib/cn";
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
    label: "网站、WhatsApp 与嵌入式表单",
  },
  {
    value: "可扩展",
    label: "API、Webhook、开源自部署",
  },
];

const capabilityColumns = [
  {
    title: "营销获客",
    description: "把广告、内容、社媒和官网入口统一成可追踪的转化路径。",
    items: ["嵌入咨询与留资", "活动报名收集"],
    imageLabel: "营销场景图",
    imageHint: "替换为投放页 / 对话表单 / 线索面板截图",
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
    imageHint: "替换为商机筛选 / 预约演示 / CRM 流程图",
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
    imageHint: "替换为客服机器人 / 回访问卷 / 工单流程图",
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
    imageHint: "替换为首页 KV / 对话 UI / 表单流程图",
  },
  {
    eyebrow: "广告承接",
    title: "投放线索自动筛选",
    description: "让广告流量先经过对话分诊，再同步到 CRM 或销售。",
    imageLabel: "广告承接图",
    imageHint: "替换为线索漏斗 / 投放面板 / 转化流程图",
  },
  {
    eyebrow: "客户支持",
    title: "客服与自助服务",
    description: "把常见问题、资料领取和售后入口整合成 7x24 小时自助体验。",
    imageLabel: "客服场景图",
    imageHint: "替换为 FAQ 机器人 / 资料领取 / 服务面板",
  },
  {
    eyebrow: "自动化",
    title: "Webhook 与业务联动",
    description: "提交后自动触发邮件、企业系统、表格、工单或下游自动化流程。",
    imageLabel: "自动化流程图",
    imageHint: "替换为 webhook / CRM / 自动化编排图",
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
    <div className="flex flex-col items-stretch">
      <Section className="dark gap-12 py-16 md:py-24">
        <div className="flex w-full max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2B2B2B,transparent_45%),linear-gradient(180deg,#171717_0%,#0B0B0B_100%)] p-6 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="max-w-4xl text-balance">
                  用对话式体验升级你的落地页
                  <br />
                  把流量更快变成线索与成交
                </h1>
                <p className="max-w-2xl text-base text-foreground/70 md:text-lg">
                  少一点大段说明，多一点界面展示、场景图和转化路径，让首页更直观。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaButtonLink
                  size="lg"
                  href={registerUrl}
                  className="shadow-[0_18px_50px_rgba(255,112,63,0.35)]"
                >
                  免费开始搭建
                </CtaButtonLink>
                <ButtonLink
                  size="lg"
                  variant="outline"
                  to="/templates"
                  className="border-orange-300 bg-orange-50 text-orange-700 hover:border-orange-400 hover:bg-orange-100 hover:text-orange-800"
                >
                  查看模板方案
                </ButtonLink>
              </div>
            </div>
            <ImagePlaceholder
              label="首页主视觉"
              hint="替换为产品主界面 / 对话流程图 / 品牌 KV"
              tone="dark"
              className="min-h-[280px] flex-1 md:min-h-[420px]"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-2 rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="text-2xl font-semibold md:text-3xl">
                  {metric.value}
                </div>
                <div className="text-sm text-foreground/65">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 gap-12">
        <VisualSectionLead
          eyebrow="能力总览"
          title="一套 Typebot，覆盖获客、转化、支持与自动化"
          description="文字压缩成更少的说明，把更多空间留给产品界面、场景图和转化流程图。"
          imageLabel="能力总览图"
          imageHint="替换为产品总览 / 业务流程 / 品牌视觉"
        />
        <div className="grid w-full max-w-7xl gap-6 lg:grid-cols-3">
          {capabilityColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-5 rounded-[1.75rem] border bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <ImagePlaceholder
                label={column.imageLabel}
                hint={column.imageHint}
                className="min-h-[180px]"
              />
              <div className="flex flex-col gap-3">
                <div className="text-xl font-semibold">{column.title}</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {column.description}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3">
                {column.items.map((item) => (
                  <div
                    key={item}
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-orange-200 bg-[linear-gradient(180deg,#FFF7ED_0%,#FFFFFF_100%)] px-4 text-sm font-medium text-foreground/85 shadow-[0_8px_20px_rgba(251,146,60,0.08)]"
                  >
                    <span className="size-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </div>
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

      <Section className="py-16 md:py-24 gap-12">
        <VisualSectionLead
          eyebrow="解决方案矩阵"
          title="把首页升级成更像业务总入口"
          description="保留关键说明，其余信息改用更明显的卡片视觉和图片占位承接。"
          imageLabel="解决方案总览图"
          imageHint="替换为模块拼图 / 方案海报 / 对话应用场景图"
          reverse
        />
        <div className="grid w-full max-w-7xl gap-4 md:grid-cols-2">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-56 flex-col gap-4 rounded-[1.75rem] border bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F6F6_100%)] p-5"
            >
              <ImagePlaceholder
                label={card.imageLabel}
                hint={card.imageHint}
                className="min-h-[180px]"
              />
              <div className="text-sm font-medium text-foreground/50">
                {card.eyebrow}
              </div>
              <div className="text-2xl font-semibold">{card.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] border bg-white p-6 md:p-8">
          <div className="flex flex-col gap-3 md:max-w-3xl">
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

      <Section className="py-16 md:py-24 gap-16">
        <VisualSectionLead
          eyebrow="业务场景"
          title="不同团队，都能用同一套对话能力完成目标"
          description="把冗长说明缩成一句话，下面直接用更具体的团队场景卡片承接。"
          imageLabel="团队场景图"
          imageHint="替换为营销 / 销售 / 客服团队使用场景图"
        />
        <ForEveryDepartment />
      </Section>

      <Section className="py-16 md:py-24 gap-16">
        <VisualSectionLead
          eyebrow="落地路径"
          title="比传统落地页更进一步，把后续动作也设计好"
          description="从模板搭建到系统联动，再到持续优化，形成完整上线闭环。"
          imageLabel="落地流程图"
          imageHint="替换为 01-04 步骤流程 / 实施路径 / 交付路线图"
          reverse
        />
        <div className="grid w-full max-w-7xl gap-4 xl:grid-cols-4">
          {journeySteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col gap-4 rounded-[1.75rem] border bg-white p-6"
            >
              <div className="text-sm font-semibold text-foreground/40">
                {step.step}
              </div>
              <div className="text-2xl font-semibold">{step.title}</div>
              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24 gap-12">
        <div className="flex w-full max-w-7xl flex-col gap-10 rounded-[2rem] border bg-white p-6 md:p-10">
          <Companies />
          <Testimonials />
        </div>
      </Section>

      <Section className="py-16 md:py-24 gap-12">
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
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  imageLabel: string;
  imageHint: string;
  reverse?: boolean;
}) => (
  <div
    className={cn(
      "flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] border bg-white p-6 md:items-center md:gap-8 md:p-8",
      reverse ? "md:flex-row-reverse" : "md:flex-row",
    )}
  >
    <div className="flex flex-1 flex-col gap-4">
      <div className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground/60">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
    <ImagePlaceholder
      label={imageLabel}
      hint={imageHint}
      className="min-h-[220px] flex-1 md:min-h-[300px]"
    />
  </div>
);

const ImagePlaceholder = ({
  label,
  hint,
  className,
  tone = "light",
}: {
  label: string;
  hint: string;
  className?: string;
  tone?: "light" | "dark";
}) => (
  <div
    className={cn(
      "flex w-full flex-col justify-between rounded-[1.5rem] border border-dashed p-5",
      tone === "dark"
        ? "border-white/15 bg-white/5 text-foreground/80"
        : "border-border bg-muted/40 text-foreground/70",
      className,
    )}
  >
    <div className="text-sm font-medium">{label}</div>
    <div className="flex flex-1 items-center justify-center">
      <div className="rounded-full border px-4 py-2 text-sm opacity-70">
        图片预留位
      </div>
    </div>
    <div className="text-sm leading-6 opacity-70">{hint}</div>
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
    <div className="flex h-full flex-col gap-3 rounded-[1.5rem] border bg-white px-5 py-5 transition-colors hover:bg-accent">
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
