import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ClosingCta() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Background image */}
      <img
        src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Color overlays */}
      <div className="absolute inset-0 bg-[#140e2a]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />

      {/* Accent glows */}
      <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
            Ready to get started?
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Let's Build Your Financial
            <br className="hidden sm:block" />
            Foundation Together
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-8">
            From startup to scale-up, from domestic to global — we're ready when you are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ConsultationModal
              trigger={
                <Button
                  size="lg"
                  className="text-base px-8 h-13 font-semibold shadow-xl shadow-[#EE672C]/20 border-0 text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #EE672C, #B03B2D)" }}
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
              <div key={item.text} className="flex items-center gap-2 text-white/50">
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
