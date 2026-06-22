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
      "We guide founders and enterprises through establishing a compliant, tax-efficient presence — whether you're setting up a US LLC or C-Corp, entering India, Canada, Singapore, or Australia, or structuring a multi-entity global footprint.",
    href: "/services/global-entity-setup",
    accent: "#4D397F",
  },
  {
    icon: BookOpen,
    title: "Managed Accounting & Bookkeeping",
    description:
      "Built on years of hands-on experience across industries and geographies, we manage your books in real time — ensuring compliance, maintaining financial hygiene, and keeping you growth-ready every single day.",
    href: "/services/managed-accounting-bookkeeping",
    accent: "#362765",
  },
  {
    icon: Calculator,
    title: "Tax Compliance & Planning",
    description:
      "With deep expertise across global tax laws, cross-border structures, and owner-level tax planning, we serve business owners across jurisdictions who need an advisor who understands the full picture.",
    href: "/services/tax-compliance-advisory",
    accent: "#EE672C",
  },
  {
    icon: Lightbulb,
    title: "Advisory Services",
    description:
      "Our advisory practice goes beyond numbers — working alongside founders and leadership teams on strategy, governance, fundraising readiness, financial controls, and technology infrastructure.",
    href: "/services/business-advisory",
    accent: "#B03B2D",
  },
  {
    icon: Users,
    title: "Support to CPAs & Accounting Firms",
    description:
      "We become a natural extension of your team — handling client onboarding, day-to-day bookkeeping, month-end close, financial reporting, historical cleanups, payroll, and sales tax filings across your portfolio.",
    href: "/services/support-to-cpas",
    accent: "#4D397F",
  },
];

export function ServicesBrief() {
  const [activeIndex, setActiveIndex] = useState(0);

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
    setActiveIndex((prev) => (prev + 1) % services.length);
    resetTimer();
  }, [resetTimer]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    resetTimer();
  }, [resetTimer]);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#EE672C]">
            How We Help Clients
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-tight max-w-2xl">
            Every great business is built on the right financial foundation.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-10">
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
                    className="w-full text-left cursor-pointer group"
                  >
                    <div
                      className="relative rounded-xl px-4 py-3 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? "white" : "transparent",
                        borderLeft: isActive
                          ? `3px solid ${service.accent}`
                          : "3px solid transparent",
                        boxShadow: isActive
                          ? "0 2px 16px rgba(0,0,0,0.06)"
                          : "none",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="size-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                          style={{
                            backgroundColor: isActive
                              ? `${service.accent}15`
                              : "#f3f4f6",
                          }}
                        >
                          <Icon
                            className="size-4.5 transition-colors duration-300"
                            style={{
                              color: isActive ? service.accent : "#9ca3af",
                            }}
                          />
                        </div>
                        <span
                          className="font-heading font-semibold text-sm sm:text-base transition-colors duration-300"
                          style={{
                            color: isActive ? "#111827" : "#6b7280",
                          }}
                        >
                          {service.title}
                        </span>
                      </div>

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
                            <div className="pt-2 pl-12">
                              <p className="text-[13px] leading-relaxed text-gray-500 mb-3">
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

            <div className="flex items-center gap-3 mt-6 pl-4">
              <button
                onClick={handlePrev}
                className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="size-4" />
              </button>
              <span className="text-xs text-gray-400 ml-2 font-mono tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </AnimatedSection>

          {/* Right: Visual area */}
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-[#4D397F] via-[#362765] to-[#1e143a]"
                >
                  {/* Dot grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Accent glow */}
                  <motion.div
                    key={`glow-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/3 left-1/3 w-56 h-56 rounded-full blur-[100px]"
                    style={{ backgroundColor: activeService.accent }}
                  />

                  {/* Centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      key={`icon-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="size-28 rounded-3xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center"
                    >
                      <ActiveIcon className="size-14 text-white/70" />
                    </motion.div>
                  </div>

                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="size-44 rounded-full border border-white/[0.04]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="size-64 rounded-full border border-white/[0.03]" />
                  </div>

                  {/* Bottom label */}
                  <motion.div
                    key={`label-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-5 left-5 right-5"
                  >
                    <div className="rounded-xl px-5 py-4 bg-white/[0.08] backdrop-blur-md border border-white/[0.08]">
                      <p
                        className="text-[10px] font-semibold uppercase tracking-wider mb-1"
                        style={{ color: activeService.accent }}
                      >
                        Service {String(activeIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="text-white font-heading font-semibold text-base sm:text-lg">
                        {activeService.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
