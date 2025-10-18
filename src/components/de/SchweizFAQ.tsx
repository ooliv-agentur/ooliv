
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

const SchweizFAQ = () => {
  const faqs = [
    {
      question: "Wie funktioniert die Zusammenarbeit über die Grenze?",
      answer: "Wir arbeiten komplett remote – per Videocall, E-Mail und modernen Projektmanagement-Tools. Viele unserer Schweizer Kunden schätzen die Kosteneffizienz einer deutschen Agentur ohne Qualitätsverlust."
    },
    {
      question: "Welche Währung gilt für Schweizer Projekte?",
      answer: "Wir bieten Ihnen Preise in CHF an. Abrechnung erfolgt wahlweise in CHF oder EUR, je nach Ihrer Präferenz. Alle Preise sind transparent und ohne versteckte Kosten."
    },
    {
      question: "Kennt ihr den Schweizer Markt?",
      answer: "Ja. Wir betreuen bereits Kunden auf Mallorca und haben Erfahrung mit internationalen Projekten. Für Schweizer Unternehmen beachten wir lokale Besonderheiten: .ch-Domains, mehrsprachige Websites (DE/FR/IT) und Schweizer Datenschutzstandards."
    },
    {
      question: "Was kostet eine Website für ein Schweizer Unternehmen?",
      answer: "Unsere B2B-Websites starten bei CHF 7.000. Komplexe Projekte mit mehrsprachigen Inhalten und SEO beginnen bei CHF 12.000. Wir erstellen individuelle Angebote basierend auf Ihren Anforderungen."
    },
    {
      question: "Bietet ihr auch mehrsprachige Websites an?",
      answer: "Ja – wir entwickeln Websites in Deutsch, Französisch und Italienisch, optimiert für den Schweizer Markt mit entsprechender SEO-Strategie für .ch-Domains."
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
              Hier finden Sie Antworten auf die wichtigsten Fragen zur grenzüberschreitenden Zusammenarbeit.
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

export default SchweizFAQ;
