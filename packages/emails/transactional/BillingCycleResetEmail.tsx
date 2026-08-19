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
  url: string;
}

export const BillingCycleResetEmail = ({
  workspaceName,
  totalChatsUsed,
  url,
}: Props) => {
  const readableChatsUsed = parseNumberWithCommas(totalChatsUsed);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            您的工作区 <strong>{workspaceName}</strong>{" "}
            在本计费周期内出现了异常高的使用量。
            <br />
            <br />
            您短时内发起 {readableChatsUsed}{" "}
            次对话，触发了防欺诈机制。账户已受保护，计费周期已提前重置并扣费。
            <br />
            <br />
            您的新计费周期已开始，现已恢复完整的月度聊天额度，可供正常使用。
            <br />
            <br />
            在计费设置中查看账单和使用情况。
          </Text>

          <Button href={url} style={primaryButton}>
            计费详情
          </Button>

          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

BillingCycleResetEmail.PreviewProps = {
  workspaceName: "My Workspace",
  totalChatsUsed: 15000,
  url: "https://qinglbot.com",
} as Props;

export default BillingCycleResetEmail;

export const sendBillingCycleResetEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof BillingCycleResetEmail>) =>
  sendEmail({
    to,
    subject: "您的计费周期已被提前重置",
    html: await render(<BillingCycleResetEmail {...props} />),
  });
