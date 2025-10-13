import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebsiteRelaunchFAQ = () => {
  const faqs = [
    {
      question: "Was kostet ein Website-Relaunch?",
      answer: "Das Erstkonzept ist kostenlos. Danach erhalten Sie ein individuelles Angebot, abhängig von Umfang und Funktionen."
    },
    {
      question: "Wie lange dauert ein Relaunch?",
      answer: "In der Regel zwischen 6 und 10 Wochen – von der Konzeptphase bis zum Go-Live."
    },
    {
      question: "Kann ich Teile meiner alten Website übernehmen?",
      answer: "Ja. Bestehende Inhalte oder Strukturen können übernommen und technisch modernisiert werden."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen zum Website-Relaunch.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchFAQ;
