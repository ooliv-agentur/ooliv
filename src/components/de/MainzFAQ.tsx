import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from '@/components/animations/Reveal';

const MainzFAQ = () => {
  const faqs = [
    {
      question: "Was kostet eine Zusammenarbeit?",
      answer: "Die Kosten richten sich nach Umfang und Zielen. Websites werden pauschal angeboten, SEO und Ads monatlich betreut."
    },
    {
      question: "Arbeitet ooliv nur mit Mainzer Unternehmen?",
      answer: "Schwerpunkt Mainz und Rhein-Main, aber wir betreuen Kunden im gesamten DACH-Raum."
    },
    {
      question: "Wie lange dauert ein Website-Projekt?",
      answer: "In der Regel 4 bis 10 Wochen – abhängig von Struktur und Inhalt."
    },
    {
      question: "Welche Branchen betreut ihr?",
      answer: "Beratung, Industrie, SaaS, Handwerk und regionale Dienstleister."
    },
    {
      question: "Bietet ihr SEO für Mainz an?",
      answer: "Ja, einschließlich technischer Optimierung, Local SEO, Content und Monitoring."
    },
    {
      question: "Wie erfolgt die Abstimmung?",
      answer: "Persönlich vor Ort oder digital – flexibel nach Bedarf."
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Häufige Fragen zum Website-Projekt
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen zur Zusammenarbeit
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-medico-darkGreen hover:text-accent-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzFAQ;
