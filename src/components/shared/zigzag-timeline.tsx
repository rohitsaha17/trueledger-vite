"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

export interface ZigzagStep {
  title: string;
  description: string;
}

interface ZigzagTimelineProps {
  steps: ZigzagStep[];
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Connector between cards (dashed diagonal line with dots)           */
/* ------------------------------------------------------------------ */

function Connector({ fromRight }: { fromRight: boolean }) {
  const x1 = fromRight ? 72 : 28;
  const x2 = fromRight ? 28 : 72;

  return (
    <div className="h-14 md:h-16 relative z-0 -my-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 64"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <line
          x1={x1}
          y1={4}
          x2={x2}
          y2={60}
          stroke="#c4b5c9"
          strokeWidth="0.6"
          strokeDasharray="3 2.5"
        />
        <circle cx={x1} cy={4} r={2} fill="#3a3a3a" />
        <circle cx={x2} cy={60} r={2} fill="#3a3a3a" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom finishing connector                                          */
/* ------------------------------------------------------------------ */

function FinishConnector({ fromRight }: { fromRight: boolean }) {
  const startX = fromRight ? 72 : 28;

  return (
    <div className="relative z-0 -mt-1">
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Diagonal to center */}
        <line
          x1={startX}
          y1={4}
          x2={50}
          y2={60}
          stroke="#c4b5c9"
          strokeWidth="0.6"
          strokeDasharray="3 2.5"
        />
        {/* Vertical down from center */}
        <line
          x1={50}
          y1={60}
          x2={50}
          y2={85}
          stroke="#c4b5c9"
          strokeWidth="0.6"
          strokeDasharray="3 2.5"
        />
        <circle cx={startX} cy={4} r={2} fill="#3a3a3a" />
        <circle cx={50} cy={85} r={1.5} fill="#3a3a3a" />
      </svg>

      {/* Finishing text */}
      <p className="text-center text-muted-foreground text-sm italic -mt-4 font-medium">
        Ready to deliver clarity!
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */

export function ZigzagTimeline({
  steps,
  eyebrow,
  title,
  description,
  className,
}: ZigzagTimelineProps) {
  return (
    <section className={cn("py-20 md:py-28 overflow-hidden", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight font-heading">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              {description}
            </p>
          )}
        </motion.div>

        {/* ---- Desktop: zigzag layout ---- */}
        <div className="hidden md:block">
          {steps.map((step, index) => {
            const isRight = index % 2 === 0;
            const rotation = isRight ? 2 : -2;
            const stepNum = String(index + 1).padStart(2, "0");
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title}>
                {/* Connector line from previous card */}
                {index > 0 && (
                  <Connector fromRight={!isRight} />
                )}

                {/* Card */}
                <motion.div
                  className={cn(
                    "w-[46%] relative z-10",
                    isRight ? "ml-auto" : "mr-auto"
                  )}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.05,
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-black/[0.04] relative group hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    {/* Pin dot */}
                    <div className="absolute top-5 right-5 size-3 bg-neutral-700 rounded-full shadow-sm ring-2 ring-white" />

                    {/* Step number */}
                    <span className="text-sm text-muted-foreground/50 font-medium tracking-wide">
                      {stepNum}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-ink mt-1.5 mb-3 pr-6 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Bottom finishing connector after last card */}
                {isLast && (
                  <FinishConnector fromRight={isRight} />
                )}
              </div>
            );
          })}
        </div>

        {/* ---- Mobile: vertical timeline ---- */}
        <div className="md:hidden relative">
          {/* Vertical dashed line */}
          <div className="absolute left-[18px] top-4 bottom-4 w-px border-l border-dashed border-neutral-300" />

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const stepNum = String(index + 1).padStart(2, "0");
              return (
                <motion.div
                  key={step.title}
                  className="relative pl-11"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-[13px] top-6 size-3 bg-neutral-700 rounded-full ring-2 ring-white" />

                  <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.04]">
                    <span className="text-xs text-muted-foreground/50 font-medium tracking-wide">
                      {stepNum}
                    </span>
                    <h3 className="font-heading text-base font-bold text-ink mt-1 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile finishing text */}
          <p className="text-center text-muted-foreground text-sm italic mt-8 font-medium">
            Ready to deliver clarity!
          </p>
        </div>
      </div>
    </section>
  );
}
