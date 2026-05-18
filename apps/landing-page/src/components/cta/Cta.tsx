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
        "dark rounded-2xl flex gap-12 py-12 px-4 items-center max-w-7xl w-full",
        className,
        children ? "flex-col" : "justify-center",
      )}
    >
      {isLogoDisplayed && (
        <img src={magicWand} alt="魔法棒" className="size-24" />
      )}
      {children && (
        <h2 className="text-center px-5 text-balance max-w-5xl">{children}</h2>
      )}
      <div
        className={cn(
          "flex flex-col gap-2 px-2",
          children ? "items-center w-full" : undefined,
        )}
      >
        <CtaButtonLink size="lg" href={registerUrl}>
          {buttonLabel}
        </CtaButtonLink>
        <p className="text-muted-foreground text-center">
          无需试用期，免费版也足够大方。
        </p>
      </div>
    </div>
  );
};
