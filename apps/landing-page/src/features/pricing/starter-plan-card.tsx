import {
  chatsLimits,
  prices,
  seatsLimits,
} from "@typebot.io/billing/constants";
import { formatPrice } from "@typebot.io/billing/helpers/formatPrice";
import { Plan } from "@typebot.io/prisma/enum";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";
import { chatsTooltip } from "./constants";

export const StarterPlanCard = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <PricingCardRoot>
    <PlanNamePill className="bg-orange-400 text-white absolute top-0 flex flex-col">
      入门版
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>
        {formatPrice(prices.STARTER)}
          <span className="text-lg">/月</span>
      </h2>
      {children}
    </div>
    <PricingCardFooter>
      <CtaButtonLink
        variant="secondary"
        size="lg"
        href={`${registerUrl}?subscribePlan=${Plan.STARTER}`}
      >
        立即订阅
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);

export const StarterPlanPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>包含免费版全部功能，另加...</PerkListItem>
    <PerkListItem>
      <span>
        含 <span className="font-bold">{seatsLimits.STARTER} 个席位</span>
      </span>
    </PerkListItem>
    <PerkListItem>
      <div className="flex flex-col gap-1">
        <span className="inline-flex">
          <span className="font-bold">
            {new Intl.NumberFormat().format(chatsLimits.STARTER)} 次对话
          </span>
          /月
          <MoreInfoTooltip>{chatsTooltip}</MoreInfoTooltip>
        </span>
        <span className="text-xs text-muted-foreground">
          超出部分: 每 500 次对话 $10
        </span>
      </div>
    </PerkListItem>
    <PerkListItem>原生集成</PerkListItem>
    <PerkListItem>移除 Typebot 品牌标识</PerkListItem>
    <PerkListItem>支持向用户收集文件</PerkListItem>
    <PerkListItem>支持创建文件夹</PerkListItem>
    <PerkListItem>专属优先支持</PerkListItem>
  </ul>
);
