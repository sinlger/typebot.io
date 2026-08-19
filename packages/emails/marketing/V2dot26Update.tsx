import { Hr, Text } from "@react-email/components";
import { env } from "@typebot.io/env";
import * as React from "react";
import { NewsletterLayout } from "./components/NewsletterLayout";
import { NewsletterSection } from "./components/NewsletterSection";
import { hr, text } from "./styles";

void React;

const imagesBaseUrl = `${env.NEXTAUTH_URL}/images/emails/V2dot26Update`;

export const V2dot26Update = () => (
  <NewsletterLayout preview="Typebot v2.26 更新发布，最新创新功能一览！🌟">
    <Text style={text}>
      您好， <br />
      <br />
      Typebot v2.26 刚刚发布，带来了一些酷炫的新功能。
      <br />
      <br />
      让我们一起来看看有什么新变化！🔥
    </Text>

    <NewsletterSection
      title="NocoDB 区块"
      image={{
        src: `${imagesBaseUrl}/nocodb.jpg`,
        alt: "全新的 NocoDB 区块",
      }}
    >
      NocoDB 区块是一个全新的区块，允许您从 NocoDB
      数据库中存储和检索数据。这是构建需要数据存储和检索的应用的强大工具。
      <br />
      <br />
      终于有了一个优秀的开源替代方案，可以作为现有 Google Sheets 区块的补充。
    </NewsletterSection>

    <NewsletterSection
      title="变量面板"
      image={{
        alt: "变量面板",
        src: `${imagesBaseUrl}/variablesPanel.gif`,
      }}
    >
      让您能够一目了然地查看所有变量，并更轻松地编辑它们 💆
    </NewsletterSection>

    <NewsletterSection title="对话记录变量">
      "设置变量" 区块现在有一个 "对话记录"
      值选项。这会将整个对话记录注入到一个变量中。如果您需要为 AI
      区块提供上下文，这将非常有用。
      <br />
      <br />
      例如，您可以在系统提示中加入：
      <br />
      <br />
      "您的回答应基于 &lt;context&gt; XML 元素中的上下文：
      <br />
      &lt;context&gt;{"{{"}Transcript{"}}"}&lt;/context&gt;"
    </NewsletterSection>

    <NewsletterSection
      title="全新的容器主题选项"
      image={{
        alt: "聊天窗口主题选项演示",
        src: `${imagesBaseUrl}/chatContainerThemeOptions.gif`,
      }}
    >
      您现在可以使用新的容器主题选项自定义聊天窗口主题。您可更改聊天窗口的背景色、边框色和文本颜色。
    </NewsletterSection>

    <NewsletterSection title="新模板">
      🏃 快速碳水计算器 -
      专为希望吸引活跃受众的运动营养品牌设计，该聊天机器人根据用户输入即时提供个性化碳水化合物摄入建议，是一个高效的获客工具。
      <br />
      <br />
      💆‍♀️ 肤质类型分析 - 一款专为 Typology
      设计的肤质专家机器人，作为获客工具，该机器人会提出一系列个性化问题来确定用户独特的肤质类型，随后提供详细的诊断结果和基于
      AI 的个性化护肤建议。
    </NewsletterSection>

    <Hr style={hr} />

    <Text style={{ ...text, marginBottom: "60px" }}>
      与往常一样，您的反馈对我们至关重要，请随时分享您的想法。
      <br />
      <br />
      Baptiste。
    </Text>
  </NewsletterLayout>
);

export default V2dot26Update;
