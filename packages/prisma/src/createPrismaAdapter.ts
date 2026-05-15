import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";

export const createPrismaAdapter = (databaseUrl: string | undefined) => {
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");

  if (
    databaseUrl.startsWith("postgres://") ||
    databaseUrl.startsWith("postgresql://")
  ) {
    const parsedDatabaseUrl = new URL(databaseUrl);
    const shouldUseSsl =
      parsedDatabaseUrl.hostname !== "localhost" &&
      parsedDatabaseUrl.hostname !== "127.0.0.1" &&
      parsedDatabaseUrl.hostname !== "::1";

    return new PrismaPg({
      host: parsedDatabaseUrl.hostname,
      port: parsedDatabaseUrl.port ? Number(parsedDatabaseUrl.port) : 5432,
      database: decodeURIComponent(parsedDatabaseUrl.pathname.slice(1)),
      user: decodeURIComponent(parsedDatabaseUrl.username),
      password: decodeURIComponent(parsedDatabaseUrl.password),
      ssl: shouldUseSsl ? { rejectUnauthorized: false } : undefined,
    });
  }

  if (databaseUrl.startsWith("mysql://"))
    return new PrismaPlanetScale({ url: databaseUrl });

  throw new Error(
    "Invalid `DATABASE_URL` format, it should start with `postgresql://`, `postgres://` or `mysql://`",
  );
};
