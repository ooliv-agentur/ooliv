import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KostenlosesKonzeptFAQ = () => {
  const faqs = [
    {
      question: "Ist das Konzept wirklich kostenlos?",
      answer: "Ja. Sie erhalten eine individuelle Analyse ohne Verpflichtung."
    },
    {
      question: "Wie schnell erhalte ich mein Konzept?",
      answer: "In der Regel innerhalb von 48 Stunden nach Ihrer Anfrage."
    },
    {
      question: "Was beinhaltet das Konzept genau?",
      answer: "Eine Struktur- und Inhaltsanalyse, Empfehlungen zur Conversion-Optimierung sowie visuelle und technische Verbesserungsvorschläge."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen zum Website-Konzept
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

export default KostenlosesKonzeptFAQ;
