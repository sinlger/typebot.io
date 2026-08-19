import { defaultButtonLabel } from "../constants";
import type { DateInputBlock } from "./schema";

export const defaultDateInputOptions = {
  hasTime: false,
  isRange: false,
  labels: { button: defaultButtonLabel, from: "开始日期：", to: "结束日期：" },
  format: "dd/MM/yyyy",
  formatWithTime: "dd/MM/yyyy HH:mm",
} as const satisfies DateInputBlock["options"] & {
  formatWithTime: string;
};
