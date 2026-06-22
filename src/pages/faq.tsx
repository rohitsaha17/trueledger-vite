import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ConsultationModal } from "@/components/shared/consultation-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ================================================================== */
/*  FAQ data with categories                                           */
/* ================================================================== */

type Category = "All" | "Getting Started" | "Security" | "Services";

const categories: Category[] = ["All", "Getting Started", "Security", "Services"];

const faqs: { question: string; answer: string; category: Category }[] = [
  {
    question: "How does outsourced accounting work with TrueLedger?",
    answer:
      "We assign a dedicated team of qualified accountants and tax professionals to your business. They work within your existing software stack — QuickBooks, Xero, NetSuite, or whatever you use — and operate as an extension of your internal team. You get a single point of contact, regular reporting, and full visibility into the work being done.",
    category: "Getting Started",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We follow ISO 27001:2022 standards, are SOC 2 aligned, GDPR compliant, and HIPAA ready. All data is encrypted in transit and at rest using AES-256 and TLS 1.2+. Access is role-based with mandatory MFA, and every client's data lives in a segregated environment.",
    category: "Security",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with established mid-size businesses, high-growth startups, e-commerce and retail brands, restaurants and supermarket chains, and CPA firms. Our experience spans construction, real estate, medical, professional services, IT, AI, SaaS, and more.",
    category: "Services",
  },
  {
    question: "Which countries and jurisdictions do you cover?",
    answer:
      "We currently support businesses across the United States, Canada, Australia, Singapore, the United Kingdom, and India — covering tax compliance, entity setup, and bookkeeping in each jurisdiction.",
    category: "Services",
  },
  {
    question: "Can you work with my existing accounting software?",
    answer:
      "Yes. Our team is certified across 12+ platforms including QuickBooks Online, QuickBooks Desktop, Xero, NetSuite, Sage, FreshBooks, and more. We adapt to your stack, not the other way around.",
    category: "Getting Started",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most engagements begin within one to two weeks of the discovery call. After an initial assessment and onboarding process, your dedicated team is ready to take over day-to-day operations.",
    category: "Getting Started",
  },
  {
    question:
      "What's the difference between TrueLedger and a traditional accounting firm?",
    answer:
      "Traditional firms often assign junior staff and charge by the hour. We assign senior professionals, operate on predictable monthly pricing, and integrate directly into your workflows. You get the depth of a Big 4 team at a fraction of the cost.",
    category: "Services",
  },
  {
    question: "Do you offer support during tax season for CPA firms?",
    answer:
      "Yes — our CPA Firm Support service provides dedicated offshore teams that extend your capacity through busy season and beyond. We handle tax preparation, bookkeeping overflow, and compliance work under your supervision.",
    category: "Services",
  },
];

/* ================================================================== */
/*  Main Page Component                                                 */
/* ================================================================== */

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-background to-background">
        {/* Large decorative question mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[20rem] font-bold text-brand/[0.04] select-none pointer-events-none leading-none">
          ?
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-brand/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 gap-1.5">
                <ChevronRight className="size-3" />
                FAQ
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-8 text-ink">
                Questions We Hear{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-coral">
                  Most
                </span>{" "}
                Often
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-10">
                Straightforward answers to the questions businesses ask before
                partnering with an outsourced accounting team.
              </p>

              <ConsultationModal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — ACCORDION                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Everything You Need to Know"
              description="If your question isn&rsquo;t answered here, we&rsquo;re always happy to talk it through on a quick call."
            />
          </AnimatedSection>

          {/* Category filter pills */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-brand-dark text-white shadow-sm"
                      : "bg-brand-tint text-muted-foreground hover:bg-brand-soft"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {filteredFaqs.map((faq, i) => {
                  const num = String(i + 1).padStart(2, "0");
                  return (
                    <AccordionItem
                      key={faq.question}
                      value={faq.question}
                      className="border-b-0 mb-3 border-l-3 border-brand/20 data-[state=open]:border-brand rounded-lg bg-white shadow-sm transition-colors duration-200"
                    >
                      <AccordionTrigger className="font-heading font-semibold text-base text-ink px-5 py-4 hover:no-underline">
                        <div className="flex items-center gap-4">
                          <span className="font-heading text-3xl font-bold text-brand/15 select-none leading-none shrink-0">
                            {num}
                          </span>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4">
                        <div className="bg-brand-tint/30 rounded-lg p-4 mt-2 text-muted-foreground text-sm leading-relaxed ml-[3.5rem]">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — CLOSING CTA                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3DODoDlhnsFSxTWjEmFMsGCcrYu/hf_20260622_160952_6e56e9ac-87fc-4170-9fca-9a970f9990e7_min.webp" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#140e2a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e2a] via-transparent to-[#140e2a]/70" />
        <div className="absolute top-0 left-1/3 w-96 h-64 bg-[#4D397F]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-72 h-48 bg-[#EE672C]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/[0.10] p-10 md:p-14 text-center max-w-3xl mx-auto">
              <p className="text-[#EE672C] text-xs font-semibold uppercase tracking-widest mb-4">
                Need more clarity?
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Still Have Questions? Let&rsquo;s Talk.
              </h2>
              <p className="text-white/45 text-sm sm:text-base max-w-lg mx-auto mb-10">
                Book a free 30-minute discovery call and get clear, honest answers
                from our team &mdash; no commitment, no pressure.
              </p>
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
