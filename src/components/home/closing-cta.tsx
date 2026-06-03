import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ClosingCta() {
  return (
    <section className="py-14 md:py-20 bg-brand-dark relative overflow-hidden">
      {/* Static gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Chevron decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 font-heading text-[16rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 font-heading text-[11rem] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
        &rsaquo;
      </div>

      {/* Floating badges — static, visible on lg only */}
      <div className="absolute top-16 right-[15%] hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <div className="flex -space-x-2">
          <img src="/logos/flags/us.svg" alt="" className="size-5 rounded-full border border-white/20" />
          <img src="/logos/flags/in.svg" alt="" className="size-5 rounded-full border border-white/20" />
          <img src="/logos/flags/au.svg" alt="" className="size-5 rounded-full border border-white/20" />
        </div>
        <span className="text-xs text-white/50">6+ Countries</span>
      </div>

      <div className="absolute bottom-16 left-[12%] hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <ArrowUpRight className="size-3.5 text-brand" />
        <span className="text-xs text-white/50">ISO Certified</span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-4">
            Ready to get started?
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Let's Build Your Financial
            <br className="hidden sm:block" />
            Foundation Together
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="bg-white text-brand-dark hover:bg-white/90 shadow-xl shadow-black/20 text-base px-8 h-13"
                >
                  Book a Consultation
                  <ChevronRight className="size-4" />
                </Button>
              }
            />
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: "shield", text: "ISO 27001 Certified" },
              { icon: "globe", text: "Multi-Country Operations" },
              { icon: "clock", text: "Dedicated Support" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/60">
                {item.icon === "shield" && (
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                )}
                {item.icon === "globe" && (
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                )}
                {item.icon === "clock" && (
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                )}
                <span className="text-xs font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
