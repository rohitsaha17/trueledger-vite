import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

export function ServiceFAQ({
  faqs,
  title = "Frequently Asked Questions",
  description,
}: ServiceFAQProps) {
  return (
    <section className="py-20 md:py-28 bg-brand-tint/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title={title} description={description} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => {
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
                        <span className="text-left">{faq.question}</span>
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
  );
}
