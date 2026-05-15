import {
  chatsLimits,
  prices,
  seatsLimits,
} from "@typebot.io/billing/constants";
import { formatPrice } from "@typebot.io/billing/helpers/formatPrice";
import { Plan } from "@typebot.io/prisma/enum";
import { Button } from "@typebot.io/ui/components/Button";
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

export const ProPlanCard = ({ children }: { children?: React.ReactNode }) => (
  <PricingCardRoot className="border-violet-400 border-4">
    <PlanNamePill className="bg-violet-400 text-white absolute top-0 flex flex-col">
      专业版
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>
        {formatPrice(prices.PRO)}
          <span className="text-lg">/月</span>
      </h2>
      {children}
    </div>
    <PricingCardFooter>
      <CtaButtonLink
        variant="secondary"
        size="lg"
        href={`${registerUrl}?subscribePlan=${Plan.PRO}`}
      >
        立即订阅
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);

type ProPerksListProps = {
  onChatsTiersClick: () => void;
};

export const ProPerksList = ({ onChatsTiersClick }: ProPerksListProps) => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>包含入门版全部功能，另加...</PerkListItem>
    <PerkListItem>
      <span>
        含 <span className="font-bold">{seatsLimits.PRO} 个席位</span>
      </span>
    </PerkListItem>
    <PerkListItem>
      <div className="flex flex-col gap-1">
        <span className="inline-flex">
          <span className="font-bold">
            {new Intl.NumberFormat().format(chatsLimits.PRO)} 次对话
          </span>
          /月
          <MoreInfoTooltip>{chatsTooltip}</MoreInfoTooltip>
        </span>
        <span className="text-xs text-muted-foreground">
          超出部分:{" "}
          <Button size="xs" variant="outline" onClick={onChatsTiersClick}>
            查看阶梯价格
          </Button>
        </span>
      </div>
    </PerkListItem>
    <PerkListItem>WhatsApp 集成</PerkListItem>
    <PerkListItem>自定义域名</PerkListItem>
    <PerkListItem>深度分析</PerkListItem>
  </ul>
);
