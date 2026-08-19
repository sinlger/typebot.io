import { getRuntimeVariable } from "@typebot.io/env/getRuntimeVariable";

const cloudFallback = "partykit.qinglbot.com";

export const getPartyKitHost = (hostFromContext?: string) =>
  hostFromContext ??
  getRuntimeVariable("NEXT_PUBLIC_PARTYKIT_HOST") ??
  cloudFallback;
