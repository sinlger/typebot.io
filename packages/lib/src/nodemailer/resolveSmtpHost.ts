import { promises as dns } from "node:dns";
import { isIP } from "node:net";

export const resolveSmtpHost = async (
  host: string | undefined,
): Promise<{ host: string | undefined; servername?: string }> => {
  if (!host || isIP(host) !== 0) return { host };

  try {
    const addresses = await dns.resolve4(host);
    const ipv4 = addresses[0];
    if (!ipv4) return { host, servername: host };
    return { host: ipv4, servername: host };
  } catch {
    return { host, servername: host };
  }
};
