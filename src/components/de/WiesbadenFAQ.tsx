
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WiesbadenFAQ = () => {
  const faqs = [
    {
      question: "Wie läuft die Zusammenarbeit mit ooliv in Wiesbaden ab?",
      answer: "Sie sprechen direkt mit der Geschäftsführung – ohne Umwege. Wir begleiten Ihr Projekt strukturiert von der Strategie bis zum GoLive."
    },
    {
      question: "Was kostet eine Website bei ooliv?",
      answer: "Unsere Projekte starten ab ca. 5.000 €, je nach Umfang und Zielen. Sie erhalten ein transparentes, modulares Angebot."
    },
    {
      question: "Wie lange dauert ein Website-Relaunch?",
      answer: "Durchschnittlich 6–10 Wochen – abhängig von Abstimmungen, Content-Lieferung und gewünschtem Funktionsumfang."
    },
    {
      question: "Übernimmt ooliv auch SEO und Google Ads?",
      answer: "Ja. Wir planen SEO von Anfang an mit und betreuen auf Wunsch auch Google Ads Kampagnen, speziell für die Region Wiesbaden."
    },
    {
      question: "Ist ooliv die richtige Werbeagentur für Unternehmen aus Wiesbaden?",
      answer: "Ja – wir arbeiten mit vielen B2B-Kunden in der Region und kennen die Anforderungen und Zielgruppen im Rhein-Main-Gebiet."
    }
  ];

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              Häufig gestellte Fragen
            </h2>
            <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihre neue Website.
            </p>
          </div>
        </Reveal>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-medico-turquoise/20">
          <Accordion type="single" collapsible className="w-full">
            <StaggerReveal className="space-y-4" stagger={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </StaggerReveal>
          </Accordion>
        </div>
        
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="bg-medico-turquoise/5 rounded-2xl p-8 border border-medico-turquoise/20">
              <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
                Haben Sie noch weitere Fragen?
              </h3>
              <button 
                onClick={handleStartProject}
                className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-turquoise hover:text-white hover:border-medico-turquoise font-medium px-8 py-3 transition-all duration-300"
              >
                <ArrowRight className="h-4 w-4" />
                Weitere Fragen? Sprechen Sie mit uns
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenFAQ;
