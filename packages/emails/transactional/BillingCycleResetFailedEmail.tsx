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
  workspaceName: string;
  totalChatsUsed: number;
}

export const BillingCycleResetFailedEmail = ({
  workspaceName,
  totalChatsUsed,
}: Props) => {
  const readableChatsUsed = parseNumberWithCommas(totalChatsUsed);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            因支付问题，您的工作区 <strong>{workspaceName}</strong>{" "}
            已被暂时暂停。
            <br />
            <br />
            我们检测到短时间内 <strong>{readableChatsUsed}</strong>{" "}
            次会话，超出了防欺诈阈值。我们尝试向您的账户扣费并重置计费周期，但付款失败。
            <br />
            <br />
            为避免产生更多费用，您的工作区已被暂停。问题解决之前，您的机器人将不会响应新的对话。
            <br />
            <br />
            请联系我们的支持团队以解决此问题并恢复工作区的访问权限。
          </Text>

          <Button href="mailto:support@qinglbot.com" style={primaryButton}>
            联系客服
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

BillingCycleResetFailedEmail.PreviewProps = {
  workspaceName: "My Workspace",
  totalChatsUsed: 15000,
} as Props;

export default BillingCycleResetFailedEmail;

export const sendBillingCycleResetFailedEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof BillingCycleResetFailedEmail>) =>
  sendEmail({
    to,
    subject: "需要处理：您的工作区已暂停",
    html: await render(<BillingCycleResetFailedEmail {...props} />),
  });
