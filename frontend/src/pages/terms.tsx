import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, FileCheck, Briefcase, AlertTriangle, Scale, RefreshCw } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionDivider } from "@/components/shared/section-divider";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms", icon: FileCheck },
  { id: "services", title: "Services", icon: Briefcase },
  { id: "limitation-of-liability", title: "Limitation of Liability", icon: AlertTriangle },
  { id: "governing-law", title: "Governing Law", icon: Scale },
  { id: "changes-to-terms", title: "Changes to Terms", icon: RefreshCw },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-0.5 bg-gradient-to-r from-brand to-coral"
      style={{ width: `${progress}%` }}
    />
  );
}

export default function TermsPage() {
  return (
    <>
      <ScrollProgress />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-background to-background">
        <div className="absolute top-16 -left-20 font-heading text-[14rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
          &rsaquo;
        </div>
        <div className="absolute bottom-10 right-0 font-heading text-[10rem] font-bold text-brand/[0.03] select-none pointer-events-none leading-none">
          &rsaquo;
        </div>
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-brand/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-12 right-[8%] pointer-events-none select-none">
          <Scale className="size-48 text-brand/[0.05]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 gap-1.5">
                <ChevronRight className="size-3" />
                Legal
              </Badge>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-8 text-ink">
                Terms and Conditions
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                The terms governing your use of our website and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* Sticky Sidebar TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm py-2 px-3 rounded-lg text-muted-foreground hover:text-ink hover:bg-brand-tint/50 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div>
              <AnimatedSection>
                <span className="inline-flex items-center rounded-full bg-brand-tint px-3 py-1 text-xs font-medium text-brand-dark mb-8">
                  Last updated: May 2025
                </span>
              </AnimatedSection>

              {/* Section 1: Acceptance of Terms */}
              <AnimatedSection delay={0.1}>
                <div id="acceptance-of-terms" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">01.</span>
                    <FileCheck className="size-5 text-brand/60" />
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    By accessing and using this website, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms and
                    Conditions. These terms apply to all visitors, users, and clients of
                    TrueLedger Consulting LLP.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    If you do not agree with any part of these terms, you should
                    discontinue use of our website and services immediately.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 2: Services */}
              <AnimatedSection delay={0.15}>
                <div id="services" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">02.</span>
                    <Briefcase className="size-5 text-brand/60" />
                    Services
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    TrueLedger Consulting LLP provides outsourced accounting,
                    bookkeeping, tax compliance, business advisory, and CPA firm support
                    services. The specific scope, deliverables, and timelines for each
                    engagement are defined in individual service agreements between
                    TrueLedger and the client.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Clients are responsible for the accuracy and completeness of the
                    data, documents, and information they provide to TrueLedger.
                    Incomplete or inaccurate information may impact the quality and
                    timeliness of the services delivered.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 3: Limitation of Liability */}
              <AnimatedSection delay={0.2}>
                <div id="limitation-of-liability" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">03.</span>
                    <AlertTriangle className="size-5 text-brand/60" />
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    To the fullest extent permitted by applicable law, TrueLedger
                    Consulting LLP shall not be liable for any indirect, incidental,
                    special, or consequential damages arising out of or in connection
                    with the use of our website or services.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Our total liability for any claims related to our services shall not
                    exceed the total fees paid by the client for the specific engagement
                    giving rise to the claim. Information provided on this website is
                    intended for general informational purposes only and does not
                    constitute professional advice.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 4: Governing Law */}
              <AnimatedSection delay={0.25}>
                <div id="governing-law" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">04.</span>
                    <Scale className="size-5 text-brand/60" />
                    Governing Law
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of India. Any disputes arising from or
                    related to these terms shall be subject to the exclusive jurisdiction
                    of the courts in Bengaluru, India.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Individual service agreements may specify different governing law
                    and jurisdiction provisions where applicable.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 5: Changes to Terms */}
              <AnimatedSection delay={0.3}>
                <div id="changes-to-terms" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">05.</span>
                    <RefreshCw className="size-5 text-brand/60" />
                    Changes to Terms
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    TrueLedger Consulting LLP reserves the right to modify these Terms
                    and Conditions at any time. Changes will be communicated through
                    updates posted on this website. Your continued use of the website
                    after any such changes constitutes your acceptance of the revised
                    terms.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    For questions regarding these terms, please contact us at{" "}
                    <a
                      href="mailto:connect@trueledgerconsulting.com"
                      className="text-brand hover:underline"
                    >
                      connect@trueledgerconsulting.com
                    </a>
                    .
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
