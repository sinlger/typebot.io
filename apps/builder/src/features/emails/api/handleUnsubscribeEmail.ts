import prisma from "@typebot.io/prisma";
import { normalizeEmail } from "@typebot.io/user/normalizeEmail";
import { verifyUnsubscribeToken } from "@typebot.io/user/verifyUnsubscribeToken";
import { z } from "zod";

export const unsubscribeEmailInputSchema = z.object({
  query: z
    .object({
      email: z.string().optional(),
      token: z.string().optional(),
    })
    .optional(),
});

export const handleUnsubscribeEmail = async ({
  input,
}: {
  input: z.infer<typeof unsubscribeEmailInputSchema>;
}) => {
  const email = input.query?.email ?? "";
  const token = input.query?.token ?? "";
  if (!email || !token) return { message: "已忽略请求" };
  if (!verifyUnsubscribeToken(email, token))
    return { message: "无效的退订令牌" };

  await suppressEmail(email);

  return { message: "已退订" };
};

const suppressEmail = async (email: string) => {
  const normalized = normalizeEmail(email);
  if (!normalized) return false;
  const now = new Date();
  await prisma.suppressedEmail.upsert({
    where: { email: normalized },
    update: { suppressedAt: now },
    create: { email: normalized, suppressedAt: now },
  });
  return true;
};
