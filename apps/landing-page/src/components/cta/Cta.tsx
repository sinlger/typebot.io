import { cn } from "@typebot.io/ui/lib/cn";
import { registerUrl } from "@/constants";
import { CtaButtonLink } from "../link";
import magicWand from "./assets/magic-wand.png";

export type CtaProps = {
  className?: string;
  children?: React.ReactNode;
  buttonLabel?: string;
  isLogoDisplayed?: boolean;
};
export const Cta = ({
  className,
  children = "准备好用更先进的工具，让业务增长更轻松了吗？",
  buttonLabel = "免费开始",
  isLogoDisplayed = true,
}: CtaProps) => {
  return (
    <div
      className={cn(
        "flex gap-10 py-14 px-6 items-center max-w-7xl w-full rounded-2xl",
        "bg-linear-to-br from-blue-600 to-blue-700",
        "shadow-[0_4px_24px_rgba(37,99,235,0.25)]",
        className,
        children ? "flex-col" : "justify-center",
      )}
    >
      {isLogoDisplayed && (
        <img src={magicWand} alt="魔法棒" className="size-16" />
      )}
      {children && (
        <h2 className="text-center px-5 text-balance max-w-3xl text-2xl md:text-3xl font-bold text-white">
          {children}
        </h2>
      )}
      <div
        className={cn(
          "flex flex-col gap-3",
          children ? "items-center w-full" : undefined,
        )}
      >
        <CtaButtonLink size="lg" href={registerUrl}>
          {buttonLabel}
        </CtaButtonLink>
        <p className="text-blue-100 text-center text-sm">
          无需试用期，免费版也足够大方。
        </p>
      </div>
    </div>
  );
};
