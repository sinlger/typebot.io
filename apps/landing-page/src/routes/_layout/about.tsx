import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { WhyTypebotCta } from "@/components/cta/WhyTypebotCta";
import { BuildingsGradientIcon } from "@/features/about/BuildingsGradientIcon";
import { HeartGradientIcon } from "@/features/about/HeartGradientIcon";
import { MessageSquareGradientIcon } from "@/features/about/MessageSquareGradientIcon";
import { ZapGradientIcon } from "@/features/about/ZapGradientIcon";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/about")({
  head: () => ({
    meta: createMetaTags({
      title: "关于我们 | Typebot",
      description:
        "Typebot 帮助企业打造个性化、可互动的对话体验，与用户建立更深层的连接。",
      imagePath: "/images/default-og.png",
      path: "/about",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper>
      <div className="max-w-3xl mx-auto gap-16 flex flex-col">
        <h1>好的对话，建立更好的关系</h1>
        <div className="flex flex-col gap-10 font-display text-3xl md:text-justify">
          <p>
            在 Typebot，我们始终相信{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-30%">
              <MessageSquareGradientIcon className="size-6 inline-flex group-hover:motion-preset-seesaw-lg" />{" "}
              高质量的对话
            </span>{" "}
            能建立更稳固的关系。
          </p>
          <p>
            每一天，人们都会在聊天应用里和朋友、同事、家人交流，因为这种方式自然、投入，
            也最让人熟悉。<br />
            我们认为，企业同样应该借助这种沟通方式，因为在{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-20%">
              <HeartGradientIcon className="size-6 inline-flex group-hover:motion-preset-pulse-lg" />{" "}
              用户愿意聊天的地方
            </span>
            ，转化往往会更高。
          </p>
          <p>
            如今，大多数聊天机器人仍局限于基础客服场景，但我们知道，它们本可以承担更多。
            在我们看来，聊天机器人应该成为实现{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-50%">
              <ZapGradientIcon className="size-6 inline-flex group-hover:motion-preset-oscillate-lg" />{" "}
              有意义互动
            </span>{" "}
            的工具，而不只是按照脚本回复。我们的使命，是把冰冷、事务性的对话，
            转变成真正体现品牌声音的鲜活交流。
          </p>
          <p>
            Typebot{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-70%">
              <BuildingsGradientIcon className="size-6 inline-flex group-hover:motion-preset-bounce" />{" "}
              帮助企业
            </span>{" "}
            打造个性化、可互动的体验，与用户建立更深层的连接。
          </p>
          <p>
            我是 Baptiste，一名热爱用户体验与设计的软件工程师。
          </p>
          <p className="font-bold">
            这也是我创建 Typebot 的原因: 释放聊天机器人的全部潜力，让它们更直观、
            更好看，也真正产生价值。
          </p>
          <p>让我们开始打造更好的对话。</p>
        </div>
      </div>
      <WhyTypebotCta />
    </ContentPageWrapper>
  );
}
