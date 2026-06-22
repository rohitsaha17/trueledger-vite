import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ArrowRight } from "lucide-react";

export function SubscribeInsights() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl">
            {/* Generated background image */}
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160949_2167c049-3621-46bf-b7c7-03acef767880_min.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#140e2a]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140e2a]/60 via-transparent to-[#140e2a]/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 px-7 py-8 md:px-12 md:py-10">
              {/* Left: text */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-heading font-bold text-lg md:text-xl text-white mb-1.5 leading-snug">
                  Clarity delivered to your inbox
                </h2>
                <p className="text-white/45 text-sm leading-relaxed">
                  Practical insights on accounting, tax & advisory — straight from our team.
                </p>
              </div>

              {/* Right: inline form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full sm:w-auto gap-2 shrink-0"
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:w-56 rounded-lg h-10 px-4 bg-white/10 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#EE672C]/40 focus-visible:border-[#EE672C]/40 text-sm"
                />
                <Button
                  type="submit"
                  className="rounded-lg h-10 px-5 font-semibold text-sm shadow-lg shadow-[#EE672C]/20 shrink-0 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #EE672C, #B03B2D)" }}
                >
                  Subscribe
                  <ArrowRight className="size-3.5 ml-1" />
                </Button>
              </form>
            </div>

            {/* Bottom accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#4D397F] via-[#EE672C] to-[#B03B2D]" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
