import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* ================================================================== */
/*  Carousel slides data                                               */
/* ================================================================== */
const carouselSlides = [
  {
    id: 1,
    title: "MODERN ACCOUNTING & TAX SOLUTIONS",
    subtitle: "for Businesses Across the Globe",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Solve Complex Cross-Border Tax Issues.",
    subtitle: "Build with Certainty.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Scale Confidently With Expert Finance Advice",
    subtitle: "and Strategy",
    image: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Unlock Operational Efficiency",
    subtitle: "with Trusted Expertise.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ================================================================== */
/*  Image Carousel Component                                           */
/* ================================================================== */
function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
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
            alt={carouselSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient - lighter for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1);
              setCurrentSlide(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-background to-background">
      {/* Gradient orbs */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-80"
        style={{ background: "radial-gradient(circle, rgba(77,57,127,0.12), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-[80px] opacity-60"
        style={{ background: "radial-gradient(circle, rgba(77,57,127,0.08), transparent 70%)" }}
      />

      {/* Chevron decorations */}
      <div className="absolute top-16 -left-20 font-heading text-[14rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>
      <div className="absolute bottom-10 right-0 font-heading text-[10rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              <span className="block">MODERN</span>
              <span className="block">ACCOUNTING</span>
              <span className="block text-primary">&amp; TAX SOLUTIONS</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                for Businesses Across the Globe
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              We enhance your operations and efficiency through business
              intelligence, human judgment, and technology.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <ConsultationModal
                trigger={
                  <Button size="lg" className="shadow-lg shadow-primary/20">
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
              className="flex flex-wrap gap-6 sm:gap-10 mt-8 pt-7 border-t border-border/60"
            >
              {[
                { value: 150, suffix: "+", label: "Clients Served" },
                { value: 6, suffix: "+", label: "Countries" },
                { value: 15, suffix: "+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}