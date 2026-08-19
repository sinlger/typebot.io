import type { PaymentInputBlock } from "./schema";

export enum PaymentProvider {
  STRIPE = "Stripe",
}

export const defaultPaymentInputOptions = {
  provider: PaymentProvider.STRIPE,
  labels: { button: "支付", success: "支付成功" },
  retryMessageContent: "支付失败，请重试。",
  currency: "USD",
} as const satisfies PaymentInputBlock["options"];
