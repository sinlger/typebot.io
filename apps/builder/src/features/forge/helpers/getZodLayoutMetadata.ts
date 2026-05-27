import { z } from "zod";
import type { ZodLayoutMetadata } from "@typebot.io/forge/zodLayout";

export const getZodLayoutMetadata = (
  schema: z.ZodType,
): ZodLayoutMetadata | undefined => {
  const meta = schema.meta?.();
  if (!meta) return;
  return isZodLayoutMetadata(meta.layout) ? meta.layout : undefined;
};

const isZodLayoutMetadata = (value: unknown): value is ZodLayoutMetadata =>
  isRecord(value);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
