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
    <Preview>欢迎使用 Typebot！</Preview>
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
          感谢您试用 Typebot！我是创始人 Baptiste。🙌
          <br />
          <br />
          我创建 Typebot 的初衷是认为创建美观、引人入胜的聊天体验应该非常简单。
          <br />
          <br />
          Typebot 旨在为您提供充分的自由度，让您轻松为您的业务打造完美的机器人。
          <br />
          <br />
          观看这段 5 分钟的快速概览视频，开始上手：
          <br />
          <Link href="https://www.youtube.com/watch?v=jp3ggg_42-M">
            https://www.youtube.com/watch?v=jp3ggg_42-M
          </Link>
          <br />
          <br />
          加入我们的 Discord 社区，与其他人交流并获得即时帮助：
          <br />
          <Link href="https://typebot.io/discord">
            https://typebot.io/discord
          </Link>
          <br />
          <br />
          期待与您再见！
          <br />
          <br />
          Baptiste.
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
  unsubscribeUrl: "https://typebot.io/emails/unsubscribe",
} satisfies Props;

export default UserOnboardingEmail;

export const renderUserOnboardingEmail = async (
  props: ComponentProps<typeof UserOnboardingEmail>,
) => render(<UserOnboardingEmail {...props} />);
