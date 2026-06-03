"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

export interface TimelineStep {
  marker: string;
  text: string;
  image: string;
  color?: string;
}

interface ScrollFlipTimelineProps {
  steps: TimelineStep[];
  /** Extra top offset (px) for sticky panel — accounts for navbar + sticky heading */
  stickyTopOffset?: number;
}

/* ------------------------------------------------------------------ */
/*  Flip-card animation variants (multi-axis)                           */
/* ------------------------------------------------------------------ */

const cardVariants = {
  enter: (dir: number) => ({
    rotateY: dir > 0 ? -90 : 90,
    rotateX: dir > 0 ? 6 : -6,
    rotateZ: dir > 0 ? -2 : 2,
    scale: 0.85,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
  exit: (dir: number) => ({
    rotateY: dir > 0 ? 90 : -90,
    rotateX: dir > 0 ? -6 : 6,
    rotateZ: dir > 0 ? 2 : -2,
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
  }),
};

/* gradient fallback colours for each step index */
const gradientFallbacks = [
  "from-[#5D3858] to-[#8B6B82]",
  "from-[#3B2352] to-[#7C4A76]",
  "from-[#4A2848] to-[#C183B8]",
  "from-[#2D1F3D] to-[#7C4A76]",
  "from-[#3D2040] to-[#9B5F93]",
];

/* ------------------------------------------------------------------ */
/*  Desktop layout                                                      */
/* ------------------------------------------------------------------ */

function DesktopTimeline({ steps, stickyTopOffset = 0 }: ScrollFlipTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------- robust step calculation with snap zones ---------- */
  const updateStep = useCallback(
    (latest: number) => {
      // Each step gets an equal share of the scroll range
      // with generous dead zones to prevent skipping
      const stepSize = 1 / steps.length;

      for (let i = steps.length - 1; i >= 0; i--) {
        const threshold = i * stepSize + stepSize * 0.1; // 10% into each zone triggers
        if (latest >= threshold) {
          setActiveStep((prev) => {
            if (i !== prev) setDirection(i > prev ? 1 : -1);
            return i;
          });
          return;
        }
      }
      setActiveStep((prev) => {
        if (prev !== 0) setDirection(-1);
        return 0;
      });
    },
    [steps.length]
  );

  useMotionValueEvent(scrollYProgress, "change", updateStep);

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const step = steps[activeStep];

  /* More scroll distance per step to prevent skipping */
  const scrollHeight = steps.length * 100; // 100vh per step

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div
        className="sticky flex items-center"
        style={{
          top: stickyTopOffset,
          height: `calc(100vh - ${stickyTopOffset}px)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex gap-10 xl:gap-16 items-center">
            {/* ---- LEFT: Timeline stepper ---- */}
            <div className="w-[360px] xl:w-[420px] shrink-0 relative pl-10">
              {/* Background rail */}
              <div className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-brand/10" />
              {/* Progress fill */}
              <motion.div
                className="absolute left-2 top-2 w-[2px] rounded-full bg-brand origin-top"
                style={{ height: "calc(100% - 16px)", scaleY: lineScaleY }}
              />

              <div className="space-y-1.5">
                {steps.map((s, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  return (
                    <button
                      key={s.marker}
                      type="button"
                      onClick={() => {
                        if (!containerRef.current) return;
                        const top =
                          containerRef.current.getBoundingClientRect().top +
                          window.scrollY;
                        const pct = (i + 0.5) / steps.length;
                        window.scrollTo({
                          top:
                            top +
                            pct * containerRef.current.offsetHeight -
                            window.innerHeight / 2,
                          behavior: "smooth",
                        });
                      }}
                      className={`
                        relative w-full text-left pl-10 py-3.5 rounded-2xl transition-all duration-500 cursor-pointer
                        ${
                          isActive
                            ? "bg-brand-tint/80 shadow-sm"
                            : "hover:bg-brand-tint/30"
                        }
                      `}
                    >
                      {/* Step number + dot */}
                      <div
                        className={`
                          absolute left-0 top-[14px] flex items-center justify-center rounded-full transition-all duration-500 z-10
                          ${
                            isActive
                              ? "size-7 -left-[4px] bg-brand text-white shadow-lg shadow-brand/30"
                              : isPast
                              ? "size-5 left-0 bg-brand text-white"
                              : "size-5 left-0 border-2 border-brand/20 bg-white"
                          }
                        `}
                      >
                        <span
                          className={`font-heading font-bold ${
                            isActive
                              ? "text-[11px]"
                              : isPast
                              ? "text-[9px]"
                              : "text-[9px] text-brand/30"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {isActive && (
                        <motion.div
                          className="absolute -left-[4px] top-[14px] size-7 rounded-full border-2 border-brand"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 2.2, opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}

                      {/* Marker label */}
                      <span
                        className={`text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-brand"
                            : isPast
                            ? "text-brand/40"
                            : "text-ink/20"
                        }`}
                      >
                        {s.marker}
                      </span>

                      {/* Expanded description */}
                      <div
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          maxHeight: isActive ? 200 : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 8 : 0,
                        }}
                      >
                        <p className="text-[13px] text-muted-foreground leading-relaxed pr-2">
                          {s.text}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ---- RIGHT: 3D Flip Card ---- */}
            <div className="flex-1 min-w-0 flex justify-center px-4">
              <div
                className="w-full max-w-[540px]"
                style={{ perspective: 1200 }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeStep}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="rounded-3xl overflow-hidden will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      boxShadow:
                        "0 30px 60px -15px rgba(124,74,118,0.3), 0 15px 30px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(124,74,118,0.06)",
                    }}
                  >
                    <div
                      className={`aspect-[4/3] relative bg-gradient-to-br ${
                        gradientFallbacks[
                          activeStep % gradientFallbacks.length
                        ]
                      }`}
                    >
                      {/* Actual image */}
                      <img
                        src={step.image}
                        alt={step.marker}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                      />

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f18]/90 via-[#1a0f18]/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f18]/30 to-transparent" />

                      {/* Step number */}
                      <div className="absolute top-5 right-5">
                        <div className="size-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
                          <span className="text-lg font-bold text-white/80 font-heading">
                            {String(activeStep + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Bottom content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.45 }}
                        >
                          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 mb-3">
                            {step.marker}
                          </span>
                          <p className="text-white/85 text-sm leading-relaxed line-clamp-3">
                            {step.text}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Reflection */}
                <div className="mt-3 mx-10 h-3 bg-brand/5 rounded-full blur-lg" />
              </div>
            </div>
          </div>

          {/* Step dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full"
                animate={{
                  width: i === activeStep ? 24 : 8,
                  backgroundColor:
                    i <= activeStep
                      ? "var(--color-brand)"
                      : "rgba(124,74,118,0.12)",
                  opacity: i === activeStep ? 1 : i < activeStep ? 0.5 : 0.3,
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile stacked layout                                               */
/* ------------------------------------------------------------------ */

function MobileTimeline({ steps }: ScrollFlipTimelineProps) {
  return (
    <div className="relative pl-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Vertical line */}
      <div className="absolute left-7 sm:left-9 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand/30 via-brand/20 to-transparent rounded-full" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.marker}
            initial={{ opacity: 0, y: 30, rotateY: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
            style={{ perspective: 800 }}
          >
            {/* Dot */}
            <div className="absolute -left-[5px] sm:left-[3px] top-4 size-3 rounded-full border-2 border-brand bg-brand z-10" />

            {/* Card */}
            <div className="rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-sm ml-4">
              <div
                className={`aspect-[16/9] relative bg-gradient-to-br ${
                  gradientFallbacks[i % gradientFallbacks.length]
                }`}
              >
                <img
                  src={step.image}
                  alt={step.marker}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f18] via-[#1a0f18]/20 to-transparent" />

                <div className="absolute top-3 right-3 size-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {step.marker}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                         */
/* ------------------------------------------------------------------ */

export function ScrollFlipTimeline({ steps, stickyTopOffset = 0 }: ScrollFlipTimelineProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? (
    <MobileTimeline steps={steps} />
  ) : (
    <DesktopTimeline steps={steps} stickyTopOffset={stickyTopOffset} />
  );
}
