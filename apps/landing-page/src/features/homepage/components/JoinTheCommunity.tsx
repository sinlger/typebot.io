import { cx } from "@typebot.io/ui/lib/cva";
import { CtaButtonLink } from "@/components/link";
import { discordUrl } from "../../../constants";
import abhaySrc from "../testimonials/assets/abhay.jpeg";
import barrettaSrc from "../testimonials/assets/barretta.jpeg";
import joshuaSrc from "../testimonials/assets/joshua.jpg";
import kurniaSrc from "../testimonials/assets/kurnia.jpeg";
import laszloSrc from "../testimonials/assets/laszlo.jpeg";
import lucasSrc from "../testimonials/assets/lucas.png";
import nicolaiSrc from "../testimonials/assets/nicolai.jpg";

const stats = [
  {
    stat: "2M+",
    label: "每月对话量",
  },
  {
    stat: "1.5M+",
    label: "已发布机器人",
  },
  {
    stat: "3,000+",
    label: "Discord 社区成员",
  },
];

const avatars = [
  {
    src: abhaySrc,
    alt: "社区成员 1 头像",
    position: "top-1 left-36",
  },
  {
    src: laszloSrc,
    alt: "社区成员 2 头像",
    position: "top-32 left-4 delay-500",
  },
  {
    src: joshuaSrc,
    alt: "社区成员 3 头像",
    position: "bottom-8 left-24 delay-300",
  },
  {
    src: lucasSrc,
    alt: "社区成员 4 头像",
    position: "-bottom-7 -left-7 delay-700",
  },
  {
    src: kurniaSrc,
    alt: "社区成员 5 头像",
    position: "top-1 right-36 delay-1000",
  },
  {
    src: nicolaiSrc,
    alt: "社区成员 6 头像",
    position: "top-28 right-4 delay-500",
  },
  {
    src: barrettaSrc,
    alt: "社区成员 7 头像",
    position: "bottom-12 right-32 delay-300",
  },
];

export const JoinTheCommunity = () => (
  <div className="flex flex-col rounded-2xl w-full max-w-7xl bg-card border">
    <div className="relative isolate flex dark rounded-2xl md:rounded-b-none p-6 pt-12 md:pb-12 justify-center overflow-hidden">
      <FloatingAvatars className="hidden md:block" />
      <div className="flex flex-col gap-12 md:items-center max-w-4xl">
        <div className="flex flex-col gap-6 text-balance md:text-center">
          <h2 className="text-gray-12">
            一起重塑
            <br className="hidden md:block" />
            对话式 AI 应用的未来
          </h2>
        </div>
        <CtaButtonLink size="lg" href={discordUrl} target="_blank">
          加入社区
        </CtaButtonLink>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-evenly gap-6 p-6 md:p-8">
      {stats.map(({ stat, label }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <span className="text-4xl font-display font-medium">{stat}</span>
          <span className="text-gray-11">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const FloatingAvatars = ({ className }: { className?: string }) => (
  <div className={className}>
    {avatars.map(({ src, alt, position }) => (
      <img
        key={alt}
        src={src}
        alt={alt}
        className={cx(
          "rounded-full w-16 h-16 border-4 absolute animate-float",
          position,
        )}
      />
    ))}
  </div>
);
