import {
  defaultProgressBarBackgroundColor,
  defaultProgressBarColor,
  defaultProgressBarIsEnabled,
  defaultProgressBarPlacement,
  defaultProgressBarPosition,
  defaultProgressBarThickness,
  progressBarPlacements,
  progressBarPositions,
} from "@typebot.io/theme/constants";
import type { ProgressBar } from "@typebot.io/theme/schemas";
import type { TypebotV6 } from "@typebot.io/typebot/schemas/typebot";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Switch } from "@typebot.io/ui/components/Switch";
import { ColorPicker } from "@/components/ColorPicker";
import { BasicNumberInput } from "@/components/inputs/BasicNumberInput";
import { BasicSelect } from "@/components/inputs/BasicSelect";

type Props = {
  typebotVersion: TypebotV6["version"];
  progressBar: ProgressBar | undefined;
  onProgressBarChange: (progressBar: ProgressBar) => void;
};

export const ProgressBarForm = ({
  typebotVersion,
  progressBar,
  onProgressBarChange,
}: Props) => {
  const updateEnabled = (isEnabled: boolean) =>
    onProgressBarChange({ ...progressBar, isEnabled });

  const updateColor = (color: string) =>
    onProgressBarChange({ ...progressBar, color });

  const updatePlacement = (
    placement: (typeof progressBarPlacements)[number] | undefined,
  ) => onProgressBarChange({ ...progressBar, placement });

  const updatePosition = (
    position: (typeof progressBarPositions)[number] | undefined,
  ) => onProgressBarChange({ ...progressBar, position });

  const updateThickness = (thickness?: number) =>
    onProgressBarChange({ ...progressBar, thickness });

  const updateBackgroundColor = (backgroundColor: string) =>
    onProgressBarChange({ ...progressBar, backgroundColor });

  return (
    <Field.Container>
      <Field.Root className="flex-row items-center">
        <Switch
          checked={progressBar?.isEnabled ?? defaultProgressBarIsEnabled}
          onCheckedChange={updateEnabled}
        />
        <Field.Label>启用进度条</Field.Label>
      </Field.Root>
      {(progressBar?.isEnabled ?? defaultProgressBarIsEnabled) && (
        <>
          <Field.Root className="flex-row">
            <Field.Label>位置：</Field.Label>
            <BasicSelect
              value={progressBar?.placement}
              defaultValue={defaultProgressBarPlacement}
              onChange={updatePlacement}
              items={progressBarPlacements}
            />
          </Field.Root>

          <Field.Root className="flex-row">
            <Field.Label>背景颜色：</Field.Label>
            <ColorPicker
              defaultValue={
                progressBar?.backgroundColor ??
                defaultProgressBarBackgroundColor[typebotVersion]
              }
              onColorChange={updateBackgroundColor}
            />
          </Field.Root>
          <Field.Root className="flex-row">
            <Field.Label>颜色：</Field.Label>
            <ColorPicker
              defaultValue={
                progressBar?.color ?? defaultProgressBarColor[typebotVersion]
              }
              onColorChange={updateColor}
            />
          </Field.Root>
          <Field.Root className="flex-row">
            <Field.Label>厚度：</Field.Label>
            <BasicNumberInput
              withVariableButton={false}
              defaultValue={
                progressBar?.thickness ?? defaultProgressBarThickness
              }
              onValueChange={updateThickness}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>
              嵌入时的位置
              <MoreInfoTooltip>
                选择 "fixed"
                可让进度条始终固定在窗口顶部，即使您的机器人是被嵌入的。选择
                "absolute" 则将进度条定位在聊天容器顶部。
              </MoreInfoTooltip>
            </Field.Label>
            <BasicSelect
              value={progressBar?.position}
              defaultValue={defaultProgressBarPosition}
              onChange={updatePosition}
              items={progressBarPositions}
            />
          </Field.Root>
        </>
      )}
    </Field.Container>
  );
};
