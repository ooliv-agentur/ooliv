import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingpageOptimierungFAQ = () => {
  const faqs = [
    {
      question: "Was kostet die Analyse?",
      answer: "Die Analyse und das Konzept sind kostenlos. Erst die Umsetzung wird separat kalkuliert."
    },
    {
      question: "Wie schnell erhalte ich Ergebnisse?",
      answer: "Ihr Konzept wird innerhalb von 48 Stunden erstellt."
    },
    {
      question: "Für welche Branchen funktioniert das?",
      answer: "Für alle – von B2B bis E-Commerce. Wir passen das Konzept an Ihre Zielgruppe an."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen zur Landingpage-Optimierung.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungFAQ;
