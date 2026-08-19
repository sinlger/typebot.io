import { Alert } from "@typebot.io/ui/components/Alert";
import { Dialog } from "@typebot.io/ui/components/Dialog";
import { InformationSquareIcon } from "@typebot.io/ui/icons/InformationSquareIcon";
import type { JSX } from "react";
import { CodeEditor } from "@/components/inputs/CodeEditor";
import { TextLink } from "@/components/TextLink";
import { useTypebot } from "@/features/editor/providers/TypebotProvider";
import type { DialogProps } from "../DeployButton";
import { parseApiHost } from "../snippetParsers/shared";

export const ApiDeployDialog = ({
  isPublished,
  publicId,
  isOpen,
  onClose,
}: DialogProps): JSX.Element => {
  const { typebot } = useTypebot();

  const replyBody = `{
  "message": "这是我的回复"
}`;

  return (
    <Dialog.Root isOpen={isOpen} onClose={onClose}>
      <Dialog.Popup className="max-w-xl">
        <Dialog.Title>API</Dialog.Title>
        <Dialog.CloseButton />
        {!isPublished && (
          <Alert.Root>
            <InformationSquareIcon />
            <Alert.Description>你需要先发布你的机器人</Alert.Description>
          </Alert.Root>
        )}
        <ol>
          <li>
            <div className="flex flex-col gap-2">
              <p>
                要开始聊天，请向以下地址发送 <code>POST</code> 请求：
              </p>
              <CodeEditor
                isReadOnly
                lang="sh"
                value={`${parseApiHost(
                  typebot?.customDomain,
                )}/api/v1/typebots/${publicId}/startChat`}
              />
            </div>
          </li>
          <li>
            首次响应将包含一个 <code>sessionId</code>
            ，您在后续请求中需要使用它。
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <p>
                要发送回复，请向以下地址发送 <code>POST</code> 请求：
              </p>
              <CodeEditor
                isReadOnly
                lang="sh"
                value={`${parseApiHost(
                  typebot?.customDomain,
                )}/api/v1/sessions/<ID_FROM_FIRST_RESPONSE>/continueChat`}
              />
              <p>并附带以下 JSON 请求体：</p>
              <CodeEditor isReadOnly lang={"json"} value={replyBody} />
              <p>
                请将 <code>{"<ID_FROM_FIRST_RESPONSE>"}</code> 替换为{" "}
                <code>sessionId</code>。
              </p>
            </div>
          </li>
        </ol>
        <p className="text-sm">
          查看{" "}
          <TextLink
            href="https://docs.typebot.com/api-reference/chat/start-chat"
            isExternal
          >
            API 参考
          </TextLink>{" "}
          以获取更多信息
        </p>
      </Dialog.Popup>
    </Dialog.Root>
  );
};
