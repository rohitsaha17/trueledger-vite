import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  BookOpen,
  Calculator,
  Lightbulb,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";

const services = [
  {
    icon: Globe,
    title: "Global Entity Setup",
    description:
      "We don't just file paperwork. We think about your structure before you sign anything. We guide founders and enterprises through every step of establishing a compliant, tax-efficient presence — whether you're setting up a US LLC or C-Corp, entering India, Canada, Singapore, or Australia, or structuring a multi-entity global footprint.",
    href: "/services/global-entity-setup",
    gradient:
      "radial-gradient(ellipse at 30% 20%, #C183B8 0%, #7C4A76 35%, #3d2439 70%, #1a0f18 100%)",
    accent: "#C183B8",
    image: "/images/services/global-entity-setup.webp",
  },
  {
    icon: BookOpen,
    title: "Managed Accounting & Bookkeeping",
    description:
      "Accurate books aren't just a deliverable — they're a discipline. Built on years of hands-on experience across industries and geographies, we manage your books in real time: ensuring compliance, maintaining financial hygiene, and keeping you growth-ready every single day.",
    href: "/services/managed-accounting-bookkeeping",
    gradient:
      "radial-gradient(ellipse at 70% 80%, #a78bfa 0%, #7C4A76 30%, #4c1d95 60%, #1e0a3a 100%)",
    accent: "#a78bfa",
    image: "/images/services/managed-accounting.webp",
  },
  {
    icon: Calculator,
    title: "Tax Compliance & Planning",
    description:
      "With deep expertise across global tax laws, cross-border structures, and owner-level tax planning, we serve business owners across jurisdictions who need an advisor who understands the full picture — entity and personal.",
    href: "/services/tax-compliance-advisory",
    gradient:
      "radial-gradient(ellipse at 60% 30%, #f0abfc 0%, #C183B8 25%, #7C4A76 55%, #2d1a2a 100%)",
    accent: "#f0abfc",
    image: "/images/services/tax-compliance.webp",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description:
      "Great businesses are built on great decisions — and great decisions need the right advisor. Our advisory practice goes beyond numbers, working alongside founders and leadership teams on the things that shape a business long-term: strategy, governance, fundraising readiness, financial controls, and the technology infrastructure that holds it all together.",
    href: "/services/business-advisory",
    gradient:
      "radial-gradient(ellipse at 40% 60%, #fbbf24 0%, #b45309 20%, #7C4A76 50%, #1a0f18 100%)",
    accent: "#fbbf24",
    image: "/images/services/business-advisory.webp",
  },
  {
    icon: Users,
    title: "Support to CPAs & Accounting Firms",
    description:
      "Every CPA firm reaches a point where the back-office work starts competing with the work that actually grows the business. That's where we come in. We become a natural extension of your team — handling client onboarding, day-to-day bookkeeping, month-end close, financial reporting, historical cleanups, payroll, and sales tax filings across your portfolio.",
    href: "/services/support-to-cpas",
    gradient:
      "radial-gradient(ellipse at 50% 40%, #5eead4 0%, #0d9488 20%, #7C4A76 55%, #1a0f18 100%)",
    accent: "#5eead4",
    image: "/images/services/support-cpas.webp",
  },
];


export function ServicesBrief() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleManualChange = useCallback(
    (index: number) => {
      setActiveIndex(index);
      resetTimer();
    },
    [resetTimer]
  );

  const handleNext = useCallback(() => {
    goNext();
    resetTimer();
  }, [goNext, resetTimer]);

  const handlePrev = useCallback(() => {
    goPrev();
    resetTimer();
  }, [goPrev, resetTimer]);

  const activeService = services[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-brand-dark">
      {/* Background gradient that changes per service */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ background: activeService.gradient }}
        />
      </AnimatePresence>

      {/* Left-side dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(26,15,24,0.92) 0%, rgba(26,15,24,0.85) 30%, rgba(26,15,24,0.5) 55%, rgba(26,15,24,0.1) 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-16">
        {/* Section heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
          <AnimatedSection>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-brand)" }}
            >
              How We Help Clients
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight max-w-2xl">
              Every great business is built on the right financial foundation.
            </h2>
          </AnimatedSection>
        </div>

        {/* Split layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Accordion */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-1">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.title}
                      onClick={() => handleManualChange(index)}
                      className="w-full text-left group"
                    >
                      <div
                        className="relative rounded-xl px-4 py-2.5 transition-all duration-300"
                        style={{
                          backgroundColor: isActive
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                          borderLeft: isActive
                            ? `3px solid ${service.accent}`
                            : "3px solid transparent",
                        }}
                      >
                        {/* Title row */}
                        <div className="flex items-center gap-3">
                          <div
                            className="size-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                            style={{
                              backgroundColor: isActive
                                ? `${service.accent}22`
                                : "rgba(255,255,255,0.06)",
                            }}
                          >
                            <Icon
                              className="size-4.5 transition-colors duration-300"
                              style={{
                                color: isActive
                                  ? service.accent
                                  : "rgba(255,255,255,0.5)",
                              }}
                            />
                          </div>
                          <span
                            className="font-heading font-semibold text-sm sm:text-base transition-colors duration-300"
                            style={{
                              color: isActive
                                ? "#ffffff"
                                : "rgba(255,255,255,0.6)",
                            }}
                          >
                            {service.title}
                          </span>
                        </div>

                        {/* Expanded content */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: { duration: 0.35, ease: "easeInOut" },
                                opacity: { duration: 0.25, delay: 0.1 },
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2 pl-11">
                                <p className="text-[13px] leading-relaxed text-white/60 mb-3">
                                  {service.description}
                                </p>
                                <Link
                                  to={service.href}
                                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group/link"
                                  style={{ color: service.accent }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Learn More
                                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3 mt-5 pl-4">
                <button
                  onClick={handlePrev}
                  className="size-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="size-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                  aria-label="Next service"
                >
                  <ChevronRight className="size-4" />
                </button>
                <span className="text-xs text-white/60 ml-2 font-mono tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
            </AnimatedSection>

            {/* Right: Visual area */}
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Gradient background for the visual card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`visual-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{ background: activeService.gradient }}
                  />
                </AnimatePresence>

                {/* Glass overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                  }}
                />

                {/* Service image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom label */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`label-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div
                      className="rounded-xl px-5 py-4 backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: activeService.accent }}
                      >
                        Service {String(activeIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="text-white font-heading font-semibold text-base sm:text-lg">
                        {activeService.title}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating dots / ambient particles */}
                <motion.div
                  key={`particle-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[
                    { x: "15%", y: "20%", size: 4, delay: 0 },
                    { x: "75%", y: "15%", size: 3, delay: 0.5 },
                    { x: "80%", y: "70%", size: 5, delay: 1 },
                    { x: "25%", y: "75%", size: 3, delay: 1.5 },
                    { x: "60%", y: "85%", size: 4, delay: 0.8 },
                  ].map((dot, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: dot.x,
                        top: dot.y,
                        width: dot.size,
                        height: dot.size,
                        backgroundColor: activeService.accent,
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: dot.delay,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
