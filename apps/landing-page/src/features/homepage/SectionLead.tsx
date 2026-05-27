import { Badge } from "@typebot.io/ui/components/Badge";
import { cn } from "@typebot.io/ui/lib/cn";

type SectionLeadProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export const SectionLead = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionLeadProps) => (
  <div
    className={cn(
      "flex w-full max-w-7xl flex-col gap-4",
      align === "center" ? "items-center text-center" : "items-start",
    )}
  >
    <Badge colorScheme="blue">{eyebrow}</Badge>
    <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
      {title}
    </h2>
    <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
      {description}
    </p>
  </div>
);
