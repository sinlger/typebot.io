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

const imagesBaseUrl = `${env.NEXTAUTH_URL}/images/emails/V2dot23Update`;

export const V2dot23Update = (_: Props) => (
  <Html>
    <Head />
    <Preview>Typebot v2.23 更新发布，最新创新功能一览！🌟</Preview>
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
          我很激动地宣布 Typebot v2.23
          的发布，它包含了丰富的功能，进一步提升您的聊天机器人体验。本次更新引入了强大的新区块和增强的自定义功能。
          <br />
          <br />
          让我们一起来看看有什么新变化！
        </Text>

        <Section style={featureSection}>
          <Heading style={heading}>ElevenLabs 区块 - 文字转语音</Heading>
          <Text style={text}>
            通过逼真的语音输出提升您的聊天机器人体验。ElevenLabs
            区块简化了将文字转换为真实语音的过程，使您的机器人更具互动性和吸引力。
          </Text>
          <Img
            src={`${imagesBaseUrl}/elevenlabs.gif`}
            alt="ElevenLabs 区块演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>自定义字体</Heading>
          <Text style={text}>
            通过定义您自己的自定义字体，进一步个性化您的机器人。此新功能使您能够将聊天机器人的字体与品牌形象无缝匹配。
          </Text>
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>进度条</Heading>
          <Text style={text}>
            通过进度条改善用户体验。现在，用户可以轻松追踪对话进度，提高参与度和完成率。
          </Text>
          <Img
            src={`${imagesBaseUrl}/progressBar.gif`}
            alt="进度条演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>增强的按钮输入</Heading>
          <Text style={text}>
            现在您可以将多个项目粘贴到按钮输入中，加快设置速度。列表将被自动检测并填充，简化创建流程。
          </Text>
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>分析中的高级时间筛选</Heading>
          <Text style={text}>
            通过新的时间筛选选项，获得更深入的洞察。该功能可用于结果表格和分析视图，支持在特定时间段内进行更精确的数据分析。
          </Text>
          <Img
            src={`${imagesBaseUrl}/timeFiltering.jpg`}
            alt="时间筛选选项"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>Together AI 区块</Heading>
          <Text style={text}>
            通过 Together AI 区块探索新的 AI
            可能性。这一新增功能让您可以利用其类 OpenAI 的
            API，实现更动态、更智能的聊天机器人交互。
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={{ ...text, marginBottom: "60px" }}>
          我很期待您尝试这些新功能，看看它们如何提升您的聊天机器人项目。与往常一样，我将一直支持您的探索之旅，并期待您的反馈。💬
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

V2dot23Update.PreviewProps = {
  firstName: "John",
};

export default V2dot23Update;
