import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const CARD_TOP_BASE = 120;
const CARD_TOP_STEP = 40;

/* ------------------------------------------------------------------ */
/*  Reusable stacking card wrapper                                     */
/* ------------------------------------------------------------------ */

interface StackCardProps {
  index: number;
  total: number;
  children: React.ReactNode;
  /** Optional overrides */
  topBase?: number;
  topStep?: number;
}

export function StackCard({
  index,
  total,
  children,
  topBase = CARD_TOP_BASE,
  topStep = CARD_TOP_STEP,
}: StackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const stickyTop = topBase + index * topStep;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const depthIndex = total - 1 - index;
  const depthScale = 1 - depthIndex * 0.01;

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: stickyTop, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto max-w-3xl"
      >
        <div
          className="relative bg-white rounded-2xl border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.06)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
          style={{ transform: `scale(${depthScale})` }}
        >
          {/* Brand-colored left accent border */}
          <div className="absolute inset-y-0 left-0 w-1 bg-brand rounded-l-2xl" />

          <div className="p-6 sm:p-7 pl-7 sm:pl-9">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Container for a stack of cards                                     */
/* ------------------------------------------------------------------ */

interface StackContainerProps {
  children: React.ReactNode;
  itemCount: number;
  topStep?: number;
  className?: string;
}

export function StackContainer({
  children,
  itemCount,
  topStep = CARD_TOP_STEP,
  className,
}: StackContainerProps) {
  return (
    <div
      className={className}
      style={{ paddingBottom: `${itemCount * topStep + 80}px` }}
    >
      <div className="flex flex-col gap-6 sm:gap-8">{children}</div>
    </div>
  );
}
