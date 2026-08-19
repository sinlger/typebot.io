import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import type { SendMailOptions } from "nodemailer";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { Logo } from "./components/Logo";
import {
  codeStyle,
  container,
  footerText,
  heading,
  hr,
  main,
  paragraph,
} from "./styles";

void React;

interface Props {
  code: string;
}

export const VerificationCodeEmail = ({ code }: Props) => (
  <Html>
    <Head />
    <Preview>您的 QinglBot 验证码</Preview>
    <Body style={main}>
      <Container style={container}>
        <Logo />
        <Heading style={heading}>您的 QinglBot 验证码</Heading>
        <code style={codeStyle}>{code}</code>
        <Text style={paragraph}>此验证码仅 1 小时内有效。</Text>
        <Hr style={hr} />
        <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
      </Container>
    </Body>
  </Html>
);

VerificationCodeEmail.PreviewProps = {
  code: "free-rrree-free-rrree",
} as Props;

export default VerificationCodeEmail;

export const sendVerificationCodeEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> &
  ComponentProps<typeof VerificationCodeEmail>) =>
  sendEmail({
    to,
    subject: "您的 QinglBot 验证码",
    html: await render(<VerificationCodeEmail {...props} />),
  });
