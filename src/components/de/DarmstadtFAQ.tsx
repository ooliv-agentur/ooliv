
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

const DarmstadtFAQ = () => {
  const faqs = [
    {
      question: "Wie läuft die Zusammenarbeit mit ooliv in Darmstadt ab?",
      answer: "Sie sprechen direkt mit der Geschäftsführung – ohne Umwege. Wir begleiten Ihr Projekt strukturiert von der Strategie bis zum GoLive und darüber hinaus."
    },
    {
      question: "Was kostet eine Website bei ooliv?",
      answer: "Unsere B2B-Websites für Darmstädter Unternehmen starten bei €6.000 für einen strategischen Onepager. Komplexe Projekte mit SEO-Integration beginnen bei €10.000. Sie erhalten ein transparentes, modulares Angebot."
    },
    {
      question: "Wie lange dauert ein Website-Projekt?",
      answer: "Einfache Websites sind in 3–4 Wochen umsetzbar. Komplexe B2B-Projekte mit Content-Strategie und SEO benötigen 6–10 Wochen – abhängig von Abstimmungen und Funktionsumfang."
    },
    {
      question: "Übernimmt ooliv auch SEO und Google Ads?",
      answer: "Ja. Wir planen SEO von Anfang an mit und betreuen auf Wunsch auch Google Ads Kampagnen, speziell für die Region Darmstadt und das Rhein-Main-Gebiet."
    },
    {
      question: "Ist ooliv die richtige Werbeagentur für Unternehmen aus Darmstadt?",
      answer: "Ja – wir arbeiten mit vielen B2B-Kunden in der Region und kennen die Anforderungen von Tech-Unternehmen und wissenschaftsnahen Branchen im TU-Umfeld."
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
            <div className="w-20 h-1 bg-accent-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihre neue Website.
            </p>
          </div>
        </Reveal>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-accent-primary/20">
          <Accordion type="single" collapsible className="w-full">
            <StaggerReveal className="space-y-4" stagger={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-accent-primary/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-opacity-50 [&[data-state=open]]:text-accent-primary transition-colors duration-200">
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
            <div className="bg-accent-primary/5 rounded-2xl p-8 border border-accent-primary/20">
              <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
                Haben Sie noch weitere Fragen?
              </h3>
              <button 
                onClick={handleStartProject}
                className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-accent-primary hover:text-white hover:border-accent-primary font-medium px-8 py-3 transition-all duration-300"
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

export default DarmstadtFAQ;
