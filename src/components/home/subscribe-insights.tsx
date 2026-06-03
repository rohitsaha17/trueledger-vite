import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ArrowRight, Calculator } from "lucide-react";

/* ─── floating currency / number items ─── */
const floatingItems: {
  content: string;
  x: string;
  y: string;
  size: string;
  delay: number;
  duration: number;
  drift: [number, number];
  rotate?: [number, number];
  opacity: number;
}[] = [
  // Left cluster — currencies
  { content: "$", x: "4%", y: "18%", size: "text-3xl", delay: 0, duration: 5, drift: [-6, 8], rotate: [-8, 8], opacity: 0.15 },
  { content: "₹", x: "8%", y: "55%", size: "text-4xl", delay: 0.8, duration: 6, drift: [5, -7], rotate: [-5, 5], opacity: 0.12 },
  { content: "€", x: "14%", y: "78%", size: "text-2xl", delay: 1.5, duration: 4.5, drift: [-4, 6], opacity: 0.14 },
  { content: "£", x: "3%", y: "82%", size: "text-xl", delay: 2.2, duration: 5.5, drift: [7, -5], rotate: [-10, 10], opacity: 0.10 },

  // Right cluster — currencies
  { content: "¥", x: "88%", y: "22%", size: "text-3xl", delay: 0.5, duration: 5.5, drift: [6, -8], rotate: [5, -5], opacity: 0.14 },
  { content: "A$", x: "82%", y: "65%", size: "text-2xl", delay: 1.2, duration: 4.8, drift: [-5, 7], opacity: 0.12 },
  { content: "C$", x: "92%", y: "80%", size: "text-xl", delay: 2, duration: 6, drift: [4, -6], rotate: [-6, 6], opacity: 0.10 },
  { content: "S$", x: "86%", y: "40%", size: "text-lg", delay: 0.3, duration: 5, drift: [-7, 5], opacity: 0.09 },

  // Scattered numbers
  { content: "1040", x: "6%", y: "35%", size: "text-xs", delay: 1, duration: 7, drift: [3, -4], opacity: 0.08 },
  { content: "ROI", x: "90%", y: "12%", size: "text-xs", delay: 1.8, duration: 5, drift: [-3, 5], opacity: 0.08 },
  { content: "%", x: "18%", y: "15%", size: "text-5xl", delay: 0.4, duration: 6, drift: [5, -6], rotate: [-12, 12], opacity: 0.07 },
  { content: "#", x: "78%", y: "85%", size: "text-4xl", delay: 2.5, duration: 5.5, drift: [-4, 4], rotate: [8, -8], opacity: 0.07 },
];

/* ─── animated ticker tape numbers ─── */
const tickerNumbers = [
  "23,847.50", "₹1,42,500", "€9,120.00", "£5,680", "¥82,400",
  "A$12,350", "C$7,890", "S$4,560", "$156,230", "ROI +24%",
  "EBITDA", "Net 30", "Q4 2026", "YoY +18%", "Rev $2.1M",
];

function FloatingCurrency({
  item,
}: {
  item: (typeof floatingItems)[0];
}) {
  return (
    <motion.span
      className={`absolute font-heading font-bold text-white select-none pointer-events-none ${item.size}`}
      style={{ left: item.x, top: item.y, opacity: 0 }}
      animate={{
        y: [item.drift[0], item.drift[1], item.drift[0]],
        x: [item.drift[1] / 2, item.drift[0] / 2, item.drift[1] / 2],
        opacity: [item.opacity * 0.6, item.opacity, item.opacity * 0.6],
        rotate: item.rotate
          ? [item.rotate[0], item.rotate[1], item.rotate[0]]
          : [0, 0, 0],
      }}
      transition={{
        duration: item.duration,
        repeat: Infinity,
        delay: item.delay,
        ease: "easeInOut",
      }}
    >
      {item.content}
    </motion.span>
  );
}

export function SubscribeInsights() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-primary to-brand shadow-2xl shadow-primary/20">
            {/* ── ambient glow blobs ── */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-brand/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />

            {/* ── floating currency & number symbols ── */}
            {floatingItems.map((item, i) => (
              <FloatingCurrency key={i} item={item} />
            ))}

            {/* ── animated calculator icon ── */}
            <motion.div
              className="absolute top-10 left-[8%] text-white/[0.07] hidden md:block"
              animate={{
                y: [-6, 6, -6],
                rotate: [-5, 5, -5],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Calculator className="size-20" strokeWidth={1} />
            </motion.div>

            {/* ── mini bar chart ── */}
            <motion.div
              className="absolute bottom-12 right-[8%] hidden md:flex items-end gap-1 text-white/[0.08]"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            >
              {[20, 32, 24, 40, 28, 44, 36].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-2 rounded-t-sm bg-white/[0.12]"
                  style={{ height: h }}
                  animate={{ height: [h, h * 1.3, h] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* ── pie chart ring ── */}
            <motion.div
              className="absolute top-14 right-[12%] hidden lg:block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" className="text-white/[0.06]">
                <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20 30 35" />
                <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 15 10 30" />
              </svg>
            </motion.div>

            {/* ── grid dot pattern ── */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* ── scrolling ticker tape (top) ── */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden h-8 flex items-center opacity-[0.06]">
              <motion.div
                className="flex gap-8 whitespace-nowrap font-mono text-xs text-white"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[...tickerNumbers, ...tickerNumbers].map((num, i) => (
                  <span key={i} className="shrink-0">
                    {num}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── scrolling ticker tape (bottom, reverse) ── */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8 flex items-center opacity-[0.06]">
              <motion.div
                className="flex gap-8 whitespace-nowrap font-mono text-xs text-white"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...tickerNumbers, ...tickerNumbers].map((num, i) => (
                  <span key={i} className="shrink-0">
                    {num}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── main content ── */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-22 text-center">
              {/* badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-7 border border-white/10"
              >
                <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
                  Newsletter
                </span>
              </motion.div>

              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">
                Clarity delivered to your mailbox.
              </h2>
              <p className="text-white/55 mb-9 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                Practical insights on accounting, tax, and business advisory
                — straight from our team.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full h-12 px-5 bg-white/15 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-white/30 focus-visible:border-white/30 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  className="rounded-full h-12 px-7 bg-white text-brand-dark hover:bg-white/90 font-semibold shrink-0 shadow-lg shadow-black/10"
                >
                  Subscribe
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </form>

              <p className="text-white/50 text-xs mt-6">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
