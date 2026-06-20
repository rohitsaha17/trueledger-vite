"use client";

import { motion } from "framer-motion";
import {
  ContainerScroll,
  ContainerSticky,
  ProcessCard,
  ProcessCardBody,
  ProcessCardTitle,
} from "@/components/blocks/process-timeline";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

export interface ProcessPhase {
  title: string;
  description: string;
}

interface ServiceProcessTimelineProps {
  /** Section heading */
  title: string;
  /** Optional subtitle under heading */
  description?: string;
  /** Service steps to display */
  phases: ProcessPhase[];
  /** Extra classes on the scroll container */
  className?: string;
  /** Override background gradient */
  backgroundStyle?: React.CSSProperties;
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function ServiceProcessTimeline({
  title,
  description,
  phases,
  className = "",
  backgroundStyle,
}: ServiceProcessTimelineProps) {
  const scrollHeight = Math.max(200, phases.length * 40 + 80);

  return (
    <ContainerScroll
      className={`px-6 sm:px-8 lg:px-12 ${className}`}
      style={{
        height: `${scrollHeight}vh`,
        background:
          "radial-gradient(ellipse 60% 60% at 5% 80%, #241850 0%, #1a1338 30%, #140e2a 60%, #140e2a 100%)",
        ...backgroundStyle,
      }}
    >
      {/* ---- Sticky viewport: heading + cards pinned together ---- */}
      <ContainerSticky className="top-[72px] h-[calc(100vh-72px)] flex flex-col justify-center">
        {/* Section heading */}
        <motion.div
          className="mx-auto w-full max-w-7xl mb-8 space-y-3"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="bg-gradient-to-r from-[#7B6BA8]/60 via-white to-[#7B6BA8]/60 bg-clip-text font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
            {title}
          </h2>
          {description && (
            <p className="max-w-[56ch] text-sm sm:text-base text-white/40 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Horizontal scroll cards */}
        <div className="flex flex-nowrap items-stretch">
          {phases.map((phase, index) => (
            <ProcessCard
              key={phase.title}
              itemsLength={phases.length}
              index={index}
              variant="solid"
              className="min-w-[55%] max-w-[55%] lg:min-w-[50%] lg:max-w-[50%] rounded-2xl shadow-2xl shadow-black/40"
            >
              {/* Step number sidebar */}
              <ProcessCardTitle className="border-r border-[#362765]/30 flex items-center justify-center shrink-0 w-20">
                <span className="font-heading text-2xl font-bold text-[#7B6BA8]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </ProcessCardTitle>

              {/* Content */}
              <ProcessCardBody className="gap-3 py-8 px-8">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-tight text-white/95">
                  {phase.title}
                </h3>
                <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed">
                  {phase.description}
                </p>
              </ProcessCardBody>
            </ProcessCard>
          ))}
        </div>
      </ContainerSticky>
    </ContainerScroll>
  );
}
