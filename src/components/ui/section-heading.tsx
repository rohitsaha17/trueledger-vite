import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-10", center && "text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-medium text-primary-dark mb-3",
            "bg-primary-soft px-3 py-1 rounded-[var(--radius-pill)]"
          )}
        >
          <ChevronRight className="w-3 h-3" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
