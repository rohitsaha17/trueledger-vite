import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Minimal editorial card — hairline index rule, left accent rail      */
/*  that wipes up on hover, and an optional transparent illustration.   */
/* ------------------------------------------------------------------ */

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  /** Optional transparent line-art mark, rendered top-right. */
  art?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Shadow weight is tuned per backdrop. */
  variant?: "on-light" | "on-dark";
  className?: string;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function FeatureCard({
  index,
  title,
  description,
  art: Art,
  variant = "on-light",
  className,
}: FeatureCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-7",
        "border border-black/[0.07] transition-[border-color,box-shadow] duration-500 ease-out",
        "hover:border-brand/25",
        variant === "on-dark"
          ? "shadow-[0_18px_44px_-18px_rgba(0,0,0,0.55)] hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.65)]"
          : "shadow-[0_1px_2px_rgba(20,14,42,0.04)] hover:shadow-[0_20px_44px_-16px_rgba(77,57,127,0.22)]",
        className,
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -5 }}
    >
      {/* Accent rail — wipes up from the bottom edge */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-gradient-to-t from-brand via-brand/70 to-coral transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100" />

      {/* Soft brand wash that breathes in behind the corner */}
      <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/[0.07] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

      {Art && (
        <Art
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-5 size-[68px] select-none text-brand/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] [transform-origin:top_right] group-hover:-rotate-3 group-hover:scale-110 group-hover:text-brand/40"
        />
      )}

      {/* Index + hairline rule that extends on hover */}
      <div className="relative mb-4 flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand/80 transition-colors duration-500 group-hover:text-brand">
          {num}
        </span>
        <span className="h-px w-6 bg-brand/25 transition-all duration-500 ease-out group-hover:w-12 group-hover:bg-brand/50" />
      </div>

      <h3
        className={cn(
          "relative mb-2.5 font-heading text-[1.05rem] font-bold leading-snug text-ink transition-transform duration-500 ease-out group-hover:translate-x-0.5 sm:text-[1.15rem]",
          Art && "pr-20",
        )}
      >
        {title}
      </h3>
      <p className="relative text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
