import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";

const data = [
  {
    title: "什么会被计为一次月度对话？",
    content: (
      <>
        只要用户发起一次新的讨论，就会计为 1 次对话。它与该用户收发了多少条消息无关。
        例如，用户开启一段会话后给机器人发了 10 条消息，仍然只会计为 1 次对话。
        如果用户稍后再次聊天，且之前的会话仍被系统记住，那么这次不会被计为新的对话。
        <br />
        <br />
        你可以简单理解为: 1 次对话，大致对应结果表中的 1 行记录。
      </>
    ),
  },
  {
    title: "达到套餐内的对话上限后会发生什么？",
    content: (
      <>
        这说明你的机器人运行得非常出色。
        <br />
        <br />
        当你使用到套餐额度的 80% 时，我们会先发一封提醒邮件；当达到 100% 时，
        你会再次收到邮件通知。
        <br />
        <br />
        之后，你的对话额度会自动升级到下一档。
      </>
    ),
  },
  {
    title: "我可以随时取消或变更订阅吗？",
    content: (
      <>
        可以。你可以随时取消、升级或降级订阅，没有最低承诺期限，也不会被绑定。
        <br />
        <br />
        当你升级或降级订阅后，新的功能会立即生效；下一张账单会按比例计算费用。
      </>
    ),
  },
  {
    title: "支持按年付费吗？",
    content: (
      <>
        暂不支持。由于订阅价格与对话使用量直接相关，目前我们仅提供月付方案。
      </>
    ),
  },
];

export const Faq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full">
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
      className="p-4 rounded-xl bg-white border border-border cursor-pointer"
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
