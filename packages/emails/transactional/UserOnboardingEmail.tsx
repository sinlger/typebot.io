import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import type { ComponentProps } from "react";
import * as React from "react";
import { bodyText, container, footerText, main } from "./styles";

void React;

interface Props {
  unsubscribeUrl?: string;
}

export const UserOnboardingEmail = ({ unsubscribeUrl }: Props) => (
  <Html>
    <Head />
    <Preview>欢迎使用 QinglBot！</Preview>
    <Body style={main}>
      <Container
        align="left"
        style={{
          ...container,
          margin: "0",
          maxWidth: "100%",
          textAlign: "left",
        }}
      >
        <Text style={bodyText}>
          您好，
          <br />
          <br />
          感谢您注册 QinglBot！🙌
          <br />
          <br />
          QinglBot
          是一个无代码平台，让您无需编写任何代码，就能创建美观、引人入胜的聊天机器人，并将其嵌入网站或
          WhatsApp 等聊天平台。
          <br />
          <br />
          前往控制台，从空白画布或现成模板开始，创建您的第一个机器人：
          <br />
          <Link href="https://qinglbot.com">https://qinglbot.com</Link>
          <br />
          <br />
          如需帮助，欢迎通过 support@qinglbot.com 与我们联系。
          <br />
          <br />
          祝您使用愉快！
          <br />
          <br />
          QinglBot 团队
        </Text>
        <Hr />
        {unsubscribeUrl ? (
          <Text style={{ ...footerText, marginTop: "24px" }}>
            <Link href={unsubscribeUrl}>点击此处取消订阅</Link>
          </Text>
        ) : null}
      </Container>
    </Body>
  </Html>
);

UserOnboardingEmail.PreviewProps = {
  unsubscribeUrl: "https://qinglbot.com/emails/unsubscribe",
} satisfies Props;

export default UserOnboardingEmail;

export const renderUserOnboardingEmail = async (
  props: ComponentProps<typeof UserOnboardingEmail>,
) => render(<UserOnboardingEmail {...props} />);
