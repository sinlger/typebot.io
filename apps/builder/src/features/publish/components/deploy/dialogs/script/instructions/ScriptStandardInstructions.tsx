import { useState } from "react";
import { CodeEditor } from "@/components/inputs/CodeEditor";
import { useTypebot } from "@/features/editor/providers/TypebotProvider";
import { StandardSettings } from "../../../settings/StandardSettings";
import {
  parseInlineScript,
  typebotImportCode,
} from "../../../snippetParsers/shared";
import { parseInitStandardCode } from "../../../snippetParsers/standard";
import { parseStandardElementCode } from "../../javascript/JavascriptStandardSnippet";

export const ScriptStandardInstructions = () => {
  const { typebot } = useTypebot();
  const [inputValues, setInputValues] = useState<{
    heightLabel: string;
    widthLabel?: string;
  }>({
    heightLabel: "100%",
    widthLabel: "100%",
  });

  const standardElementSnippet = parseStandardElementCode(
    inputValues.widthLabel,
    inputValues.heightLabel,
  );

  const scriptSnippet = parseInlineScript(`${typebotImportCode}
  
${parseInitStandardCode({
  typebot: typebot?.publicId ?? "",
  customDomain: typebot?.customDomain,
})}`);

  return (
    <div className="flex flex-col gap-4">
      <StandardSettings
        onUpdateWindowSettings={(settings) => setInputValues({ ...settings })}
      />
      <p>
        请确保在页面的 <code>{"<body>"}</code> 中包含{" "}
        <code>typebot-standard</code> 元素：
      </p>
      <CodeEditor isReadOnly value={standardElementSnippet} lang="html" />
      <p>然后，运行以下脚本来初始化机器人：</p>
      <CodeEditor isReadOnly value={scriptSnippet} lang="js" />
    </div>
  );
};
