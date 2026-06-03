import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Eye, Users, Lock, Shield, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionDivider } from "@/components/shared/section-divider";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "information-we-collect", title: "Information We Collect", icon: Eye },
  { id: "how-we-use-your-information", title: "How We Use Your Information", icon: Users },
  { id: "data-security", title: "Data Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: Shield },
  { id: "contact-us", title: "Contact Us", icon: Mail },
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

export default function PrivacyPolicyPage() {
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
          <Lock className="size-48 text-brand/[0.05]" />
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
                Privacy Policy
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                How we collect, use, and protect your personal information.
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

              {/* Section 1: Information We Collect */}
              <AnimatedSection delay={0.1}>
                <div id="information-we-collect" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">01.</span>
                    <Eye className="size-5 text-brand/60" />
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    When you interact with TrueLedger Consulting through our website,
                    contact forms, or service engagements, we may collect personal
                    information that you voluntarily provide. This includes your name,
                    email address, phone number, and company name.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We also automatically collect certain technical information when you
                    visit our website, including your IP address, browser type and
                    version, pages visited, time spent on each page, and referring URLs.
                    This data helps us improve the performance and usability of our
                    website.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 2: How We Use Your Information */}
              <AnimatedSection delay={0.15}>
                <div id="how-we-use-your-information" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">02.</span>
                    <Users className="size-5 text-brand/60" />
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We use the information we collect to respond to your enquiries,
                    deliver and improve our services, and communicate with you about
                    relevant updates. We may also use aggregated, anonymised data for
                    internal analytics and reporting purposes.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    TrueLedger Consulting does not sell, rent, or trade your personal
                    information to third parties. We only share data with trusted service
                    providers who assist us in operating our website and delivering our
                    services, and who are contractually bound to keep your information
                    confidential.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 3: Data Security */}
              <AnimatedSection delay={0.2}>
                <div id="data-security" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">03.</span>
                    <Lock className="size-5 text-brand/60" />
                    Data Security
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We take the security of your data seriously. All data transmitted to
                    and from our systems is encrypted using TLS 1.2 or higher. Data at
                    rest is protected with AES-256 encryption. Access to sensitive
                    information is governed by multi-factor authentication (MFA) and
                    role-based access controls.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Our security practices are aligned with ISO 27001:2022 and SOC 2
                    frameworks. We conduct regular security audits and vulnerability
                    assessments to ensure the ongoing protection of your data.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 4: Your Rights */}
              <AnimatedSection delay={0.25}>
                <div id="your-rights" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">04.</span>
                    <Shield className="size-5 text-brand/60" />
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    You have the right to access, correct, or delete the personal data we
                    hold about you. To exercise any of these rights, please contact us
                    using the details provided below. We will respond to your request
                    within 30 days.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    If you are located in the European Economic Area (EEA), you may also
                    have additional rights under the General Data Protection Regulation
                    (GDPR), including the right to data portability and the right to
                    lodge a complaint with a supervisory authority.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 5: Contact Us */}
              <AnimatedSection delay={0.3}>
                <div id="contact-us" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">05.</span>
                    <Mail className="size-5 text-brand/60" />
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or how we handle
                    your personal data, please contact us at{" "}
                    <a
                      href="mailto:connect@trueledgerconsulting.com"
                      className="text-brand hover:underline"
                    >
                      connect@trueledgerconsulting.com
                    </a>
                    .
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Registered Office: TrueLedger Consulting LLP, Bengaluru, India.
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
