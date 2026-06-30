import { Hero } from "@/components/home/hero";
import { TrustedClients } from "@/components/home/trusted-clients";
import { ServicesBrief } from "@/components/home/services-brief";
import { Approach } from "@/components/home/approach";
import { Methodology } from "@/components/home/methodology";
import { SoftwareExpertise } from "@/components/home/software-expertise";
import { Testimonials } from "@/components/home/testimonials";
import { SubscribeInsights } from "@/components/home/subscribe-insights";
import { ClosingCta } from "@/components/home/closing-cta";
import { GlobalPresence } from "@/components/home/global-presence";
import { SectionDivider } from "@/components/shared/section-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider variant="gradient" />
      <TrustedClients />
      <ServicesBrief />
      <SectionDivider variant="gradient" />
      <Approach />
      <Methodology />
      <SoftwareExpertise />
      <SectionDivider variant="gradient" />
      <Testimonials />
      <SubscribeInsights />
      <ClosingCta />
      <GlobalPresence />
    </>
  );
}
