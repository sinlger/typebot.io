import { Card } from "@/components/Card";
import editorMockupSrc from "./assets/editor-mockup.png";
import publishClickSrc from "./assets/publish-click.png";
import signUpButtonSrc from "./assets/signup-button.png";

const instructions = [
  {
    image: {
      src: signUpButtonSrc,
      alt: "居中显示的“注册”按钮",
    },
    title: "步骤 1",
    description:
      "创建账号并选择套餐，可先免费试用，无风险体验",
  },
  {
    image: {
      src: editorMockupSrc,
      alt: "聊天机器人编辑器界面示意图",
    },
    title: "步骤 2",
    description: "从模板库选择一个模板，或从零开始创建。",
  },
  {
    image: {
      src: publishClickSrc,
      alt: "鼠标悬停在“发布”按钮上",
    },
    title: "步骤 3",
    description:
      "实时搭建并测试对话流程。准备上线？点击发布即可！",
  },
];

export const GetStarted = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2>快速开始使用 Typebot</h2>
      <div className="flex flex-col md:flex-row max-w-7xl gap-2">
        {instructions.map((instruction) => (
          <InstructionCard
            key={instruction.title}
            image={instruction.image}
            title={instruction.title}
            description={instruction.description}
          />
        ))}
      </div>
    </div>
  );
};

const InstructionCard = ({
  image,
  title,
  description,
}: (typeof instructions)[number]) => {
  return (
    <Card className="flex flex-col items-center gap-6 p-1.5 pb-6">
      <img src={image.src} alt={image.alt} className="rounded-xl" />
      <div className="flex flex-col gap-2 px-3">
        <h3 className="uppercase font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};
