import { env } from "@typebot.io/env";

export const isCloudProdInstance = () => {
  if (typeof window !== "undefined") {
    return (
      window.location.hostname === "app.qingzbot.com" ||
      window.location.hostname === "app.typebot.io"
    );
  }
  return (
    env.NEXTAUTH_URL === "https://app.qingzbot.com" ||
    env.NEXTAUTH_URL === "https://app.typebot.io"
  );
};
