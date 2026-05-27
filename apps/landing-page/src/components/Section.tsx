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
        "flex flex-col px-4 py-10 md:py-24 gap-10 md:gap-16 items-center",
        className,
      )}
      style={style}
    >
      {children}
    </section>
  );
};
