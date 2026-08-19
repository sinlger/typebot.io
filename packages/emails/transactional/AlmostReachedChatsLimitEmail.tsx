import { Body, Container, Head, Hr, Html, Text } from "@react-email/components";
import { render } from "@react-email/render";
import { parseNumberWithCommas } from "@typebot.io/lib/utils";
import type { SendMailOptions } from "nodemailer";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { Logo } from "./components/Logo";
import { container, footerText, hr, main, paragraph } from "./styles";

void React;

interface Props {
  usagePercent: number;
  chatsLimit: number;
  workspaceName: string;
}

export const AlmostReachedChatsLimitEmail = ({
  usagePercent,
  chatsLimit,
  workspaceName,
}: Props) => {
  const now = new Date();
  const firstDayOfNextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
  );
  const readableResetDate = firstDayOfNextMonth
    .toDateString()
    .split(" ")
    .slice(1, 4)
    .join(" ");

  const readableChatsLimit = parseNumberWithCommas(chatsLimit);
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            您的工作区 <strong>{workspaceName}</strong> 本月已使用{" "}
            {usagePercent}% 的包含会话额度。达到 {readableChatsLimit}{" "}
            次会话后，超出部分将按量计费。
            <br />
            <br />
            您可以在工作区设置的账单与用量页面查看使用进度。 <br />
            <br />
            访问<a href="https://qinglbot.com/#pricing">定价页</a>
            了解按量计费的详细档位。
            <br />
            <br />
            提醒：您的计费周期将于 {readableResetDate} 结束。
          </Text>

          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

AlmostReachedChatsLimitEmail.PreviewProps = {
  workspaceName: "My Workspace",
  chatsLimit: 2000,
  usagePercent: 95,
} as Props;

export default AlmostReachedChatsLimitEmail;

export const sendAlmostReachedChatsLimitEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof AlmostReachedChatsLimitEmail>) =>
  sendEmail({
    to,
    subject: `您即将达到本月包含的会话额度`,
    html: await render(<AlmostReachedChatsLimitEmail {...props} />),
  });
