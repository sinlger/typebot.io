import { authenticatedProcedure } from "@typebot.io/config/orpc/builder/middlewares";
import { z } from "zod";
import { subscriptionSchema } from "../schemas/subscription";
import {
  getSubscriptionInputSchema,
  handleGetSubscription,
} from "./handleGetSubscription";
import { getUsageInputSchema, handleGetUsage } from "./handleGetUsage";

export const billingRouter = {
  getUsage: authenticatedProcedure
    .route({
      method: "GET",
      path: "/v1/billing/usage",
      summary: "Get current plan usage",
      tags: ["Billing"],
    })
    .input(getUsageInputSchema)
    .output(z.object({ totalChatsUsed: z.number(), resetsAt: z.date() }))
    .handler(handleGetUsage),

  getSubscription: authenticatedProcedure
    .input(getSubscriptionInputSchema)
    .output(
      z.object({
        subscription: subscriptionSchema.or(z.null()),
      }),
    )
    .handler(handleGetSubscription),
};
