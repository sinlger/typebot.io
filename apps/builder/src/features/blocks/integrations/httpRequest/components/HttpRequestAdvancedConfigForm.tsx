import { useMutation } from "@tanstack/react-query";
import {
  defaultHttpRequestAttributes,
  defaultHttpRequestBlockOptions,
  defaultTimeout,
  HttpMethod,
  maxTimeout,
} from "@typebot.io/blocks-integrations/httpRequest/constants";
import type {
  HttpRequest,
  HttpRequestBlock,
  KeyValue,
  ResponseVariableMapping,
  VariableForTest,
} from "@typebot.io/blocks-integrations/httpRequest/schema";
import { Accordion } from "@typebot.io/ui/components/Accordion";
import { Button } from "@typebot.io/ui/components/Button";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Switch } from "@typebot.io/ui/components/Switch";
import { useTranslate } from "@tolgee/react";
import { useMemo, useState } from "react";
import { BasicNumberInput } from "@/components/inputs/BasicNumberInput";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { CodeEditor } from "@/components/inputs/CodeEditor";
import { TableList, type TableListItemProps } from "@/components/TableList";
import { CredentialsDropdown } from "@/features/credentials/components/CredentialsDropdown";
import { useTypebot } from "@/features/editor/providers/TypebotProvider";
import { orpc } from "@/lib/queryClient";
import { toast } from "@/lib/toast";
import { computeDeepKeysMappingSuggestionList } from "../helpers/computeDeepKeysMappingSuggestionList";
import { convertVariablesForTestToVariables } from "../helpers/convertVariablesForTestToVariables";
import { HeadersInputs, QueryParamsInputs } from "./KeyValueInputs";
import { DataVariableInputs } from "./ResponseMappingInputs";
import { VariableForTestInputs } from "./VariableForTestInputs";

type Props = {
  blockId: string;
  httpRequest: HttpRequest | undefined;
  options: HttpRequestBlock["options"];
  onHttpRequestChange: (httpRequest: HttpRequest) => void;
  onOptionsChange: (options: HttpRequestBlock["options"]) => void;
  onNewTestResponse?: () => void;
};

export const HttpRequestAdvancedConfigForm = ({
  blockId,
  httpRequest,
  options,
  onHttpRequestChange,
  onOptionsChange,
  onNewTestResponse,
}: Props) => {
  const { t } = useTranslate();
  const { typebot, save } = useTypebot();
  const [testResponse, setTestResponse] = useState<string>();
  const [responseKeys, setResponseKeys] = useState<string[]>([]);

  const { mutateAsync: testHttpRequest, isPending: isTestResponseLoading } =
    useMutation(
      orpc.httpRequest.testHttpRequest.mutationOptions({
        onSuccess: (data) => {
          setTestResponse(JSON.stringify(data, undefined, 2));
          setResponseKeys(computeDeepKeysMappingSuggestionList(data));
          onNewTestResponse?.();
        },
        onError: (error) => {
          toast({
            description:
              error instanceof Error ? error.message : t("blocks.integrations.httpRequest.toast.unknownError.label"),
            title: t("blocks.integrations.httpRequest.toast.testingError.title"),
          });
        },
      }),
    );

  const updateMethod = (method: HttpMethod | undefined) =>
    onHttpRequestChange({ ...httpRequest, method });

  const updateQueryParams = (queryParams: KeyValue[]) =>
    onHttpRequestChange({ ...httpRequest, queryParams });

  const updateHeaders = (headers: KeyValue[]) =>
    onHttpRequestChange({ ...httpRequest, headers });

  const updateBody = (body: string) =>
    onHttpRequestChange({ ...httpRequest, body });

  const updateVariablesForTest = (variablesForTest: VariableForTest[]) =>
    onOptionsChange({ ...options, variablesForTest });

  const updateResponseVariableMapping = (
    responseVariableMapping: ResponseVariableMapping[],
  ) => onOptionsChange({ ...options, responseVariableMapping });

  const updateIsCustomBody = (isCustomBody: boolean) =>
    onOptionsChange({ ...options, isCustomBody });

  const updateTimeout = (timeout: number | undefined) =>
    onOptionsChange({ ...options, timeout });

  const executeTestRequest = async () => {
    if (!typebot) return;
    await save();
    testHttpRequest({
      typebotId: typebot.id,
      blockId: blockId,
      variables: convertVariablesForTestToVariables(
        options?.variablesForTest ?? [],
        typebot.variables,
      ),
    });
  };

  const updateIsExecutedOnClient = (isExecutedOnClient: boolean) =>
    onOptionsChange({ ...options, isExecutedOnClient });

  const ResponseMappingInputs = useMemo(
    () =>
      function Component(props: TableListItemProps<ResponseVariableMapping>) {
        return <DataVariableInputs {...props} dataItems={responseKeys} />;
      },
    [responseKeys],
  );

  const updateProxyCredentialsId = (proxyCredentialsId: string | undefined) =>
    onOptionsChange({ ...options, proxyCredentialsId });

  const isCustomBody =
    options?.isCustomBody ?? defaultHttpRequestBlockOptions.isCustomBody;

  return (
    <>
      <Accordion.Root>
        <Accordion.Item>
          <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.advancedConfiguration.label")}</Accordion.Trigger>
          <Accordion.Panel>
            <Field.Root className="flex-row items-center">
              <Switch
                checked={
                  options?.isExecutedOnClient ??
                  defaultHttpRequestBlockOptions.isExecutedOnClient
                }
                onCheckedChange={updateIsExecutedOnClient}
              />
              <Field.Label>
                {t("blocks.integrations.httpRequest.settings.executeOnClient.label")}{" "}
                <MoreInfoTooltip>
                  {t("blocks.integrations.httpRequest.settings.executeOnClient.tooltip")}
                </MoreInfoTooltip>
              </Field.Label>
            </Field.Root>
            <div className="flex items-center gap-2 justify-between">
              <p>{t("blocks.integrations.httpRequest.settings.method.label")}</p>
              <BasicSelect
                className="w-full"
                value={httpRequest?.method}
                defaultValue={defaultHttpRequestAttributes.method}
                onChange={updateMethod}
                items={Object.values(HttpMethod)}
              />
            </div>
            <Accordion.Root>
              <Accordion.Item>
                <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.queryParams.label")}</Accordion.Trigger>
                <Accordion.Panel>
                  <TableList<KeyValue>
                    initialItems={httpRequest?.queryParams}
                    onItemsChange={updateQueryParams}
                    addLabel={t("blocks.integrations.httpRequest.settings.queryParams.add.label")}
                  >
                    {(props) => <QueryParamsInputs {...props} />}
                  </TableList>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.headers.label")}</Accordion.Trigger>
                <Accordion.Panel>
                  <TableList<KeyValue>
                    initialItems={httpRequest?.headers}
                    onItemsChange={updateHeaders}
                    addLabel={t("blocks.integrations.httpRequest.settings.headers.add.label")}
                  >
                    {(props) => <HeadersInputs {...props} />}
                  </TableList>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.body.label")}</Accordion.Trigger>
                <Accordion.Panel>
                  <Field.Root className="flex-row items-center">
                    <Switch
                      checked={isCustomBody}
                      onCheckedChange={updateIsCustomBody}
                    />
                    <Field.Label>{t("blocks.integrations.httpRequest.settings.customBody.label")}</Field.Label>
                  </Field.Root>
                  {isCustomBody && (
                    <CodeEditor
                      defaultValue={httpRequest?.body}
                      lang="json"
                      onChange={updateBody}
                      debounceTimeout={0}
                      withLineNumbers={true}
                    />
                  )}
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.advancedParameters.label")}</Accordion.Trigger>
                <Accordion.Panel>
                  {typebot && (
                    <CredentialsDropdown
                      type="http proxy"
                      hideIfNoCredentials
                      scope={{
                        type: "workspace",
                        workspaceId: typebot.workspaceId,
                      }}
                      currentCredentialsId={options?.proxyCredentialsId}
                      onCredentialsSelect={updateProxyCredentialsId}
                      onCreateNewClick={undefined}
                      credentialsName="HTTP proxy"
                    />
                  )}
                  <Field.Root className="flex-row">
                    <Field.Label>{t("blocks.integrations.httpRequest.settings.timeout.label")}</Field.Label>
                    <BasicNumberInput
                      defaultValue={options?.timeout ?? defaultTimeout}
                      min={1}
                      max={maxTimeout}
                      onValueChange={updateTimeout}
                      withVariableButton={false}
                    />
                  </Field.Root>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.variableValuesForTest.label")}</Accordion.Trigger>
                <Accordion.Panel>
                  <TableList<VariableForTest>
                    initialItems={options?.variablesForTest}
                    onItemsChange={updateVariablesForTest}
                    addLabel={t("blocks.integrations.httpRequest.settings.addEntry.label")}
                  >
                    {(props) => <VariableForTestInputs {...props} />}
                  </TableList>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion.Root>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
      {httpRequest?.url && (
        <Button onClick={executeTestRequest} disabled={isTestResponseLoading}>
          {t("blocks.integrations.httpRequest.settings.testRequest.label")}
        </Button>
      )}
      {testResponse && (
        <CodeEditor isReadOnly lang="json" value={testResponse} />
      )}
      {(testResponse ||
        (options?.responseVariableMapping &&
          options.responseVariableMapping.length > 0)) && (
        <Accordion.Root>
          <Accordion.Item>
            <Accordion.Trigger>{t("blocks.integrations.httpRequest.settings.saveInVariables.label")}</Accordion.Trigger>
            <Accordion.Panel>
              <TableList<ResponseVariableMapping>
                initialItems={options?.responseVariableMapping}
                onItemsChange={updateResponseVariableMapping}
                addLabel="Add an entry"
              >
                {(props) => <ResponseMappingInputs {...props} />}
              </TableList>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>
      )}
    </>
  );
};
