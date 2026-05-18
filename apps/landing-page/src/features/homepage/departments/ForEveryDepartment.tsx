import { isDefined, isNotDefined } from "@typebot.io/lib/utils";
import { Button } from "@typebot.io/ui/components/Button";
import { Cancel01Icon } from "@typebot.io/ui/icons/Cancel01Icon";
import { PlusSignIcon } from "@typebot.io/ui/icons/PlusSignIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import { cx } from "@typebot.io/ui/lib/cva";
import { motion } from "motion/react";
import { useState } from "react";
import { MotionCard } from "@/components/motion-wrappers";
import marketingSrc from "./assets/marketing.png";
import productSrc from "./assets/product.png";
import salesSrc from "./assets/sales.png";
import type { DepartmentCardData } from "./types";

const departments = [
  {
    title: "营销",
    sub: "让机器人主导对话，把线索转化为客户。",
    bulletPoints: [
      {
        main: "线索评分",
        sub: "Typebot 通过提问自动给新线索打分并排序。",
      },
      {
        main: "洞察",
        sub: "用互动测验收集访客邮箱，并了解他们的真实需求。",
      },
      {
        main: "内容引流",
        sub: "用优质内容换取邮箱地址。",
      },
    ],
    image: {
      src: marketingSrc,
      alt: "营销插画",
    },
  },
  {
    title: "客服与产品",
    sub: "提供 7×24 小时多渠道支持，让客户更满意。",
    bulletPoints: [
      {
        main: "客户支持",
        sub: "对用户诉求进行分类，并引导到合适的资源。",
      },
      {
        main: "NPS 调研",
        sub: "轻松收集用户对产品的反馈。",
      },
      {
        main: "客户引导",
        sub: "用户注册后立即开始引导与互动，帮助筛选新客户。",
      },
    ],
    image: {
      src: productSrc,
      alt: "产品插画",
    },
  },
  {
    title: "销售",
    sub: "用高意向线索提升预约量与到会率",
    bulletPoints: [
      {
        main: "商机筛选",
        sub: "根据你的销售标准为线索打分，并 7×24 小时解答常见问题。",
      },
      {
        main: "预约会议",
        sub: "自动化安排日程，让预约更简单。",
      },
      {
        main: "线索培育",
        sub: "即时跟进与持续触达，保持线索活跃直到准备购买。",
      },
    ],
    image: {
      src: salesSrc,
      alt: "销售插画",
    },
  },
] as const satisfies DepartmentCardData[];

export const ForEveryDepartment = () => {
  const [openedDepartmentIndex, setOpenedDepartmentIndex] = useState<number>();
  const [lastOpenedDepartmentIndex, setLastOpenedDepartmentIndex] = useState<
    number | undefined
  >();

  const openedDepartment = isDefined(openedDepartmentIndex)
    ? departments[openedDepartmentIndex]
    : undefined;

  return (
    <>
      <div className="w-full gap-12 flex flex-col max-w-7xl">
        <div className="flex flex-col gap-4">
          <h2>为每个团队而设计</h2>
          <p className="text-gray-11 font-normal">
            在整个客户旅程中实现对话自动化。
          </p>
        </div>
        <div className="flex isolate flex-col gap-4 md:gap-6 md:flex-row">
          {departments.map((department, index) => (
            <DepartmentCard
              key={department.title}
              department={department}
              index={index}
              onClick={() => {
                setOpenedDepartmentIndex(index);
              }}
              openedDepartmentIndex={openedDepartmentIndex}
              lastOpenedDepartmentIndex={lastOpenedDepartmentIndex}
            />
          ))}
        </div>
      </div>
      {openedDepartment && (
        <div className="fixed size-full inset-0 flex justify-center items-center">
          <button
            type="button"
            aria-label="关闭部门详情"
            className="bg-background/80 absolute inset-0 animate-in fade-in duration-350"
            onClick={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
          <OpenedDepartmentCard
            className="absolute"
            department={openedDepartment}
            index={openedDepartmentIndex as number}
            onClose={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
        </div>
      )}
    </>
  );
};

const DepartmentCard = ({
  department,
  index,
  onClick,
  openedDepartmentIndex,
  lastOpenedDepartmentIndex,
}: {
  department: DepartmentCardData;
  lastOpenedDepartmentIndex: number | undefined;
  index: number;
  onClick: () => void;
  openedDepartmentIndex: number | undefined;
  className?: string;
}) => (
  <MotionCard
    layoutId={`dep-${index}`}
    className={cx(
      "p-2 relative isolate cursor-pointer hover:brightness-110 transition-[filter] duration-350",
      lastOpenedDepartmentIndex === index &&
        isNotDefined(openedDepartmentIndex) &&
        "z-10",
    )}
    onClick={() => {
      if (isDefined(openedDepartmentIndex)) return;
      onClick();
    }}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.target !== event.currentTarget) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (isDefined(openedDepartmentIndex)) return;
      onClick();
    }}
  >
    <motion.figure layoutId={`dep-${index}-img`}>
      <img
        src={department.image.src}
        alt={department.image.alt}
        width="1035px"
        height="495px"
      />
    </motion.figure>
    <div className="flex flex-col px-2 pb-4 gap-3">
      <motion.h2
        layoutId={`dep-${index}-heading`}
        className="text-3xl font-medium"
        layout="position"
      >
        {department.title}
      </motion.h2>
      <motion.p
        layoutId={`dep-${index}-desc`}
        className="pr-10"
        layout="position"
      >
        {department.sub}
      </motion.p>
    </div>
    {openedDepartmentIndex !== index && (
      <Button
        aria-label="展开部门"
        variant="outline"
        size="icon"
        className="rounded-full p-0 w-6 h-6 absolute bottom-4 right-4"
      >
        <PlusSignIcon />
      </Button>
    )}
  </MotionCard>
);

const OpenedDepartmentCard = ({
  department,
  index,
  className,
  onClose,
}: {
  department: DepartmentCardData;
  index: number;
  className?: string;
  onClose: () => void;
}) => (
  <MotionCard
    className={cn("mx-4 p-2 max-w-xl", className)}
    layoutId={`dep-${index}`}
  >
    <div className="gap-4 flex flex-col">
      <Button
        aria-label="关闭部门"
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 animate-in slide-in-from-bottom-10 fade-in duration-350 delay-500 fill-mode-both"
        onClick={onClose}
      >
        <Cancel01Icon />
      </Button>
      <motion.figure layoutId={`dep-${index}-img`}>
        <img
          src={department.image.src}
          alt={department.image.alt}
          width="1035px"
          height="495px"
        />
      </motion.figure>
      <div className="flex flex-col gap-8 pb-4 px-2">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="text-3xl font-medium"
            layoutId={`dep-${index}-heading`}
            layout="position"
          >
            {department.title}
          </motion.h2>
          <motion.p layoutId={`dep-${index}-desc`} layout="position">
            {department.sub}
          </motion.p>
        </div>
        <ul className="flex flex-col gap-4 pl-4 list-inside list-disc">
          {department.bulletPoints.map((bulletPoint, _index) => (
            <li
              className="text-md"
              key={`${bulletPoint.main}-${bulletPoint.sub}`}
            >
              <span className="font-medium">{bulletPoint.main}:</span>{" "}
              {bulletPoint.sub}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </MotionCard>
);
