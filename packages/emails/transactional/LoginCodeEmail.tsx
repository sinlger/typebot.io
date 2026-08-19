import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
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
  url: string;
  code: string;
}

export const LoginCodeEmail = ({ url, code }: Props) => (
  <Html>
    <Head />
    <Preview>您的 QinglBot 登录验证码</Preview>
    <Body style={main}>
      <Container style={container}>
        <Logo />
        <Heading style={heading}>您的 QinglBot 登录验证码</Heading>
        <code style={codeStyle}>{code}</code>
        <Text style={paragraph}>这个验证码只在 5 分钟内有效。</Text>
        <Text style={paragraph}>
          您也可以通过 <Link href={url}>点击这里</Link> 登录。
        </Text>
        <Hr style={hr} />
        <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
      </Container>
    </Body>
  </Html>
);

LoginCodeEmail.PreviewProps = {
  url: "https://qinglbot.com",
  code: "654778",
} as Props;

export default LoginCodeEmail;

export const sendLoginCodeEmail = async ({
  to,
  ...props
}: Pick<SendMailOptions, "to"> & ComponentProps<typeof LoginCodeEmail>) =>
  sendEmail({
    to,
    subject: "登录 QinglBot",
    html: await render(<LoginCodeEmail {...props} />),
  });
