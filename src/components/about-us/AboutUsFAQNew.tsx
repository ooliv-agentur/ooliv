import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsFAQNew = () => {
  const faqs = [
    {
      question: "Was unterscheidet ooliv von anderen Agenturen?",
      answer: "Wir arbeiten seniorgeführt, ohne Layer aus Sales oder Junioren. Sie arbeiten direkt mit dem Gründer und einem spezialisierten Kernteam – ehrlich, pragmatisch und auf Ergebnisse fokussiert."
    },
    {
      question: "Welche Leistungen deckt ooliv ab?",
      answer: "Wir verbinden Strategie, UX-Konzeption, Webentwicklung, SEO, Content und AI-gestützte Workflows zu vollständigen digitalen Systemen. Von der Planung bis zum Launch aus einer Hand."
    },
    {
      question: "Wie läuft ein typisches Projekt ab?",
      answer: "1) Strategiephase: Ziele, Zielgruppen, Struktur. 2) Konzept: Wireframes, Content-Strategie, Design. 3) Umsetzung: Entwicklung, Content, SEO. 4) Launch & Optimierung. Alles transparent, klar dokumentiert."
    },
    {
      question: "Arbeitet ihr auch mit KI-Tools?",
      answer: "Ja – wir nutzen AI für Recherche, Content-Strukturierung, SEO-Analysen und Prozessoptimierung. Immer als Werkzeug, nie als Ersatz für Strategie oder menschliche Entscheidungen."
    },
    {
      question: "Wer ist mein Ansprechpartner?",
      answer: "Vom ersten Gespräch bis zum Launch arbeiten Sie direkt mit Uli Schönleber (CEO) sowie den relevanten Spezialisten aus dem Kernteam. Eine Schnittstelle, klare Kommunikation."
    },
    {
      question: "Wie groß ist das Team?",
      answer: "Wir sind ein kompaktes Team von 10 Spezialisten in Strategie, UX, Entwicklung, Design, Content und SEO – bewusst klein, um Qualität und direkte Zusammenarbeit zu garantieren."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Häufige Fragen zur Zusammenarbeit
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-text leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AboutUsFAQNew;
