import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can positions be filled?",
    a: "The timeline varies based on the role's complexity, but our extensive talent network allows us to present qualified candidates within 5-10 business days for most standard positions."
  },
  {
    q: "Which industries do you specialize in?",
    a: "We have dedicated practice groups for IT, Healthcare, Manufacturing, Retail, Finance, Education, and Startups, ensuring industry-specific expertise for your hiring needs."
  },
  {
    q: "Do you offer executive hiring?",
    a: "Yes, our Executive Search division handles confidential, high-level leadership placements (C-Suite, VP, Director levels) using a targeted headhunting approach."
  },
  {
    q: "Can startups partner with Quvora?",
    a: "Absolutely. We offer tailored hiring solutions for startups, from single key hires to rapid team scaling, adapting to your specific growth stage and budget."
  },
  {
    q: "Do you provide payroll services?",
    a: "Yes, we offer comprehensive Payroll Management services, ensuring accurate, timely, and compliant processing for your entire workforce."
  },
  {
    q: "What is your recruitment process?",
    a: "Our process includes 7 rigorous steps: Requirement Discussion, Research & Talent Mapping, Sourcing, Assessment, Client Interviews, Offer Management, and Onboarding support."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Frequently Asked Questions
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary hover:text-accent transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
