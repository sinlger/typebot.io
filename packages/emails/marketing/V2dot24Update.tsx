import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { env } from "@typebot.io/env";
import * as React from "react";
import {
  container,
  featureSection,
  footer,
  heading,
  hr,
  image,
  link,
  main,
  text,
} from "./styles";

void React;

type Props = {
  firstName?: string;
};

const imagesBaseUrl = `${env.NEXTAUTH_URL}/images/emails/V2dot24Update`;

export const V2dot24Update = (_: Props) => (
  <Html>
    <Head />
    <Preview>Typebot v2.24 更新发布，最新创新功能一览！🌟</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${env.NEXTAUTH_URL}/images/logo.png`}
          width="32"
          height="32"
          alt="Typebot's Logo"
          style={{
            margin: "24px 0",
          }}
        />
        <Text style={text}>
          您好， <br />
          <br />
          Typebot v2.24 刚刚发布。本次更新引入了强大的新区块和更稳定的工具性能。
          <br />
          <br />
          让我们一起来看看有什么新变化！
        </Text>

        <Section style={featureSection}>
          <Heading style={heading}>两个新的 AI 生成区块</Heading>
          <Text style={text}>
            使用全新的 Anthropic 和 OpenRouter 区块，以 AI 驱动的回复来增强您的聊天机器人。
            <br />
            <br />
            借助 OpenRouter，您可以以最优价格调用几乎任何 AI 模型。
            <br />
            <br />
            借助 Anthropic，您可以使用最新、最具突破性的 Claude AI 模型生成回复。
          </Text>
          <Img
            src={`${imagesBaseUrl}/aiBlocks.jpg`}
            alt="全新 AI 区块"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>
            跨会话保持聊天状态
          </Heading>
          <Text style={text}>
            现在，如果您启用"记住用户"选项，当用户再次回到 typebot 时，它将显示之前的聊天状态。
            <br />
            <br />
            当您的机器人嵌入到页面中时，该功能同样有效 🔥
          </Text>
          <Img
            src={`${imagesBaseUrl}/saveChatState.gif`}
            alt="聊天状态保持演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>
            AI 生成区块的"转为"选项
          </Heading>
          <Text style={text}>
            通过 AI 生成区块上的全新"转为"选项，轻松切换不同的 AI 服务。这一便捷功能使您能够尝试各种 AI 模型，并为您的聊天机器人选择最合适的方案。
          </Text>
          <Img
            src={`${imagesBaseUrl}/turnInto.gif`}
            alt="转为选项演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>
            错误修复与稳定性改进
          </Heading>
          <Text style={text}>
            我们都讨厌错误，对吧？本月我决定修复几乎所有已知问题和已报告的错误，让 Typebot 更加可靠。
            <br />
            <br />
            从现在开始，我会始终重点修复新报告的错误。这正是我想要为 Typebot 设定的标准。
            <br />
            <br />
            查看完整更新日志{" "}
            <Link href="https://github.com/baptisteArno/typebot.io/releases/tag/v2.24.0">
              点击此处
            </Link>
            ！
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={{ ...text, marginBottom: "60px" }}>
          与往常一样，您的反馈对我们至关重要，请随时分享您的想法。
          <br />
          <br />
          Baptiste。
        </Text>
        <Img
          src={`${env.NEXTAUTH_URL}/images/logo.png`}
          width="32"
          height="32"
          alt="Typebot's Logo"
          style={{
            marginTop: "24px",
          }}
        />

        <Text style={footer}>Typebot.io - Powering Conversations at Scale</Text>
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

V2dot24Update.PreviewProps = {
  firstName: "John",
};

export default V2dot24Update;
