import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import { TextLink } from "@/components/link";
import { discordUrl, docsUrl } from "../../../constants";

const data = [
  {
    title:
      "定价方案有哪些？免费版包含哪些功能？",
    content: (
      <>
        Typebot 提供灵活的定价方案，适合独立经营者、创业团队以及大型企业。{" "}
        <span className="font-bold">免费版</span>
        包含不限数量的 Typebot、每月 200 次对话、原生集成、Webhooks、自定义
        JavaScript 与 CSS，以及社区支持。
        <br />
        <br />
        如需了解入门版与专业版的更多信息，请查看{" "}
        <TextLink to="/pricing">定价页面</TextLink>。
      </>
    ),
  },
  {
    title:
      "把 Typebot 集成到现有系统和平台有多容易？",
    content: (
      <>
        非常简单。我们提供清晰的分步指南，帮助你快速完成接入。Typebot 支持众多平台，
        包括 WhatsApp、WordPress、Shopify、FlutterFlow、React、Next.js、Notion、
        Webflow、Framer 等等。
      </>
    ),
  },
  {
    title:
      "Typebot 提供哪些 AI / 机器学习能力？",
    content: (
      <>
        Typebot 不绑定特定的 AI 服务商，你可以自由接入任意 AI 提供方。与那些把你锁定在专有系统中的竞品不同，
        Typebot 提供可组合的基础能力，让你无缝对接偏好的 AI 服务。你可以完全掌控注入 AI 的数据以及相关成本。
      </>
    ),
  },
  {
    title:
      "遇到问题或需要帮助时，有哪些支持与资源？",
    content: (
      <>
        如果你遇到问题或需要协助，Typebot 提供以下支持与资源：
        <ol className="list-decimal list-inside flex flex-col gap-6 py-6">
          <li>
            <TextLink href={docsUrl} target="_blank">
              文档
            </TextLink>
            ：我们的文档内容全面且持续更新，覆盖常见问题与各种场景。你可以用搜索快速定位所需信息。
          </li>
          <li>
            <TextLink href={discordUrl} target="_blank">
              Discord 社区
            </TextLink>
            ：加入我们的 Discord 社区，在 #help-and-questions 频道提问或反馈 Bug。我们会尽量每天回复问题；
            你也可以先用搜索看看是否已有相同问题的解答。
          </li>
          <li>
            <span className="font-bold">订阅用户专属支持</span>：入门版或专业版用户可通过应用右下角的聊天组件直接联系我们，获得优先支持。
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Typebot 的安全性如何？如何处理数据隐私？",
    content: (
      <p>
        Typebot 已通过 ISO 27001 认证，体现了我们对信息安全管理最高标准的承诺。我们的原则是只收集提供服务所必需的数据。
        在部分服务能力上，我们会使用少量可信的第三方服务提供商。
        <br />
        <br />
        详细信息请参考我们的{" "}
        <TextLink to="/$slug" params={{ slug: "privacy-policy" }}>
          隐私政策
        </TextLink>
      </p>
    ),
  },
];

export const Faq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <h2>常见问题</h2>
      <div className="flex flex-col gap-2">
        {data.map(({ title, content }) => (
          <Question key={title} title={title}>
            {content}
          </Question>
        ))}
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="p-4 rounded-xl bg-card text-card-foreground cursor-pointer"
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="font-display font-medium text-2xl flex justify-between list-none md:gap-12">
        {title}
        <span
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "shrink-0 [&_svg]:size-6",
          )}
        >
          {isOpen ? <ArrowUp01Icon className="size-8" /> : <ArrowDown01Icon />}
        </span>
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="my-4" />
        {children}
      </motion.div>
    </details>
  );
};
