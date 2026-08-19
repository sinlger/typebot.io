import { defaultButtonLabel } from "../constants";
import type { EmailInputBlock } from "./schema";

export const defaultEmailInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "请输入您的邮箱...",
  },
  retryMessageContent: "该邮箱似乎无效，请重新输入。",
} as const satisfies EmailInputBlock["options"];
