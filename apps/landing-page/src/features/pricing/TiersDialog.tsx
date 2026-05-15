import { proChatTiers } from "@typebot.io/billing/constants";
import { formatPrice } from "@typebot.io/billing/helpers/formatPrice";
import { Dialog } from "@typebot.io/ui/components/Dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/table";

export const TiersDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Dialog.Root isOpen={open} onClose={onClose}>
    <Dialog.Popup>
      <Dialog.Title>对话阶梯价格表</Dialog.Title>
      <Dialog.CloseButton />
      <TableRoot>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>对话上限</TableHead>
              <TableHead>月费</TableHead>
              <TableHead>每 1000 次对话价格</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proChatTiers.map((tier, index) => {
              const pricePerMonth =
                (tier.flat_amount ?? proChatTiers.at(-2)?.flat_amount ?? 0) /
                100;
              return (
                <TableRow key={tier.up_to}>
                  <TableCell>
                    {tier.up_to === "inf"
                      ? "2,000,000+"
                      : tier.up_to.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {index === 0 ? "已包含" : formatPrice(pricePerMonth)}
                  </TableCell>
                  <TableCell>
                    {index === proChatTiers.length - 1
                      ? formatPrice(4.42, { maxFractionDigits: 2 })
                      : index === 0
                        ? "已包含"
                        : formatPrice(
                            (((pricePerMonth * 100) /
                              ((tier.up_to as number) -
                                (proChatTiers.at(0)?.up_to as number))) *
                              1000) /
                              100,
                            { maxFractionDigits: 2 },
                          )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableRoot>
    </Dialog.Popup>
  </Dialog.Root>
);
