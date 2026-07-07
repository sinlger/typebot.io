import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import { env } from "@typebot.io/env";
import type { SendMailOptions } from "nodemailer";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { link } from "../marketing/styles";
import { Logo } from "./components/Logo";
import { container, footerText, hr, main, paragraph } from "./styles";

void React;

interface Props {
  workspaceId: string;
  workspaceName: string;
}

export const InactiveWorkspaceFirstNoticeEmail = ({
  workspaceId,
  workspaceName,
}: Props) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Logo />
        <Text style={paragraph}>
          <strong>{workspaceName}</strong> 工作区已经超过 60 天没有活动了。这意味着您在过去 60 天内没有登录，或者您的 typebot 没有收到任何流量。<br />
          <br />
          <strong>
            我们已自动将其安排在 30 天后删除。
          </strong>{" "}
          其中的所有 typebot 和收集的结果数据都将被永久删除。
        </Text>
        <Text>
          您收到此邮件是因为您是该工作区的管理员。
        </Text>
        <Text style={paragraph}>
          要保持工作区活跃，只需{" "}
          <Link
            href={`${env.NEXTAUTH_URL}/typebots?redirectPath=${encodeURIComponent(`/w/${workspaceId}/typebots`)}`}
          >
            登录您的 Typebot 账户
          </Link>{" "}
          即可将其重新标记为活跃状态。
        </Text>
        <Text style={paragraph}>
          这也是重新探索 Typebot 的好机会！自您上次登录以来，我们添加了许多新功能，包括新的区块、更多的 AI 集成以及大量其他改进。
        </Text>
        <Hr style={hr} />
        <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        <Link
          href="{{unsubscribe}}"
          target="_blank"
          style={{ ...link, color: "#898989", fontSize: "12px" }}
        >
          取消订阅
        </Link>
      </Container>
    </Body>
  </Html>
);

InactiveWorkspaceFirstNoticeEmail.PreviewProps = {
  workspaceName: "My Workspace",
} as Props;

export default InactiveWorkspaceFirstNoticeEmail;

export const sendInactiveWorkspaceFirstNoticeEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof InactiveWorkspaceFirstNoticeEmail>) =>
  sendEmail({
    to,
    subject: `您在 Typebot 中的 '${props.workspaceName}' 工作区已不活跃，即将被删除`,
    html: await render(<InactiveWorkspaceFirstNoticeEmail {...props} />),
  });
