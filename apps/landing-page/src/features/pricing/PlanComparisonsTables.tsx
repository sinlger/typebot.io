import { chatsLimits, seatsLimits } from "@typebot.io/billing/constants";
import { formatPrice } from "@typebot.io/billing/helpers/formatPrice";
import { parseNumberWithCommas } from "@typebot.io/lib/utils";
import { Button } from "@typebot.io/ui/components/Button";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Infinity01Icon } from "@typebot.io/ui/icons/Infinity01Icon";
import { TickIcon } from "@typebot.io/ui/icons/TickIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/table";
import { chatsTooltip } from "./constants";

type Props = {
  onChatsTiersClick: () => void;
};

export const PlanComparisonTables = ({ onChatsTiersClick }: Props) => (
  <div className="flex flex-col gap-4">
    <TableRoot className="bg-card rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px] min-w-[150px] pl-6">
              使用量
            </TableHead>
            <PlanTableHeads className="min-w-[150px]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="pl-6">机器人总数</TableCell>
            <InfinityTableCell />
            <InfinityTableCell />
            <InfinityTableCell />
          </TableRow>
          <TableRow>
            <TableCell className="pl-6">访客数</TableCell>
            <InfinityTableCell />
            <InfinityTableCell />
            <InfinityTableCell />
          </TableRow>
          <TableRow>
            <TableCell className="pl-6">成员</TableCell>
            <TableCell>仅限你自己</TableCell>
            <TableCell>{seatsLimits.STARTER} 个席位</TableCell>
            <TableCell>{seatsLimits.PRO} 个席位</TableCell>
          </TableRow>
          <TableRow>
            <TableCellWithTooltip className="pl-6" tooltip={chatsTooltip}>
              对话数
            </TableCellWithTooltip>
            <TableCell>{chatsLimits.FREE} / 月</TableCell>
            <TableCell>
              {parseNumberWithCommas(chatsLimits.STARTER)} / 月
            </TableCell>
            <TableCell>
              {parseNumberWithCommas(chatsLimits.PRO)} / 月
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="pl-6">额外对话额度</TableCell>
            <TableCell />
            <TableCell>{formatPrice(10)} / 500 次对话</TableCell>
            <TableCell>
              <Button variant="outline" size="xs" onClick={onChatsTiersClick}>
                查看阶梯价格
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableRoot>

    <TableRoot className="bg-card rounded-xl border py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px] min-w-[200px]">功能</TableHead>
            <PlanTableHeads className="md:min-w-[150px]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCellWithTooltip tooltip="包含展示气泡（文本、图片、视频、嵌入内容）、提问输入（邮箱、网址、手机号等）以及逻辑模块（条件、设置变量等）。">
              20+ 种模块
            </TableCellWithTooltip>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>入门模板</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Webhooks</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Google Sheets</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Google Analytics</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>发送邮件</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Zapier</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Pabbly Connect</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>Make.com</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>自定义 Javascript 与 CSS</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>导出 CSV</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>文件上传输入</TableCell>
            <TableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCellWithTooltip tooltip="将你的 Typebot 按文件夹进行组织管理。">
              文件夹
            </TableCellWithTooltip>
            <TableCell />
            <InfinityTableCell />
            <InfinityTableCell />
          </TableRow>
          <TableRow>
            <TableCell>移除品牌标识</TableCell>
            <TableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>WhatsApp integration</TableCell>
            <TableCell />
            <TableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>自定义域名</TableCell>
            <TableCell />
            <TableCell />
            <InfinityTableCell />
          </TableRow>
          <TableRow>
            <TableCellWithTooltip tooltip="查看表单流失率、提交率等更深入的分析数据。">
              深度分析
            </TableCellWithTooltip>
            <TableCell />
            <TableCell />
            <CheckedTableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableRoot>

    <TableRoot className="bg-card rounded-xl border py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px] min-w-[200px]">支持服务</TableHead>
            <PlanTableHeads className="md:min-w-[150px]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>社区支持</TableCell>
            <CheckedTableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>专属支持渠道</TableCell>
            <TableCell />
            <CheckedTableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>优先支持</TableCell>
            <TableCell />
            <TableCell />
            <CheckedTableCell />
          </TableRow>
          <TableRow>
            <TableCell>功能请求优先级</TableCell>
            <TableCell />
            <TableCell />
            <CheckedTableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableRoot>
  </div>
);

const CheckedTableCell = () => (
  <TableCell>
    <TickIcon className="size-4" />
  </TableCell>
);

const InfinityTableCell = () => (
  <TableCell>
    <Infinity01Icon className="size-4" />
  </TableCell>
);

const TableCellWithTooltip = ({
  children,
  tooltip,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  tooltip: string;
}) => (
  <TableCell className={cn("flex gap-2 items-center", className)}>
    <p>{children}</p>
    <MoreInfoTooltip>{tooltip}</MoreInfoTooltip>
  </TableCell>
);

const PlanTableHeads = ({ className }: { className?: string }) => (
  <>
    <TableHead className={className}>免费版</TableHead>
    <TableHead className={cn("text-primary", className)}>入门版</TableHead>
    <TableHead className={cn("text-violet-500", className)}>专业版</TableHead>
  </>
);
