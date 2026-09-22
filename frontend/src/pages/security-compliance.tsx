import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, ShieldCheck, Lock, KeyRound, Award, Siren, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionDivider } from "@/components/shared/section-divider";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "data-encryption", title: "Data Encryption", icon: Lock },
  { id: "access-controls", title: "Access Controls", icon: KeyRound },
  { id: "compliance-certifications", title: "Compliance Certifications", icon: Award },
  { id: "incident-response", title: "Incident Response", icon: Siren },
  { id: "contact", title: "Contact", icon: Mail },
];

const trustBadges = [
  { label: "ISO 27001:2022" },
  { label: "SOC 2 Aligned" },
  { label: "GDPR Compliant" },
  { label: "HIPAA Ready" },
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

export default function SecurityCompliancePage() {
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
          <Shield className="size-48 text-brand/[0.05]" />
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
                Security &amp; Compliance
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                How we protect your data and maintain regulatory compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="bg-white rounded-xl border border-black/[0.06] shadow-sm px-4 py-2.5 flex items-center gap-2"
                >
                  <ShieldCheck className="size-4 text-brand" />
                  <span className="text-sm font-medium text-ink">{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
              {/* Section 1: Data Encryption */}
              <AnimatedSection delay={0.1}>
                <div id="data-encryption" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">01.</span>
                    <Lock className="size-5 text-brand/60" />
                    Data Encryption
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    All data at rest is protected using AES-256 encryption, the same
                    standard trusted by governments and financial institutions worldwide.
                    Data in transit is secured using TLS 1.2 or higher, ensuring that
                    every communication between your systems and ours is fully encrypted.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    All backups are encrypted using the same rigorous standards, ensuring
                    your information remains protected throughout its entire lifecycle.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 2: Access Controls */}
              <AnimatedSection delay={0.15}>
                <div id="access-controls" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">02.</span>
                    <KeyRound className="size-5 text-brand/60" />
                    Access Controls
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We enforce role-based access controls (RBAC) across all our systems,
                    ensuring that personnel can only access the data and tools necessary
                    for their specific role. Multi-factor authentication (MFA) is
                    mandatory for all team members.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We operate on the principle of least privilege, granting the minimum
                    level of access required to perform a given task. Access rights are
                    reviewed on a regular basis and revoked immediately upon role change
                    or offboarding.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 3: Compliance Certifications */}
              <AnimatedSection delay={0.2}>
                <div id="compliance-certifications" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">03.</span>
                    <Award className="size-5 text-brand/60" />
                    Compliance Certifications
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    TrueLedger Consulting maintains alignment with leading international
                    security and compliance frameworks, including ISO 27001:2022 and SOC
                    2 Type II. Our processes are designed to meet the requirements of
                    GDPR for clients operating in the European Economic Area.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We are also HIPAA-ready, enabling us to support clients in
                    healthcare and other regulated industries with the same rigour and
                    confidence.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 4: Incident Response */}
              <AnimatedSection delay={0.25}>
                <div id="incident-response" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">04.</span>
                    <Siren className="size-5 text-brand/60" />
                    Incident Response
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    In the unlikely event of a security incident, our documented
                    response procedures ensure rapid containment and resolution. Affected
                    clients are notified within 24 hours of confirmed incidents.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    We conduct regular incident response drills and tabletop exercises to
                    keep our team prepared. Every incident is followed by a thorough
                    post-mortem and root cause analysis to prevent recurrence.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 5: Contact */}
              <AnimatedSection delay={0.3}>
                <div id="contact" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">05.</span>
                    <Mail className="size-5 text-brand/60" />
                    Contact
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    If you have any security concerns or would like to learn more about
                    our security practices, please reach out to us at{" "}
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
