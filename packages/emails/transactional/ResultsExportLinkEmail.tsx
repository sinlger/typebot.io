import { Body, Container, Head, Hr, Html, Text } from "@react-email/components";
import { render } from "@react-email/render";
import type { ComponentProps } from "react";
import * as React from "react";
import { sendEmail } from "../helpers/sendEmail";
import { Logo } from "./components/Logo";
import { container, footerText, hr, main, paragraph } from "./styles";

void React;

interface Props {
  typebotName: string;
  fileUrl: string;
  email: string;
}

export const ResultsExportLinkEmail = ({ typebotName, fileUrl }: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>
            您已为 <strong>{typebotName}</strong> 请求了结果导出，已处理完毕。
            <br />
            <br />
            您可以 <a href={fileUrl}>在此下载</a>。
          </Text>
          <Hr style={hr} />
          <Text style={footerText}>QinglBot - 构建更快，聊天更智能</Text>
        </Container>
      </Body>
    </Html>
  );
};

ResultsExportLinkEmail.PreviewProps = {
  typebotName: "我的机器人",
  fileUrl: "https://qinglbot.com/results.csv",
} as Props;

export default ResultsExportLinkEmail;

export const renderResultsExportLinkEmail = (
  props: ComponentProps<typeof ResultsExportLinkEmail>,
) => render(<ResultsExportLinkEmail {...props} />);

export const sendResultsExportLinkEmail = async (
  props: ComponentProps<typeof ResultsExportLinkEmail>,
) =>
  sendEmail({
    to: props.email,
    subject: "您的结果导出已就绪",
    html: await render(<ResultsExportLinkEmail {...props} />),
  });
