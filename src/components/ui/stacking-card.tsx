'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface StackingProject {
  title: string;
  description: string;
  src: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

/* ------------------------------------------------------------------ */
/*  Individual Card                                                    */
/* ------------------------------------------------------------------ */

function StackingCard({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[90%] max-w-5xl rounded-2xl p-8 sm:p-10 origin-top shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl text-center font-heading font-semibold text-white drop-shadow-sm">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row h-full mt-5 gap-6 sm:gap-10">
          <div className="sm:w-[40%] relative sm:top-[10%]">
            <p className="text-sm sm:text-[0.9375rem] text-white/85 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="relative sm:w-[60%] h-full rounded-xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={src}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cards container — drop this into any section                       */
/* ------------------------------------------------------------------ */

interface StackingCardsProps {
  projects: StackingProject[];
  /** Content rendered as a sticky header pinned below the navbar */
  stickyHeader?: React.ReactNode;
  /** Tailwind bg class for the sticky header area (must match section bg) */
  headerBgClass?: string;
}

export function StackingCards({
  projects,
  stickyHeader,
  headerBgClass = 'bg-background',
}: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scaleStep = Math.min(0.05, 0.25 / projects.length);

  return (
    <div ref={container}>
      {/* Sticky section heading — stays visible while cards stack below */}
      {stickyHeader && (
        <div className="sticky top-[72px] z-20 pointer-events-none">
          <div className={`${headerBgClass} pt-8 pb-3`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {stickyHeader}
            </div>
          </div>
          {/* Fade gradient so cards disappear smoothly behind the heading */}
          <div
            className="h-10"
            style={{
              background: `linear-gradient(to bottom, var(--sticky-header-bg, transparent), transparent)`,
            }}
          />
        </div>
      )}

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * scaleStep;
        return (
          <StackingCard
            key={`p_${i}`}
            i={i}
            src={project.src}
            title={project.title}
            color={project.color}
            description={project.description}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
