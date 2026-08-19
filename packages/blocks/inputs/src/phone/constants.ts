import { defaultButtonLabel } from "../constants";
import type { PhoneNumberInputBlock } from "./schema";

export const defaultPhoneInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "请输入您的手机号...",
  },
  retryMessageContent: "该手机号似乎无效，请重新输入。",
} as const satisfies PhoneNumberInputBlock["options"];
