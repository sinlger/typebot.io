import { env } from "@typebot.io/env";

export const parseS3PublicBaseUrl = () => {
  if (env.S3_PUBLIC_CUSTOM_DOMAIN) return env.S3_PUBLIC_CUSTOM_DOMAIN;

  const scheme = `http${env.S3_SSL ? "s" : ""}`;
  const portPart = env.S3_PORT ? `:${env.S3_PORT}` : "";

  // 阿里云 OSS 等强制 virtual-hosted style 的服务需要 <bucket>.<endpoint>
  return env.S3_PATH_STYLE === false
    ? `${scheme}://${env.S3_BUCKET}.${env.S3_ENDPOINT}${portPart}`
    : `${scheme}://${env.S3_ENDPOINT}${portPart}/${env.S3_BUCKET}`;
};
