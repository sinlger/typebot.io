import { Hr, Link, Text } from "@react-email/components";
import { env } from "@typebot.io/env";
import * as React from "react";
import { NewsletterLayout } from "./components/NewsletterLayout";
import { NewsletterSection } from "./components/NewsletterSection";
import { hr, text } from "./styles";

void React;

const imagesBaseUrl = `${env.NEXTAUTH_URL}/images/emails/V3dot6Update`;

export const V3dot6Update = () => (
  <NewsletterLayout preview="Typebot v3.6.0 发布：全新品牌形象与激动人心的新功能！🚀">
    <Text style={text}>
      您好， <br />
      <br />
      我很激动地宣布 Typebot v3.6.0 刚刚发布，带来了全新的外观和大量强大的功能！
      <br />
      <br />
      让我们一起来看看有什么新变化！🔥
    </Text>

    <NewsletterSection
      title="全新 Typebot 品牌形象"
      image={{
        src: `${imagesBaseUrl}/bento.gif`,
        alt: "全新 Typebot 品牌",
      }}
    >
      我们推出了全新的品牌标识，完美地反映了 Typebot 当前的定位：一款专为喜欢探索和创新的用户打造的强大无代码工具，让他们能够将聊天机器人的概念发挥到极致。这一新形象代表了我们对创新和灵活性的承诺，同时坚守我们的初心。
    </NewsletterSection>

    <NewsletterSection title="新集成区块：PostHog、Deepseek 和 Perplexity">
      <strong>PostHog：</strong>将事件发送到 PostHog 并触发您的 PostHog 工作流。此集成在服务端运行，确保与非浏览器设备兼容。
      <br />
      <br />
      <strong>Deepseek 和 Perplexity：</strong>与我们的 OpenAI 区块类似，这些新的集成让您可以与 Deepseek 和 Perplexity 的 AI 模型对话，为您创建智能对话体验提供更多选择。
    </NewsletterSection>

    <NewsletterSection
      title="全新卡片输入区块"
      image={{
        src: `${imagesBaseUrl}/cards.gif`,
        alt: "卡片输入区块演示",
      }}
    >
      新的卡片输入区块允许您以轮播格式展示一系列卡片。每张卡片可包含一张图片、一个标题、一段描述和多个按钮——非常适合以引人入胜的视觉形式展示产品、服务或选项。
    </NewsletterSection>

    <NewsletterSection title="使用 Dify.AI 查询知识库">
      Dify.AI 区块现在包含"查询知识库"操作，可根据查询检索最相关的文档。这非常适合创建具有上下文感知能力的 AI 回复——您可以搜索与用户消息相关的内容，并将这些片段提供给您的 AI 区块，从而获得更准确、更有见地的答案。
    </NewsletterSection>

    <NewsletterSection
      title="AI 自动生成分组标题"
      image={{
        src: `${imagesBaseUrl}/group-gen-titles.gif`,
        alt: "AI 生成的分组标题",
      }}
    >
      告别千篇一律的"Group #"标题！启用并配置后，该功能会在您连接新区块或分组时自动生成有意义的标题，使您的工作流程更有条理、更易于导航。
    </NewsletterSection>

    <NewsletterSection
      title="按钮和图片选择的内部值"
      image={{
        src: `${imagesBaseUrl}/internal-value.png`,
        alt: "内部值演示",
      }}
    >
      您现在可以为按钮和图片选择分配与展示给用户的内容不同的内部值。当用户选择一个选项时，内部值将保存到您指定的变量中，为数据收集和处理提供更大的灵活性。
    </NewsletterSection>

    <NewsletterSection title="其他重要改进">
      <strong>数字格式选项：</strong>在数字输入区块中将捕获的数字格式化为货币、百分比、科学计数法等。
      <br />
      <br />
      <strong>文件类型限制：</strong>通过设置文件扩展名白名单来限制文件上传区块中接受的文件类型。
      <br />
      <br />
      <strong>按钮布局选项：</strong>为按钮选择换行布局或垂直布局。
      <br />
      <br />
      <strong>可自定义的系统消息：</strong>可覆盖机器人中的任何系统消息，包括错误消息和通知。
      <br />
      <br />
      <strong>设备类型检测：</strong>设置变量区块现在包含"设备类型"选项，可自动检测并保存用户当前使用的设备类型（桌面端、平板或手机）。
      <br />
      <br />
      <strong>图片放大查看：</strong>用户现在可以点击机器人中的图片进行全屏查看。
    </NewsletterSection>

    <NewsletterSection title="内容与社区亮点">
      <strong>来自 Typebot 博客：</strong>
      <br />•{" "}
      <Link href="https://qinglbot.com/blog/faq-chatbot">
        完整指南：如何搭建 FAQ 聊天机器人
      </Link>
      <br />•{" "}
      <Link href="https://qinglbot.com/blog/whatsapp-chatbot-use-cases">
        您需要了解的 10 个强大 WhatsApp 聊天机器人用例
      </Link>
      <br />•{" "}
      <Link href="https://qinglbot.com/blog/how-to-accept-payment-on-whatsapp-business">
        完整指南：如何在 WhatsApp Business 上接受付款
      </Link>
      <br />
      <br />
      <strong>精彩社区作品：</strong>
      <br />• 全球首款用 Typebot 制作的视觉小说 - by Anthony
      <br />• 个人商业策略顾问 AI 智能体 - by Anthony
      <br />• 用户完成聊天后弹出五彩纸屑 - by nefer_l <br />
      <br />
      前往{" "}
      <Link href="https://qinglbot.com/discord">社区</Link>的 awesome-typebots 频道查看所有精彩内容！
    </NewsletterSection>

    <Hr style={hr} />

    <Text style={text}>
      感谢您成为 Typebot 旅程的一部分。
      <br />
      <br />
      与往常一样，您的反馈对我们至关重要，请随时分享您的想法！
      <br />
      <br />
      祝您机器人构建愉快，
      <br />
      Baptiste
    </Text>
  </NewsletterLayout>
);

export default V3dot6Update;
