
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
      question: "Wie arbeitet eine Werbeagentur in Wiesbaden mit lokalen Unternehmen?",
      answer: "Als Werbeagentur in Wiesbaden verstehen wir die besonderen Herausforderungen lokaler Unternehmen. Wir entwickeln maßgeschneiderte Strategien, die sowohl regional als auch überregional wirken – von der lokalen Sichtbarkeit bis zur deutschlandweiten Expansion."
    },
    {
      question: "Was unterscheidet ooliv von anderen Werbeagenturen in Wiesbaden?",
      answer: "Unsere Stärke liegt in der Kombination aus strategischer Planung und technischer Exzellenz. Während andere Agenturen oft nur Teilbereiche abdecken, bieten wir als Werbeagentur einen ganzheitlichen Ansatz – von der Konzeption bis zur Umsetzung und Betreuung."
    },
    {
      question: "Welche Investition ist für eine professionelle Website nötig?",
      answer: "Die Investition richtet sich nach Ihren Zielen und Anforderungen. Einfache Websites beginnen bei 4.000 €, umfassende Projekte mit erweiterten Funktionen liegen zwischen 8.000 € und 15.000 €. Wir erstellen transparente Angebote ohne versteckte Kosten."
    },
    {
      question: "Wie schnell kann eine neue Website realisiert werden?",
      answer: "Die Umsetzungsdauer variiert je nach Projektumfang. Standardprojekte realisieren wir in 4-8 Wochen, komplexere Vorhaben benötigen entsprechend mehr Zeit. Eine strukturierte Planung sorgt für verlässliche Termine."
    },
    {
      question: "Warum ist ooliv die ideale Werbeagentur für Wiesbadener Unternehmen?",
      answer: "Weil wir die Bedürfnisse von Unternehmen im Rhein-Main-Gebiet genau kennen. Als Werbeagentur kombinieren wir regionale Expertise mit überregionaler Erfahrung und liefern messbare Resultate statt leerer Versprechungen."
    }
  ];

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6">
              Häufige Fragen zur Werbeagentur-Zusammenarbeit
            </h2>
            <p className="text-xl text-medico-turquoise max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
              Alles was Sie über die Zusammenarbeit mit unserer Werbeagentur wissen sollten
            </p>
          </div>
        </Reveal>

        <StaggerReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="text-lg font-semibold text-medico-darkGreen pr-4 group-hover:text-medico-turquoise transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </StaggerReveal>

        <Reveal>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-medico-darkGreen mb-4">
              Weitere Fragen? Sprechen Sie direkt mit uns
            </h3>
            <p className="text-medico-turquoise mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Wir beantworten gerne alle Ihre Fragen in einem persönlichen Gespräch
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={handleStartProject}
            >
              Digitales Projekt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenFAQ;
