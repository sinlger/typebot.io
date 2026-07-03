import { cn } from "@typebot.io/ui/lib/cn";
import { CodeEditor } from "@/components/inputs/CodeEditor";
import { TextLink } from "@/components/TextLink";
import { useEditor } from "@/features/editor/providers/EditorProvider";
import { useTypebot } from "@/features/editor/providers/TypebotProvider";
import { parseApiHost } from "@/features/publish/components/deploy/snippetParsers/shared";

export const ApiPreviewInstructions = ({
  className,
}: {
  className?: string;
}) => {
  const { typebot } = useTypebot();
  const { startPreviewFrom } = useEditor();

  const startParamsBody =
    startPreviewFrom?.type === "group"
      ? `{
  "startGroupId": "${startPreviewFrom.id}"
}`
      : startPreviewFrom?.type === "event"
        ? `{
  "startEventId": "${startPreviewFrom.id}"
}`
        : undefined;

  const replyBody = `{
  "message": "这是我的回复"
}`;

  return (
    <div
      className={cn("flex flex-col gap-10 overflow-y-auto w-full", className)}
    >
      <ol className="flex flex-col gap-6 px-1">
        <li>
          所有请求都需要使用 API 令牌进行身份验证。{" "}
          <TextLink href="https://docs.typebot.com/api-reference/authentication">
            查看说明
          </TextLink>
          .
        </li>
        <li>
          <div className="flex flex-col gap-2">
            <p>
              要开始聊天，请向以下地址发送 <code>POST</code> 请求：
            </p>
            <CodeEditor
              isReadOnly
              lang="sh"
              value={`${parseApiHost(typebot?.customDomain)}/api/v1/typebots/${typebot?.id
                }/preview/startChat`}
            />
            {startPreviewFrom && (
              <>
                <p>并附带以下 JSON 请求体：</p>
                <CodeEditor isReadOnly lang={"json"} value={startParamsBody} />
              </>
            )}
          </div>
        </li>
        <li>
          首次响应将包含一个 <code>sessionId</code>，您在后续请求中需要使用它。
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
              请将 <code>{"<ID_FROM_FIRST_RESPONSE>"}</code> 替换为 <code>sessionId</code>。
            </p>
          </div>
        </li>
      </ol>
      <p className="text-sm pl-1">
        查看{" "}
        <TextLink
          href="https://docs.typebot.com/api-reference/chat/start-preview-chat"
          isExternal
        >
          API 参考
        </TextLink>{" "}
        以获取更多信息
      </p>
    </div>
  );
};
