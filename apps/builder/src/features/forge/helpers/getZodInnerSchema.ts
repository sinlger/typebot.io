import { z } from "zod";

export const getZodInnerSchema = (schema: z.ZodType): z.ZodType => {
  if (isZodWrapper(schema)) {
    const innerSchema = getZodInnerSchema(schema.unwrap());
    return mergeLayoutMeta(schema, innerSchema);
  }

  if (isZodPipe(schema)) {
    const inSchema = schema.in;
    const outSchema = schema.out;
    const targetSchema = isZodTransform(inSchema)
      ? outSchema
      : isZodTransform(outSchema)
        ? inSchema
        : (inSchema ?? outSchema);
    if (!targetSchema) return schema;
    const innerSchema = getZodInnerSchema(targetSchema);
    return mergeLayoutMeta(schema, innerSchema);
  }

  if (isZodLazy(schema)) {
    const innerSchema = getZodInnerSchema(schema.unwrap());
    return mergeLayoutMeta(schema, innerSchema);
  }

  return schema;
};

const mergeLayoutMeta = (source: z.ZodType, target: z.ZodType) => {
  const layout = source.meta?.()?.layout;
  if (!layout) return target;
  const innerMeta = target.meta?.();
  return target.meta({
    ...(innerMeta ?? {}),
    layout,
  });
};

const isZodWrapper = (
  schema: z.ZodType,
): schema is
  | z.ZodOptional<z.ZodType>
  | z.ZodNullable<z.ZodType>
  | z.ZodDefault<z.ZodType>
  | z.ZodCatch<z.ZodType>
  | z.ZodReadonly<z.ZodType> =>
  schema.type === "optional" ||
  schema.type === "nullable" ||
  schema.type === "default" ||
  schema.type === "catch" ||
  schema.type === "readonly";

const isZodPipe = (
  schema: z.ZodType,
): schema is z.ZodPipe<z.ZodType, z.ZodType> => schema.type === "pipe";

const isZodLazy = (schema: z.ZodType): schema is z.ZodLazy<z.ZodType> =>
  schema.type === "lazy";

const isZodTransform = (
  schema: z.ZodType | undefined,
): schema is z.ZodTransform => schema?.type === "transform";
