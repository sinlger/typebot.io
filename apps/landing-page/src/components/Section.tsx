import { cn } from "@typebot.io/ui/lib/cn";

export const Section = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      className={cn(
        "flex flex-col px-1 py-10 md:py-32 gap-12 md:gap-22 items-center",
        className,
      )}
      style={style}
    >
      {children}
    </section>
  );
};
