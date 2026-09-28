import { cn } from "@/lib/utils";

interface ChevronMotifProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "soft" | "accent";
}

export function ChevronMotif({
  className,
  size = "md",
  variant = "soft",
}: ChevronMotifProps) {
  const sizeMap = { sm: "text-2xl", md: "text-5xl", lg: "text-8xl" };
  const colorMap = {
    primary: "text-primary/30",
    soft: "text-primary-soft",
    accent: "text-accent/20",
  };

  return (
    <span
      aria-hidden
      className={cn(
        "font-heading font-bold select-none pointer-events-none",
        sizeMap[size],
        colorMap[variant],
        className
      )}
    >
      &rsaquo;
    </span>
  );
}
