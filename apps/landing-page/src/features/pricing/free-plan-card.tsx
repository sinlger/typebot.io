import { chatsLimits } from "@typebot.io/billing/constants";
import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const FreePlanCard = ({ children }: { children?: React.ReactNode }) => (
  <PricingCardRoot>
    <PlanNamePill className="bg-stone-950 text-white absolute top-0">
      个人版
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>免费</h2>
      {children}
    </div>

    <PricingCardFooter>
      <CtaButtonLink href={registerUrl} variant="secondary" size="lg">
        立即开始
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);

export const FreePlanPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>不限 Typebot 数量</PerkListItem>
    <PerkListItem>
      <span>
        <span className="font-bold">
          {new Intl.NumberFormat().format(chatsLimits.FREE)} 次对话
        </span>
        /月
      </span>
    </PerkListItem>
    <PerkListItem>原生集成</PerkListItem>
    <PerkListItem>Webhooks</PerkListItem>
    <PerkListItem>自定义 Javascript 与 CSS</PerkListItem>
    <PerkListItem>社区支持与文档</PerkListItem>
  </ul>
);
