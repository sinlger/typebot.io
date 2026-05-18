import type { Template } from "@typebot.io/templates";
import { Button } from "@typebot.io/ui/components/Button";
import { TemplateCard } from "./TemplateCard";

type Props = {
  templates: Template[];
  onClearFilters?: () => void;
};

export const TemplatesGrid = ({ templates, onClearFilters }: Props) => {
  if (templates.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center w-full gap-4">
        <div className="text-5xl">🔍</div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">未找到模板</p>
          <p className="text-muted-foreground text-pretty">
            试试调整搜索关键词或筛选条件，以找到你想要的内容。
          </p>
        </div>
        {onClearFilters && (
          <Button variant="ghost" onClick={onClearFilters} className="mt-2">
            清除所有筛选
          </Button>
        )}
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
};
