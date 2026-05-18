import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { useId, useState } from "react";
import threeDButton from "./assets/3d-button.png";

const data = [
  {
    title: "轻松的搭建体验",
    content:
      "Typebot 提供丰富的自定义选项，让你轻松搭建对话式界面。我们的方案灵活且可扩展，基于可组合的模块，能够满足各种业务需求。每个模块都有完善的默认设置，同时也支持对细节进行深度配置，以贴合你的场景。",
  },
  {
    title: "丰富的对话能力",
    content:
      "Typebot 不只用于客服，还能用来搭建测验、调研、创意营销等多种对话流程。无论是获客、内部沟通还是不同部门的需求，都能很好覆盖，成为组织内通用且高价值的工具。",
  },
  {
    title: "为愉悦体验而设计",
    content:
      "Typebot 追求一流的体验与精致的界面。易用的可视化流程编辑器能帮助你创建更具互动性、更生动的对话，让使用过程顺滑且愉快。",
  },
  {
    title: "持续进化的技术",
    content:
      "Typebot 的技术持续演进：定期更新包含问题修复、新功能与性能优化。我们确保平台保持最新且稳定可靠，为你带来更好的使用体验。",
  },
];

export const ProductPrinciples = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    if (openedIndex === index) return;
    setOpenedIndex(index);
  };

  return (
    <div className="flex flex-col gap-8 max-w-7xl w-full">
      <h2>我们致力于打造出色的产品</h2>
      <div className="flex md:bg-white rounded-2xl gap-4 p-2 items-start border">
        <div className="flex flex-col gap-2 md:gap-0 md:pl-4 w-full">
          {data.map(({ title, content }, index) => (
            <Principle
              key={title}
              title={title}
              content={content}
              isOpened={index === openedIndex}
              isLastItem={index === data.length - 1}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
        <img
          src={threeDButton}
          alt="带有 Typebot 标志的 3D 按钮插画"
          className="max-w-lg md:block hidden"
        />
      </div>
    </div>
  );
};

const Principle = ({
  title,
  content,
  isOpened,
  isLastItem,
  onClick,
}: {
  title: string;
  content: string;
  isOpened: boolean;
  isLastItem: boolean;
  onClick: () => void;
}) => {
  const contentId = useId();

  return (
    <div className="rounded-xl md:rounded-none md:px-0 bg-white border md:border-0 border-border">
      <button
        type="button"
        className="w-full px-4 py-4 font-display font-medium text-2xl flex flex-col items-stretch gap-3 text-left cursor-pointer"
        aria-expanded={isOpened}
        aria-controls={contentId}
        onClick={onClick}
      >
        <span className="flex justify-between">
          {title}
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "shrink-0 [&_svg]:size-6",
            )}
          >
            {isOpened ? (
              <ArrowUp01Icon className="size-8" />
            ) : (
              <ArrowDown01Icon />
            )}
          </span>
        </span>
      </button>
      {isLastItem ? null : <hr className="hidden md:block mx-4" />}
      <motion.div
        id={contentId}
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpened ? "auto" : 0,
          opacity: isOpened ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="mb-4 md:hidden mx-4 border-border" />
        <p className="py-4 mx-4">{content}</p>
      </motion.div>
    </div>
  );
};
