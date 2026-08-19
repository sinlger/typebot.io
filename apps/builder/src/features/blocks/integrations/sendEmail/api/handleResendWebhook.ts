import { ORPCError } from "@orpc/server";
import { runRecordTransientGeneralBounces } from "@typebot.io/emails/helpers/suppressedEmails";
import { env } from "@typebot.io/env";
import { Webhook } from "svix";
import { z } from "zod";

export const resendWebhookInputSchema = z.object({
  body: z.string(),
  headers: z.object({
    "svix-id": z.string(),
    "svix-timestamp": z.string(),
    "svix-signature": z.string(),
  }),
});

const resendBounceSchema = z.object({
  type: z.literal("email.bounced"),
  data: z.object({
    to: z.array(z.string()).min(1),
    bounce: z.object({
      type: z.string(),
      subType: z.string().optional(),
    }),
  }),
});

export const handleResendWebhook = async ({
  input: { body, headers },
}: {
  input: z.infer<typeof resendWebhookInputSchema>;
}) => {
  if (!env.RESEND_WEBHOOK_SECRET)
    throw new ORPCError("INTERNAL_SERVER_ERROR", {
      message: "RESEND_WEBHOOK_SECRET is missing",
    });

  const webhook = new Webhook(env.RESEND_WEBHOOK_SECRET);

  let payload: unknown;
  try {
    payload = webhook.verify(body, headers);
  } catch (error) {
    console.error("Resend webhook signature verification failed", error);
    throw new ORPCError("BAD_REQUEST", {
      message: "无效的 Webhook 签名",
    });
  }

  const parsed = resendBounceSchema.safeParse(payload);
  if (!parsed.success) return { message: "已忽略事件" };

  const { to, bounce } = parsed.data.data;
  if (!isTransientGeneralBounce(bounce.type))
    return { message: "已忽略退信类型" };

  await runRecordTransientGeneralBounces(to, headers["svix-id"]);

  return { message: "Suppression updated" };
};

const isTransientGeneralBounce = (type: string) => {
  const normalizedType = type.toLowerCase();
  return normalizedType === "transient" || normalizedType === "temporary";
};
