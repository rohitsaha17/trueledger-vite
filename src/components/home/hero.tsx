import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* ================================================================== */
/*  Carousel slides data                                               */
/*  Each artwork is composed for its own headline, with a calm violet   */
/*  left half so the copy always lands on an uncluttered field.         */
/* ================================================================== */
const carouselSlides = [
  {
    id: 1,
    titleLines: ["MODERN", "ACCOUNTING", "& TAX SOLUTIONS"],
    subtitle: "for Businesses Across the Globe",
    image: "/images/hero/hero-accounting-tax.webp",
  },
  {
    id: 2,
    titleLines: ["Solve Complex", "Cross-Border", "Tax Issues."],
    subtitle: "Build with Certainty.",
    image: "/images/hero/hero-cross-border-tax.webp",
  },
  {
    id: 3,
    titleLines: ["Scale Confidently", "With Expert", "Finance Advice"],
    subtitle: "and Strategy",
    image: "/images/hero/hero-scale-advice.webp",
  },
  {
    id: 4,
    titleLines: ["Unlock", "Operational", "Efficiency"],
    subtitle: "with Trusted Expertise.",
    image: "/images/hero/hero-operational-efficiency.webp",
  },
];

/** How long each headline / slide stays on screen. */
const SLIDE_INTERVAL = 5500;

/** Horizontal travel (px) a touch must cover before it counts as a swipe. */
const SWIPE_THRESHOLD = 45;

/* ================================================================== */
/*  Rotating headline — each line rises in from the bottom             */
/* ================================================================== */
function RotatingHeadline({ slide }: { slide: (typeof carouselSlides)[number] }) {
  const lineEase = [0.22, 1, 0.36, 1] as const;

  return (
    /* Fixed-height stage: the outgoing and incoming headlines overlap, so the
       lines read as one continuous bottom-to-top conveyor. */
    <div className="relative mb-6 min-h-[13rem] sm:min-h-[14rem] lg:min-h-[15rem] xl:min-h-[17rem]">
      <AnimatePresence initial={false}>
        <h1
          key={slide.id}
          className="absolute inset-x-0 top-0 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08]"
        >
          {slide.titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${i === slide.titleLines.length - 1 ? "text-brand-light" : ""}`}
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-115%" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: lineEase }}
              >
                {line}
              </motion.span>
            </span>
          ))}

          <span className="block overflow-hidden pb-[0.12em] mt-2">
            <motion.span
              className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/75"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-115%" }}
              transition={{
                duration: 0.65,
                delay: slide.titleLines.length * 0.08,
                ease: lineEase,
              }}
            >
              {slide.subtitle}
            </motion.span>
          </span>
        </h1>
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  Full-bleed background carousel (controlled by <Hero />)            */
/* ================================================================== */
function BackgroundCarousel({
  currentSlide,
  direction,
}: {
  currentSlide: number;
  direction: number;
}) {
  const slideVariants = {
    /* Percentage offsets so the travel scales with the full-bleed stage
       instead of a fixed pixel distance. */
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The outgoing and incoming slides overlap, so the full-bleed stage is
          never momentarily empty mid-transition. */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={carouselSlides[currentSlide].image}
            alt={carouselSlides[currentSlide].titleLines.join(" ")}
            className="w-full h-full object-cover"
            loading={currentSlide === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ================================================================== */
/*  Animated counter                                                    */
/* ================================================================== */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * target);
            el.textContent = `${current}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ================================================================== */
/*  Hero section                                                       */
/* ================================================================== */
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    const total = carouselSlides.length;
    setDirection(dir);
    setCurrentSlide(((index % total) + total) % total);
  }, []);

  /* Auto-advance. The timer restarts whenever the slide changes, so a manual
     click or swipe still gives the new slide a full interval on screen. */
  useEffect(() => {
    const timer = setTimeout(() => goTo(currentSlide + 1, 1), SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [currentSlide, goTo]);

  /* Touch swiping — the only way to drive the carousel by hand on phones and
     tablets, where the arrow buttons are hidden. Nothing is preventDefault-ed
     and a mostly-vertical gesture is ignored, so the page still scrolls
     normally through the hero. */
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    /* Too short to be deliberate, or really a vertical scroll. */
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;

    const dir = dx < 0 ? 1 : -1;
    goTo(currentSlide + dir, dir);
  };

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-brand-dark touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-bleed slide artwork — the carousel *is* the background */}
      <BackgroundCarousel currentSlide={currentSlide} direction={direction} />

      {/* Scrims: hold the copy legible on the left while the artwork keeps its
          detail on the right. */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-[#1B1330]/85 via-[#1B1330]/45 to-transparent" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-[#1B1330]/70 via-transparent to-[#1B1330]/25" />

      {/* Gradient orbs */}
      <div
        className="absolute -top-32 -right-32 z-[3] w-[500px] h-[500px] rounded-full blur-[100px] opacity-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(185,164,232,0.16), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 z-[3] w-[400px] h-[400px] rounded-full blur-[80px] opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(185,164,232,0.12), transparent 70%)" }}
      />

      {/* Chevron decorations */}
      <div className="absolute top-16 -left-20 z-[3] font-heading text-[14rem] font-bold text-white/[0.05] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>
      <div className="absolute bottom-10 right-0 z-[3] font-heading text-[10rem] font-bold text-white/[0.05] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Copy sits over the artwork, on the calm left half of every slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <RotatingHeadline slide={carouselSlides[currentSlide]} />

          <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
            We enhance your operations and efficiency through business
            intelligence, human judgment, and technology.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <ConsultationModal
              trigger={
                <Button size="lg" className="shadow-lg shadow-black/30">
                  Book a Consultation
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
          </div>

          {/* Animated stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-8 pt-7 border-t border-white/20"
          >
            {[
              { value: 150, suffix: "+", label: "Clients Served" },
              { value: 6, suffix: "+", label: "Countries" },
              { value: 15, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white font-heading">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm sm:text-base text-white/70 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation arrows — edge-anchored, and kept off narrow screens where
          they would land on top of the headline. */}
      <button
        onClick={() => goTo(currentSlide - 1, -1)}
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={() => goTo(currentSlide + 1, 1)}
        className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
