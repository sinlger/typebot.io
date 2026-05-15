import { registerUrl } from "@/constants";
import { CtaButtonLink } from "../link";
import imgSrc from "./assets/3d-group.png";

export const WhyTypebotCta = () => (
  <div className="why-cta overflow-hidden relative isolate dark flex justify-between items-center p-4 rounded-3xl w-full">
    <div className="flex flex-col gap-6 flex-1 p-4 md:py-0 md:pl-16 md:pr-20 items-start">
      <h2>为什么选择 Typebot？</h2>
      <p>
        我是 Baptiste，一名热衷于打造出色用户体验的产品工程师。这也是我在三年前开始投入
        Typebot 的原因。我希望把聊天机器人搭建这件事变得直观、有趣，同时给企业足够丰富的
        能力，去构建适用于各种场景的高级聊天机器人。Typebot 是一家小而专注的公司，真正把
        控制权交还给用户；项目采用 fair source 模式，也不会把你锁死在平台里。
      </p>
      <CtaButtonLink size="lg" href={registerUrl}>
        免费开始使用
      </CtaButtonLink>
    </div>
    <img
      src={imgSrc}
      alt="Typebot 积木模块的 3D 插画"
      className="rounded-3xl max-w-md hidden md:block"
    />
  </div>
);
