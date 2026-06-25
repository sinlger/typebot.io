import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import { parseNumberWithCommas } from "@typebot.io/lib/utils";
import type { SendMailOptions } from "nodemailer";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { Logo } from "./components/Logo";
import {
  container,
  footerText,
  hr,
  main,
  paragraph,
  primaryButton,
} from "./styles";

void React;

interface Props {
  chatsLimit: number;
  url: string;
}

/**
 * to FREE workspaces or workspaces with `chatsHardLimit` set
 */
export const ReachedChatsLimitEmail = ({ chatsLimit, url }: Props) => {
  const readableChatsLimit = parseNumberWithCommas(chatsLimit);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            您已达到月度 {readableChatsLimit} 次会话的上限。
            <br />
            <br />
            如果您希望机器人本月继续与用户对话，需要升级您的套餐。🚀
          </Text>

          <Button href={url} style={primaryButton}>
            升级工作区
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>Typebot - Build faster, Chat smarter</Text>
        </Container>
      </Body>
    </Html>
  );
};

ReachedChatsLimitEmail.PreviewProps = {
  chatsLimit: 10000,
  url: "https://typebot.io",
} as Props;

export default ReachedChatsLimitEmail;

export const sendReachedChatsLimitEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof ReachedChatsLimitEmail>) =>
  sendEmail({
    to,
    subject: `您已达到月度会话上限`,
    html: await render(<ReachedChatsLimitEmail {...props} />),
  });
