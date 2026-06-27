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

type Category =
  | "All"
  | "Global Entity Setup"
  | "Accounting & Bookkeeping"
  | "Tax Compliance & Advisory"
  | "Support to CPAs"
  | "Business Advisory";

const categories: Category[] = [
  "All",
  "Global Entity Setup",
  "Accounting & Bookkeeping",
  "Tax Compliance & Advisory",
  "Support to CPAs",
  "Business Advisory",
];

const faqs: { question: string; answer: string; category: Category }[] = [
  /* ── Global Entity Setup ─────────────────────────────────────────── */
  {
    question: "Which countries do you help set up entities in?",
    answer:
      "We advise on and coordinate entity formation across the US, Canada, India, Australia, and Singapore. That covers entity type selection, registered or local agent requirements, tax ID registrations (EIN, ABN, GST/BAS numbers, and equivalents), and the year-one compliance calendar.",
    category: "Global Entity Setup",
  },
  {
    question: "Which legal structure should I choose for my entity?",
    answer:
      "The decision framework is the same everywhere, even though the legal labels differ — an LLC or C-corp in the US, a Private Limited Company in India, a Pty Ltd in Australia, a Pte Ltd in Singapore, or a Corporation in Canada. The real question is: are you raising institutional capital, do you want pass-through tax treatment or are you comfortable with corporate-level tax, and what’s your appetite for compliance overhead versus flexibility? If you have non-resident founders or investors, the structure also affects withholding obligations and how income flows back to them. We walk you through the trade-offs for your specific country and ownership mix before you incorporate, not after.",
    category: "Global Entity Setup",
  },
  {
    question:
      "What ongoing compliance do I need to worry about after formation?",
    answer:
      "More than most founders expect, and the specifics vary by country. Across the jurisdictions we serve, this typically includes annual return filings, registered or local agent renewals, statutory or franchise-type taxes, beneficial ownership disclosure, payroll compliances, and submission of financials. We flag all of this at formation and carry it into an ongoing compliance calendar specific to your structure, so you’re never surprised by a deadline you didn’t know existed.",
    category: "Global Entity Setup",
  },
  {
    question:
      "Do you handle multi-country structures — for example, a holding company with subsidiaries in two other countries?",
    answer:
      "Yes. Multi-jurisdiction group structures are where we add the most value relative to a single-country accountant or a local firm. We coordinate across all layers — holding company setup, intercompany agreements, transfer pricing policy, and consolidated reporting — with the cross-border tax implications fully accounted for from day one.",
    category: "Global Entity Setup",
  },
  {
    question: "How long does formation actually take?",
    answer:
      "The filing itself is usually the fast part wherever you’re incorporating — some jurisdictions process in days, others take a few weeks. We sequence the slow steps to start early rather than letting them become the bottleneck at the end, regardless of which country you’re setting up in.",
    category: "Global Entity Setup",
  },
  {
    question:
      "Can you help us open a business bank account as non-resident founders?",
    answer:
      "Opening the account itself has to happen with the bank, but the documentation package — formation documents, tax ID confirmation, ownership and beneficial owner certifications — is exactly what banks ask for everywhere, and exactly where non-resident founders get stuck. We prepare that package and coordinate with banking partners experienced in working with foreign founders, so you’re walking in fully prepared rather than starting from scratch.",
    category: "Global Entity Setup",
  },
  {
    question:
      "We already have an entity, but I’m not sure it was set up correctly — can you help?",
    answer:
      "This comes up often, in every country we work in. We review existing structures for issues like the wrong entity type for your funding plans, missing or lapsed registrations, an unfiled beneficial ownership disclosure, or a cross-border structure that’s creating avoidable withholding exposure — then remediate what needs fixing before it becomes a bigger problem at tax time or during diligence.",
    category: "Global Entity Setup",
  },

  /* ── Managed Accounting & Bookkeeping ────────────────────────────── */
  {
    question:
      "I’m already using AI-native accounting software. Why do I need an accountant from TrueLedger?",
    answer:
      "AI-native tools are genuinely good at categorizing high-volume, clean, domestic transactions. What they don’t do is fully understand context. They don’t know that a wire from your overseas parent company is a capital contribution and not revenue. They don’t know that your intercompany loan needs an arm’s-length interest rate to avoid transfer pricing exposure. They don’t know that the “miscellaneous income” on your restaurant’s books is actually a POS tip pool that needs specific payroll treatment. Software automates the pattern. TrueLedger brings the judgment — built on years of international experience and real client complexity across jurisdictions. AI handles the volume. We handle everything it can’t categorize, and we review everything it thinks it can.",
    category: "Accounting & Bookkeeping",
  },
  {
    question: "Which accounting software do you work on?",
    answer:
      "We work on QuickBooks Online, Xero and other new-age AI-native tools like Digits, Campfire, Kicks, and Puzzle. We have relevant certifications for these platforms to deliver the best services. We adapt to your existing setup — we don’t ask you to migrate platforms to work with us. If you don’t have a platform yet, we’ll recommend the right one based on your size, industry, and the number of jurisdictions you operate in.",
    category: "Accounting & Bookkeeping",
  },
  {
    question:
      "How do you handle multi-currency books and cross-border transactions?",
    answer:
      "We run multi-currency books as standard — including realization and translation gains/losses, intercompany balances in functional currencies, and proper FX treatment at month-end close. Cross-border transactions (intercompany charges, capital contributions, loan repayments, royalties) are coded with the right economic substance in mind, not just the dollar amount.",
    category: "Accounting & Bookkeeping",
  },
  {
    question: "What does your month-end close process look like?",
    answer:
      "We run a structured close checklist every month — bank reconciliations, AP/AR aging review, prepaid and accrual entries, intercompany elimination entries, depreciation, and a final P&L sanity check before sign-off. You get clean, reviewable books by a fixed date each month. Not whenever someone gets around to it. We also use automated AI tools for anomaly detection and exceptions reporting.",
    category: "Accounting & Bookkeeping",
  },
  {
    question:
      "My books are currently a mess. Can you fix them before taking over ongoing work?",
    answer:
      "Yes — catch-up and cleanup is something we do regularly, whether you’re behind by three months or three years. We’ll scope the cleanup as a fixed-fee engagement, get you current, and then transition into the ongoing monthly work. Starting with clean books is non-negotiable; it’s the only way the ongoing work actually means something.",
    category: "Accounting & Bookkeeping",
  },
  {
    question:
      "Do you manage accounts payable and receivable, or just bookkeeping and reconciliations?",
    answer:
      "Both, depending on what you need. For clients with real transaction volume, we take over the full AP cycle (bill processing, vendor payments, approval workflows) and AR cycle (invoicing, collections, payment application).",
    category: "Accounting & Bookkeeping",
  },
  {
    question: "Can you run our payroll as part of this engagement?",
    answer:
      "Yes. We process payroll on the platforms relevant to your country and run it alongside the bookkeeping, so payroll, accounting, and tax compliance stay reconciled with each other.",
    category: "Accounting & Bookkeeping",
  },

  /* ── Tax Compliance & Advisory ───────────────────────────────────── */
  {
    question: "What tax returns and filings does TrueLedger handle?",
    answer:
      "We prepare and file individual and business tax returns across the US, India, Canada, Australia, and Singapore — covering resident, non-resident, and dual-status filings, foreign asset and income disclosures, and the cross-border reporting each jurisdiction requires. We prepare returns on professional software accepted by each country’s tax authorities.",
    category: "Tax Compliance & Advisory",
  },
  {
    question:
      "Do you handle cross-border tax planning between the countries you serve?",
    answer:
      "This is our core. Our two most active corridors are US–India and US–Canada — treaty rate claims under the relevant double tax avoidance agreement, compliance for non-resident real estate transactions, foreign investment fund reporting, and retirement account treaty elections. But the same approach applies to any pairing across the five jurisdictions we serve. Most CPA firms refer this kind of work to us. We do it in-house.",
    category: "Tax Compliance & Advisory",
  },
  {
    question:
      "How do you stay current on tax law changes across the countries you serve?",
    answer:
      "Cross-border tax law shifts constantly, and rarely in just one country at a time. We track legislative and regulatory changes across the US, India, Canada, Australia, and Singapore on an ongoing basis — for example, the OBBBA 2025 changes in the US (bonus depreciation restoration, QSBS expansion, the Section 163(j) restoration), ATO Budget changes in Australia — and build them into client tax strategy as they happen, not just at filing time. The goal is the same in every jurisdiction: you shouldn’t be the one telling us the law changed.",
    category: "Tax Compliance & Advisory",
  },
  {
    question: "Do you do tax planning, or just preparation?",
    answer:
      "Both — and preparation without planning is just compliance. We build a tax strategy throughout the year: entity structure optimization, income and deduction timing, retirement account contributions, estimated tax calibration, and cross-border structuring. The return at year-end reflects decisions made during the year.",
    category: "Tax Compliance & Advisory",
  },
  {
    question:
      "Do you handle GST, VAT, and indirect tax across the countries you serve?",
    answer:
      "We handle indirect tax compliance across all the jurisdictions we serve — Sales and Use Tax in the USA, GST/BAS in Australia, GST/HST/PST in Canada, GST in Singapore, and sales tax nexus analysis across US states. For cross-border digital services and e-commerce businesses, indirect tax is often the first compliance gap that catches founders off guard. We map it out at entity setup and keep it current as you scale.",
    category: "Tax Compliance & Advisory",
  },
  {
    question:
      "I’m going through a fundraise, acquisition, or liquidity event — can you advise on the personal tax side?",
    answer:
      "Yes, and this is genuinely specialized work wherever you’re based. We’ve advised founders through SPAC and acquisition transactions on earnout taxability, equity exclusion programs like QSBS in the US, valuation and vesting issues, and RSU taxability — including working directly alongside acquirers’ legal counsel during deal negotiations. The same judgment applies to equity event taxation outside the US — exercise timing for India-based ESOPs, or employee share scheme rules in Australia — wherever the liquidity event happens to be.",
    category: "Tax Compliance & Advisory",
  },

  /* ── Support to CPAs ─────────────────────────────────────────────── */
  {
    question:
      "What does TrueLedger actually do for accounting and tax firms?",
    answer:
      "We function as your firm’s offshore back-office — handling bookkeeping, tax return preparation, payroll processing, and financial statement work under your firm’s brand, across whichever jurisdictions your clients are in. Your clients interact with you; we handle the production. We work on the software your firm already runs — Drake, Lacerte, QuickBooks, Xero, and the equivalents used in your market — so there’s no workflow disruption on your end.",
    category: "Support to CPAs",
  },
  {
    question:
      "What makes TrueLedger different from other outsourcing providers?",
    answer:
      "Most offshore providers offer low-cost data entry. We offer senior-level review capacity. Both founding partners have Big 4 backgrounds in international and cross-border tax — one with international secondment experience, one with global offshore practice leadership. We understand the complexity of the work you send us, not just the mechanics of producing it. We also specialize in cross-border matters that most outsourcing providers can’t handle confidently — non-resident filings, foreign investment fund reporting, controlled foreign corporation reporting, and treaty elections.",
    category: "Support to CPAs",
  },
  {
    question:
      "Can you handle cross-border returns or filings that our firm doesn’t have in-house expertise for?",
    answer:
      "That’s one of our most common use cases, in both directions. A US firm with NRI or non-resident clients has referred us PFIC income, treaty claims, foreign asset disclosures, or foreign corporation reporting it doesn’t have the in-house depth to handle confidently. Similarly a Canadian firm might require support on a US-facing trust structure. We prepare the work; you review and sign. Your client relationship stays with you.",
    category: "Support to CPAs",
  },
  {
    question: "How do you handle data security and client confidentiality?",
    answer:
      "We operate under strict data security protocols — NDAs with every engagement, role-based access controls, encrypted file transfer, and no third-party data sharing. We structure our processes to meet the confidentiality standards relevant to your jurisdiction, including alignment with IRS Publication 7216 guidance for US tax return information. We’re happy to share our security and compliance documentation during onboarding.",
    category: "Support to CPAs",
  },
  {
    question: "What’s the typical onboarding process for a firm?",
    answer:
      "We start with a scoping call to understand your firm’s workflow, software stack, volume, and the types of returns or bookkeeping work you want to offload. From there we run a pilot engagement — typically two to five returns or one month of bookkeeping — before moving to a standing arrangement. Most firms are fully onboarded within two to three weeks. We match your review process, not the other way around.",
    category: "Support to CPAs",
  },
  {
    question:
      "Can you support us just during peak filing season, or is this a year-round arrangement?",
    answer:
      "Both work, and many firms start with one and grow into the other. Filing season timing depends on which country you’re serving. A common pattern is engaging us for return-prep overflow during that window, then expanding into bookkeeping or payroll support the rest of the year once the workflow fit is proven.",
    category: "Support to CPAs",
  },
  {
    question: "How is pricing structured for outsourced support?",
    answer:
      "Pricing is scoped to the engagement — return complexity and volume, or bookkeeping scope and transaction volume — rather than a flat per-firm rate. We size it against your actual caseload during the scoping call so the arrangement makes economic sense for both sides before any work begins.",
    category: "Support to CPAs",
  },

  /* ── Business Advisory ───────────────────────────────────────────── */
  {
    question: "What does Business Advisory cover at TrueLedger?",
    answer:
      "It’s the layer above compliance — using your financial data to make better business decisions. Depending on what you need, that could mean cash flow modeling and runway analysis, unit economics and margin analysis by product or location, investor-ready financial reporting, board deck support, pricing strategy, cost structure optimization, or pre-raise financial due diligence prep. The common thread is senior-level financial judgment applied to your specific situation, not generic advice.",
    category: "Business Advisory",
  },
  {
    question:
      "Can you help us prepare for a fundraise or investor due diligence?",
    answer:
      "Yes. We’ve supported businesses through investor data room preparation — clean financial statements, cap table modeling, unit economics analysis, and financial projections with documented assumptions. We know what investors and acquirers scrutinize, and we make sure your financials hold up when they do.",
    category: "Business Advisory",
  },
  {
    question:
      "Can you help us automate financial reporting across multiple systems?",
    answer:
      "Yes. Where a business is pulling data from several disconnected sources by hand, we design and implement automation that consolidates everything into a single reporting view — giving leadership one reliable source of truth instead of a monthly scramble to reconcile spreadsheets.",
    category: "Business Advisory",
  },
  {
    question:
      "Is Business Advisory a one-time project or an ongoing relationship?",
    answer:
      "Both models exist depending on the need. Governance builds and automation projects typically have a defined scope and timeline; many clients then move into an ongoing advisory retainer to keep the framework current and to support recurring decisions like budgeting, pricing, or the next fundraise.",
    category: "Business Advisory",
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
