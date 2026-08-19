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
  url: string;
  hostEmail: string;
  guestEmail: string;
}

export const WorkspaceMemberInvitationEmail = ({
  workspaceName,
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
            {hostEmail} 邀请您作为团队成员协作他的工作区{" "}
            <strong>{workspaceName}</strong>。
            <br />
            <br />
            此后，您将在仪表盘中看到此工作区 👍
            <br />
            <br />
            请确保以 <i>{guestEmail}</i> 账户登录。
          </Text>

          <Button href={url} style={primaryButton}>
            前往工作区
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

WorkspaceMemberInvitationEmail.PreviewProps = {
  workspaceName: "My Workspace",
  url: "https://qinglbot.com",
  hostEmail: "host@qinglbot.com",
  guestEmail: "guest@qinglbot.com",
} as Props;

export default WorkspaceMemberInvitationEmail;

export const sendWorkspaceMemberInvitationEmail = async (
  props: ComponentProps<typeof WorkspaceMemberInvitationEmail>,
) =>
  sendEmail({
    to: props.guestEmail,
    subject: `您已被邀请协作`,
    html: await render(<WorkspaceMemberInvitationEmail {...props} />),
    replyTo: props.hostEmail,
  });
