import { Config, Effect, Layer, Redacted, Schema, ServiceMap } from "effect";
import { createTransport, type SendMailOptions } from "nodemailer";
import { resolveSmtpHost } from "./resolveSmtpHost";

export class NodemailerError extends Schema.TaggedErrorClass<NodemailerError>()(
  "@typebot/NodemailerError",
  {
    cause: Schema.optional(Schema.Unknown),
  },
) {}

export class NodemailerClient extends ServiceMap.Service<
  NodemailerClient,
  {
    sendMail: (
      options: SendMailOptions,
    ) => Effect.Effect<void, NodemailerError>;
  }
>()("@typebot/NodemailerClient") {
  static readonly layer = Layer.unwrap(
    Effect.gen(function* () {
      const smtpHost = yield* Config.string("SMTP_HOST");
      const { host, servername } = yield* Effect.tryPromise({
        try: () => resolveSmtpHost(smtpHost),
        catch: (error) => new NodemailerError({ cause: error }),
      });
      const transport = createTransport(
        {
          host,
          ...(servername ? { servername } : {}),
          port: yield* Config.port("SMTP_PORT"),
          secure: yield* Config.boolean("SMTP_SECURE").pipe(
            Config.withDefault(false),
          ),
          ignoreTLS: yield* Config.boolean("SMTP_IGNORE_TLS").pipe(
            Config.withDefault(undefined),
          ),
          auth: {
            user: yield* Config.string("SMTP_USERNAME"),
            pass: Redacted.value(yield* Config.redacted("SMTP_PASSWORD")),
          },
        },
        {
          from: yield* Config.string("NEXT_PUBLIC_SMTP_FROM"),
        },
      );

      return Layer.succeed(
        NodemailerClient,
        NodemailerClient.of({
          sendMail: (options: SendMailOptions) =>
            Effect.tryPromise({
              try: () => transport.sendMail(options),
              catch: (error) => new NodemailerError({ cause: error }),
            }),
        }),
      );
    }),
  );
}

export const NodemailerClientLayer = NodemailerClient.layer;
