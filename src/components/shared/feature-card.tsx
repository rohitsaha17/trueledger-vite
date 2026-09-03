import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Minimal editorial card — hairline index rule, left accent rail      */
/*  that wipes up on hover, and an optional transparent illustration.   */
/* ------------------------------------------------------------------ */

type Variant = "on-light" | "on-dark" | "dark-panel";

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  /** Optional transparent line-art mark, rendered top-right. */
  art?: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * `on-light`   — white card on a light background.
   * `on-dark`    — white card on a dark background (heavier shadow).
   * `dark-panel` — raised dark card on a dark background.
   */
  variant?: Variant;
  className?: string;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Raised slab for cards sitting on a near-black (#140e2a-ish) backdrop.
 * An opaque surface several stops lighter than the section, a lit top edge,
 * and a deep cast shadow — so the card reads as an object rather than a
 * slightly-tinted patch of the background. Exported so sections with their
 * own card markup can share the exact treatment.
 */
export const DARK_PANEL_SURFACE =
  "bg-[#221a45] bg-gradient-to-b from-white/[0.07] to-transparent border border-white/[0.13] hover:border-coral/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_48px_-20px_rgba(0,0,0,0.85)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_30px_64px_-20px_rgba(0,0,0,0.95)]";

/* Per-variant surface + type treatment. Kept in one place so the three
   tones stay in step when the card is tweaked. */
const TONE: Record<
  Variant,
  {
    surface: string;
    wash: string;
    art: string;
    num: string;
    rule: string;
    title: string;
    body: string;
  }
> = {
  "on-light": {
    surface:
      "bg-white border border-black/[0.07] hover:border-brand/25 shadow-[0_1px_2px_rgba(20,14,42,0.04)] hover:shadow-[0_20px_44px_-16px_rgba(77,57,127,0.22)]",
    wash: "bg-brand/[0.07]",
    art: "text-brand/20 group-hover:text-brand/40",
    num: "text-brand/80 group-hover:text-brand",
    rule: "bg-brand/25 group-hover:bg-brand/50",
    title: "text-ink",
    body: "text-muted-foreground",
  },
  "on-dark": {
    surface:
      "bg-white border border-black/[0.07] hover:border-brand/25 shadow-[0_18px_44px_-18px_rgba(0,0,0,0.55)] hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.65)]",
    wash: "bg-brand/[0.07]",
    art: "text-brand/20 group-hover:text-brand/40",
    num: "text-brand/80 group-hover:text-brand",
    rule: "bg-brand/25 group-hover:bg-brand/50",
    title: "text-ink",
    body: "text-muted-foreground",
  },
  /* Raised slab: sits several stops lighter than a #140e2a backdrop, with a
     lit top edge and a deep cast shadow so it reads as a distinct object. */
  "dark-panel": {
    surface: DARK_PANEL_SURFACE,
    wash: "bg-coral/20",
    art: "text-white/15 group-hover:text-white/30",
    num: "text-coral/90 group-hover:text-coral",
    rule: "bg-white/20 group-hover:bg-coral/60",
    title: "text-white",
    body: "text-white/65",
  },
};

export function FeatureCard({
  index,
  title,
  description,
  art: Art,
  variant = "on-light",
  className,
}: FeatureCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const tone = TONE[variant];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 sm:p-7",
        "transition-[border-color,box-shadow] duration-500 ease-out",
        tone.surface,
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

      {/* Soft wash that breathes in behind the corner */}
      <span
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100",
          tone.wash,
        )}
      />

      {Art && (
        <Art
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute right-5 top-5 size-[68px] select-none transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] [transform-origin:top_right] group-hover:-rotate-3 group-hover:scale-110",
            tone.art,
          )}
        />
      )}

      {/* Index + hairline rule that extends on hover */}
      <div className="relative mb-4 flex items-center gap-3">
        <span
          className={cn(
            "font-mono text-xs font-semibold tracking-[0.2em] transition-colors duration-500",
            tone.num,
          )}
        >
          {num}
        </span>
        <span
          className={cn(
            "h-px w-6 transition-all duration-500 ease-out group-hover:w-12",
            tone.rule,
          )}
        />
      </div>

      <h3
        className={cn(
          "relative mb-2.5 font-heading text-[1.05rem] font-bold leading-snug transition-transform duration-500 ease-out group-hover:translate-x-0.5 sm:text-[1.15rem]",
          tone.title,
          Art && "pr-20",
        )}
      >
        {title}
      </h3>
      <p className={cn("relative text-[15px] leading-relaxed", tone.body)}>
        {description}
      </p>
    </motion.div>
  );
}
