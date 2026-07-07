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
  workspaceName: string;
  typebotName: string;
  url: string;
  hostEmail: string;
  guestEmail: string;
}

export const GuestInvitationEmail = ({
  workspaceName,
  typebotName,
  url,
  hostEmail,
  guestEmail,
}: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            {hostEmail} 邀请您协作编辑他的 typebot{" "}
            <strong>{typebotName}</strong>。
            <br />
            <br />
            此后，您将在仪表盘中他的工作区 &quot;{workspaceName}&quot; 下看到此 typebot 👍
            <br />
            <br />
            请确保以 <i>{guestEmail}</i> 账户登录。
          </Text>

          <Button href={url} style={primaryButton}>
            前往 typebot
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

GuestInvitationEmail.PreviewProps = {
  workspaceName: "My Workspace",
  typebotName: "My Typebot",
  url: "https://qinglbot.com",
  hostEmail: "host@typebot.io",
  guestEmail: "guest@typebot.io",
} as Props;

export default GuestInvitationEmail;

export const sendGuestInvitationEmail = async (
  props: ComponentProps<typeof GuestInvitationEmail>,
) =>
  sendEmail({
    to: props.guestEmail,
    subject: `您已被邀请协作`,
    html: await render(<GuestInvitationEmail {...props} />),
    replyTo: props.hostEmail,
  });
