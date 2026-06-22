import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ArrowRight, TrendingUp, FileText, Shield } from "lucide-react";

function TabletMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Tablet frame */}
      <div className="rounded-[1.75rem] border-[10px] border-[#2a2a2a] bg-white shadow-2xl shadow-black/20 overflow-hidden">
        {/* Screen content */}
        <div className="aspect-[3/4] overflow-hidden">
          {/* Newsletter header */}
          <div className="bg-gradient-to-br from-[#4D397F] to-[#362765] px-5 pt-5 pb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-6 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">TL</span>
              </div>
              <span className="text-[10px] font-heading font-semibold text-white/80">TrueLedger Insights</span>
            </div>
            <p className="text-white font-heading font-bold text-sm leading-tight">
              5 Tax Strategies Every Business Owner Should Know
            </p>
            <p className="text-white/50 text-[10px] mt-1.5">June 2026 Edition</p>
          </div>

          {/* Article preview image */}
          <img
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160951_87d38f12-9f15-45af-840f-a14eb5b250ef_min.webp"
            alt=""
            className="w-full h-24 object-cover"
          />

          {/* Article content preview */}
          <div className="px-4 py-3">
            <div className="flex gap-2 mb-2.5">
              <span className="text-[8px] font-semibold uppercase tracking-wider text-[#EE672C] bg-[#EE672C]/10 px-2 py-0.5 rounded-full">Tax</span>
              <span className="text-[8px] font-semibold uppercase tracking-wider text-[#4D397F] bg-[#4D397F]/10 px-2 py-0.5 rounded-full">Advisory</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-gray-200 rounded-full w-full" />
              <div className="h-1.5 bg-gray-200 rounded-full w-[90%]" />
              <div className="h-1.5 bg-gray-200 rounded-full w-[75%]" />
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-[9px] font-heading font-semibold text-gray-800 mb-1">Also in this issue:</p>
              <div className="space-y-1.5">
                {["Q2 Compliance Checklist", "Multi-Entity Reporting Tips"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="size-1 rounded-full bg-[#EE672C] shrink-0" />
                    <span className="text-[8px] text-gray-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home button */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-5 rounded-full border-2 border-[#2a2a2a]" />

      {/* Decorative glow behind tablet */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#4D397F]/10 to-[#EE672C]/10 rounded-full blur-2xl -z-10" />
    </div>
  );
}

export function SubscribeInsights() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#faf9f7] via-white to-[#f5f0eb] border border-black/[0.06] shadow-lg">
            {/* Subtle decorative blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] bg-[#4D397F]/[0.06] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[60px] bg-[#EE672C]/[0.06] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 px-8 py-10 md:px-14 md:py-14">
              {/* Left: Tablet visual */}
              <div className="shrink-0 hidden sm:block">
                <TabletMockup />
              </div>

              {/* Right: Content + form */}
              <div className="flex-1 text-center md:text-left">
                {/* Icon row */}
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <div className="flex -space-x-1">
                    {[
                      { Icon: TrendingUp, color: "#EE672C" },
                      { Icon: FileText, color: "#4D397F" },
                      { Icon: Shield, color: "#B03B2D" },
                    ].map(({ Icon, color }) => (
                      <div
                        key={color}
                        className="size-8 rounded-full flex items-center justify-center border-2 border-white"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon className="size-3.5" style={{ color }} />
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="font-heading font-bold text-2xl md:text-[1.75rem] text-gray-900 mb-2 leading-snug">
                  Subscribe to Our Monthly Newsletter
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                  Stay informed with tips, important tax deadline reminders, and expert insights to help you make the best financial decisions.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl h-12 px-5 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-[#4D397F]/30 focus-visible:border-[#4D397F]/30 text-sm shadow-sm"
                  />
                  <Button
                    type="submit"
                    className="rounded-xl h-12 px-7 font-semibold text-sm shadow-lg shadow-[#4D397F]/15 shrink-0 cursor-pointer bg-[#4D397F] hover:bg-[#362765] text-white"
                  >
                    Join Now
                    <ArrowRight className="size-4 ml-1.5" />
                  </Button>
                </form>

                <p className="text-gray-400 text-xs mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
