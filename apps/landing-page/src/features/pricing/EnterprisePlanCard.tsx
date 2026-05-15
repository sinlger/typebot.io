import { CtaButtonLink } from "@/components/link";
import { enterpriseLeadTypebotUrl } from "@/constants";
import {
  PerkListItem,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const EnterprisePlanCard = () => (
  <PricingCardRoot className="pt-10 max-w-4xl">
    <div className="flex flex-col md:flex-row gap-10 items-center px-12">
      <div className="flex flex-col gap-3">
        <h2>企业版</h2>
        <p>
          适合希望大规模获取线索并自动化客户支持的大型企业
        </p>
      </div>
      <ul className="flex flex-col gap-3 shrink-0">
        <PerkListItem>自定义对话额度与席位数</PerkListItem>
        <PerkListItem>支持 SLA 服务协议</PerkListItem>
        <PerkListItem>
          7x24 专属客户代表支持
        </PerkListItem>
        <PerkListItem>SSO 与精细化权限控制</PerkListItem>
        <PerkListItem>专属 IP 地址</PerkListItem>
        <PerkListItem>ISO 27001 认证安全保障</PerkListItem>
        <PerkListItem>定制安全问卷支持</PerkListItem>
        <PerkListItem>定制功能开发（附加服务）</PerkListItem>
      </ul>
    </div>
    <PricingCardFooter>
      <CtaButtonLink
        variant="secondary"
        size="lg"
        href={enterpriseLeadTypebotUrl}
      >
        获取报价
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);
