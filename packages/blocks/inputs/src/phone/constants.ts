import { defaultButtonLabel } from "../constants";
import type { PhoneNumberInputBlock } from "./schema";

export const defaultPhoneInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "请输入你的电话号码...",
  },
  retryMessageContent:
    "这个电话号码似乎无效。你能重新输入一遍吗？",
} as const satisfies PhoneNumberInputBlock["options"];
