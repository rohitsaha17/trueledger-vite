import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Tag, KeyRound, Building2, AlertTriangle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionDivider } from "@/components/shared/section-divider";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "policy-scope", title: "Policy Scope", icon: BookOpen },
  { id: "information-classification", title: "Information Classification", icon: Tag },
  { id: "access-management", title: "Access Management", icon: KeyRound },
  { id: "physical-security", title: "Physical Security", icon: Building2 },
  { id: "incident-reporting", title: "Incident Reporting", icon: AlertTriangle },
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

export default function InformationSecurityPolicyPage() {
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

        <motion.div
          className="absolute top-12 right-[8%] pointer-events-none select-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen className="size-48 text-brand/[0.05]" />
        </motion.div>

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
                Information Security Policy
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Our commitment to protecting information assets and maintaining
                confidentiality.
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
              {/* Section 1: Policy Scope */}
              <AnimatedSection delay={0.1}>
                <div id="policy-scope" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">01.</span>
                    <BookOpen className="size-5 text-brand/60" />
                    Policy Scope
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    This Information Security Policy applies to all employees,
                    contractors, and partners of TrueLedger Consulting LLP. It governs
                    the handling, storage, transmission, and disposal of all information
                    assets within the organisation.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    The policy covers all information systems, networks, applications,
                    and data&mdash;whether digital or physical&mdash;that are owned,
                    operated, or managed by TrueLedger Consulting.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 2: Information Classification */}
              <AnimatedSection delay={0.15}>
                <div id="information-classification" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">02.</span>
                    <Tag className="size-5 text-brand/60" />
                    Information Classification
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    All information handled by TrueLedger is classified into three
                    categories: Confidential, Internal, and Public. Each classification
                    level has specific handling, storage, and sharing procedures that
                    must be followed by all personnel.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Confidential information includes client data, financial records,
                    and proprietary business information. Internal information is
                    restricted to TrueLedger personnel. Public information is approved
                    for external distribution.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 3: Access Management */}
              <AnimatedSection delay={0.2}>
                <div id="access-management" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">03.</span>
                    <KeyRound className="size-5 text-brand/60" />
                    Access Management
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Every individual is assigned a unique identifier for system access.
                    Multi-factor authentication is mandatory across all systems.
                    Access rights are reviewed regularly, and accounts are automatically
                    deprovisioned upon termination or role change.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Privileged access is strictly controlled and granted only to
                    authorised personnel based on documented business need. All
                    privileged actions are logged and subject to periodic audit.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 4: Physical Security */}
              <AnimatedSection delay={0.25}>
                <div id="physical-security" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">04.</span>
                    <Building2 className="size-5 text-brand/60" />
                    Physical Security
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Our facilities are monitored by CCTV surveillance 24 hours a day,
                    7 days a week. All access points are controlled with electronic
                    access systems, and entry is restricted to authorised personnel
                    only.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    The use of external storage devices is prohibited within our
                    premises. Printers are not permitted in operational areas. Visitor
                    access is managed through a secure sign-in process with escort
                    requirements.
                  </p>
                </div>
              </AnimatedSection>

              <SectionDivider variant="dots" />

              {/* Section 5: Incident Reporting */}
              <AnimatedSection delay={0.3}>
                <div id="incident-reporting" className="border-l-2 border-brand/10 pl-6 scroll-mt-24">
                  <h2 className="font-heading font-bold text-2xl text-ink mt-10 mb-4 flex items-center gap-2">
                    <span className="text-brand/30 font-heading text-sm font-bold mr-2">05.</span>
                    <AlertTriangle className="size-5 text-brand/60" />
                    Incident Reporting
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    All personnel are required to report any suspected or confirmed
                    security incidents immediately. Incidents must be escalated to the
                    security team within 4 hours of discovery.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Every incident undergoes a thorough root cause analysis, and
                    corrective actions are documented and tracked to completion.
                    Lessons learned are shared across the organisation to continuously
                    strengthen our security posture.
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
