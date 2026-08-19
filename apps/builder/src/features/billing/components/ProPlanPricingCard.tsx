import { T, useTranslate } from "@tolgee/react";
import { Plan } from "@typebot.io/prisma/enum";
import { Button } from "@typebot.io/ui/components/Button";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Tooltip } from "@typebot.io/ui/components/Tooltip";
import { TickIcon } from "@typebot.io/ui/icons/TickIcon";

type Props = {
  currentPlan: Plan;
  isLoading: boolean;
  onPayClick: () => void;
};

export const ProPlanPricingCard = ({
  currentPlan,
  isLoading,
  onPayClick,
}: Props) => {
  const { t } = useTranslate();
  const getButtonLabel = () => {
    if (currentPlan === Plan.PRO)
      return t("billing.pricingCard.upgradeButton.current");
    return t("upgrade");
  };

  return (
    <div className="flex p-6 relative h-full flex-col flex-1 border rounded-lg shrink-0 border-purple-6">
      <div className="flex justify-center">
        <div className="absolute top-[-10px] bg-purple-9 font-medium text-white text-xs px-2 py-1 rounded-md">
          {t("billing.pricingCard.pro.mostPopularLabel")}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between h-full">
        <div className="flex flex-col gap-4 mt-2">
          <h2 className="text-2xl">
            <T
              keyName="billing.pricingCard.heading"
              params={{
                strong: <span className="text-purple-900">Pro</span>,
              }}
            />
          </h2>
          <p>{t("billing.pricingCard.pro.description")}</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-bold">
              <Tooltip.Root>
                <Tooltip.Trigger className="underline cursor-pointer">
                  {t("billing.pricingCard.pro.everythingFromStarter")}
                </Tooltip.Trigger>
                <Tooltip.Popup>
                  <ul className="list-none gap-0 flex flex-col">
                    <li className="flex">
                      <TickIcon className="size-6" />
                      {t("billing.pricingCard.starter.brandingRemoved")}
                    </li>
                    <li className="flex">
                      <TickIcon className="size-6" />
                      {t("billing.pricingCard.starter.fileUploadBlock")}
                    </li>
                    <li className="flex">
                      <TickIcon className="size-6" />
                      {t("billing.pricingCard.starter.createFolders")}
                    </li>
                  </ul>
                </Tooltip.Popup>
              </Tooltip.Root>

              {t("billing.pricingCard.plus")}
            </p>
            <ul className="list-none gap-2 flex flex-col">
              <li className="flex">
                <TickIcon className="size-6" />
                {t("billing.pricingCard.pro.includedSeats")}
              </li>
              <li className="flex">
                <TickIcon className="size-6" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-0">
                    <p>10,000 {t("billing.pricingCard.chatsPerMonth")}</p>
                    <MoreInfoTooltip>
                      {t("billing.pricingCard.chatsTooltip")}
                    </MoreInfoTooltip>
                  </div>
                </div>
              </li>
              <li className="flex">
                <TickIcon className="size-6" />
                {t("billing.pricingCard.pro.whatsAppIntegration")}
              </li>
              <li className="flex">
                <TickIcon className="size-6" />
                {t("billing.pricingCard.pro.customDomains")}
              </li>
              <li className="flex">
                <TickIcon className="size-6" />
                {t("billing.pricingCard.pro.analytics")}
              </li>
            </ul>
          </div>

          <Button
            variant="secondary"
            onClick={onPayClick}
            disabled={isLoading || currentPlan === Plan.PRO}
          >
            {getButtonLabel()}
          </Button>
        </div>
      </div>
    </div>
  );
};
