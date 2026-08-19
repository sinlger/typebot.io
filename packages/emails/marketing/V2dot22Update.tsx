import {
  Body,
  Button,
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

const imagesBaseUrl = `${env.NEXTAUTH_URL}/images/emails/V2dot22Update`;

export const V2dot22Update = (_: Props) => (
  <Html>
    <Head />
    <Preview>一月份 Typebot 最热门的新功能 🔥</Preview>
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
          我们以火热的状态开启了 2024
          年。这是多么高效的一个月！其中一些成果得益于新的内部框架，用于构建新的区块：{" "}
          <Link
            href="https://docs.typebot.io/contribute/guides/create-block"
            target="_blank"
            style={{ ...link }}
          >
            The Forge
          </Link>
          <br />
          <br />
          在此，我想感谢本月所有新的贡献者。🙏
        </Text>
        <Button
          href="https://app.typebot.io"
          style={{
            backgroundColor: "#0042DA",
            padding: "10px 16px",
            borderRadius: "4px",
            color: "white",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            fontSize: "15px",
            fontWeight: "bold",
            margin: "20px 0",
          }}
        >
          试用新功能
        </Button>

        <Section style={featureSection}>
          <Heading style={heading}>全新的图谱手势操作</Heading>
          <Text style={text}>
            终于来了！您现在可以在所有 typebot
            中选择多个分组，一起移动并复制它们。
          </Text>
          <Img
            src={`${imagesBaseUrl}/groupSelection.gif`}
            alt="分组选择演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>三个全新区块</Heading>
          <Text style={text}>
            我们向区块库中添加了三个新成员：
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>二维码</span>
            ：即时生成二维码图片 URL
            以在聊天中使用。这对于在实体店或活动现场展示的 typebot 尤其有用。
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Mistral</span>：作为 OpenAI
            区块的替代方案。它使用相同的参数。该区块允许您调用 Mistral AI 模型。
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>Dify.AI</span>：在 Dify
            上打造您自己的 AI 智能体，并直接在 Typebot 上使用它，实现两全其美。
          </Text>
          <Img
            src={`${imagesBaseUrl}/newblocks.jpg`}
            width="550"
            alt="三个新区块"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>OpenAI 区块：提问助手</Heading>
          <Text style={text}>
            这可能是使用 OpenAI
            新助手功能的最简单方式。拖放一个区块，配置几个参数，即可立即使用 ✨
          </Text>
          <Img
            src={`${imagesBaseUrl}/openaiAssistantGif.gif`}
            width="550"
            alt="OpenAI 助手演示"
            style={image}
          />
        </Section>

        <Section style={featureSection}>
          <Heading style={heading}>其他重要改进</Heading>
          <Text style={text}>
            ⏰ 您现在可以在分析图表中选择时间窗口进行更精细的分析。
            <br />
            <br />
            ⌨️ 改进了打字动画效果设置。您现在可以设置每条消息之间的全局等待时间。
            <br />
            <br />🧠 在 OpenAI 区块中支持 Tools/Functions
            <br />
            <br />🔒 新增"允许的来源"typebot 设置，确保您的 typebot
            只能从您的域名运行。
            <br />
            <br />
            🗄️ 文件上传区块新增可见性选项。您现在可以将上传的文件 URL
            设置为私有。
            <br />
            <br />
            👨‍💻 您现在可以在任何自定义代码中使用 `setVariable`
            函数来设置特定变量的值。
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={{ ...text, marginBottom: "60px" }}>
          欢迎直接回复这封邮件，我会阅读并回复每一封。❤️
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

V2dot22Update.PreviewProps = {
  firstName: "John",
};

export default V2dot22Update;
