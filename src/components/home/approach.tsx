import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const cards = [
  {
    title: "Deep Expertise, Personal Commitment",
    description:
      "We bring years of experience across global markets and complex business structures — applied personally to every client we work with. You get senior-level thinking, not junior execution.",
    gradient: "from-brand/20 via-brand-soft to-brand-tint",
    iconBg: "bg-brand/15",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 12l4-4m0 0l4 4m-4-4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    visual: (
      <div className="absolute -top-6 -right-6 size-28 rounded-2xl bg-gradient-to-br from-brand/30 to-brand-dark/20 rotate-12 flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
        <div className="size-16 rounded-xl bg-white/90 backdrop-blur-sm shadow-inner flex items-center justify-center -rotate-12 group-hover:-rotate-6">
          <svg viewBox="0 0 40 40" className="size-9 text-primary">
            <circle cx="20" cy="14" r="6" fill="currentColor" opacity="0.2" />
            <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M30 8l3-3m0 0l3 3m-3-3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: "Responsive and Reliable Communication",
    description:
      "No chasing, no waiting, no surprises. You'll always have a dedicated point of contact who knows your business inside out and stays ahead of what it needs next.",
    gradient: "from-primary/15 via-brand-soft to-brand-tint",
    iconBg: "bg-primary/10",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <rect x="4" y="10" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 36l4-6h20a4 4 0 004-4V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="20" r="2" fill="currentColor" />
        <circle cx="22" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    visual: (
      <div className="absolute -top-4 -right-4 flex flex-col gap-2">
        <motion.div
          className="px-4 py-2 bg-white rounded-2xl rounded-br-sm shadow-lg text-xs font-medium text-foreground border border-border/40"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Monthly close is done!
        </motion.div>
        <motion.div
          className="px-4 py-2 bg-brand/10 rounded-2xl rounded-tr-sm shadow-lg text-xs font-medium text-primary ml-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          Reports are ready
        </motion.div>
        <motion.div
          className="px-3 py-1.5 bg-white rounded-full shadow-md text-[10px] text-muted-foreground flex items-center gap-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className="size-1.5 rounded-full bg-green-500" />
          Online now
        </motion.div>
      </div>
    ),
  },
  {
    title: "Grows As Your Business Grows",
    description:
      "From startup to scale-up, from domestic to global — our advisory evolves with you. The more your business demands, the more we bring to the table.",
    gradient: "from-coral/15 via-brand-soft/40 to-brand-tint",
    iconBg: "bg-coral/10",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <path d="M8 36L18 22l8 8 14-18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 12h10v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    visual: (
      <div className="absolute -bottom-4 -right-6 group-hover:-bottom-2 group-hover:-right-4 transition-all duration-500">
        <div className="relative">
          <svg viewBox="0 0 120 80" className="w-32 drop-shadow-lg">
            <defs>
              <linearGradient id="chart-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4D397F" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#4D397F" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0 80 L0 60 Q20 55 30 45 T60 30 T90 15 T120 5 L120 80 Z" fill="url(#chart-grad)" />
            <path d="M0 60 Q20 55 30 45 T60 30 T90 15 T120 5" fill="none" stroke="#4D397F" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="absolute -top-2 right-0 size-5 rounded-full bg-primary shadow-md shadow-primary/30 border-2 border-white" />
        </div>
      </div>
    ),
  },
  {
    title: "Accurate Financials. Delivered On Time.",
    description:
      "Your financials are only valuable if they're right and ready when you need them. We operate on disciplined timelines and rigorous review standards.",
    gradient: "from-brand-dark/10 via-brand-soft to-brand-tint",
    iconBg: "bg-brand-dark/10",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="size-7">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 18h16M16 26h12M16 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 28l-6 6-3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    visual: (
      <div className="absolute -top-5 -right-5 group-hover:-top-7 group-hover:-right-3 transition-all duration-500">
        <motion.div
          className="size-20 rounded-2xl bg-white shadow-xl border border-border/30 flex flex-col items-center justify-center gap-1 rotate-6 group-hover:rotate-3"
          whileInView={{ rotate: [12, 6] }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-0.5">
            {[0.6, 0.8, 0.5, 1, 0.7].map((h, i) => (
              <motion.div
                key={i}
                className="w-2 bg-primary/60 rounded-full"
                style={{ height: `${h * 28}px` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
          <div className="flex items-center gap-0.5 mt-1">
            <svg viewBox="0 0 16 16" className="size-3 text-green-500">
              <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="text-[8px] font-semibold text-green-600">On Time</span>
          </div>
        </motion.div>
      </div>
    ),
  },
];

export function Approach() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Soft gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] bg-brand/[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/[0.03] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            title="The Advisor You Trust From Day One"
            description="Great businesses aren't built on luck — they're built on the right guidance at the right time."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.12}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="group relative h-full overflow-visible border-border/50 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  {/* Pop-out visual */}
                  {card.visual}

                  {/* Subtle gradient shine on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brand/[0.03] via-transparent to-primary/[0.02]" />

                  <CardContent className="p-7 pt-8 relative z-10">
                    {/* Icon */}
                    <div className={`size-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg mb-3 pr-12">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>

                  {/* Gradient accent at bottom */}
                  <div className={`h-1 w-full bg-gradient-to-r ${card.gradient} rounded-b-xl`} />
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
