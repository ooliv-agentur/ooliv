import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { ArrowRight } from 'lucide-react';

const SchweizFAQ = () => {
  const faqs = [
    {
      question: "Arbeiten Sie auch mit Schweizer Unternehmen?",
      answer: "Ja, sehr gerne! Ich arbeite erfolgreich mit B2B-Kunden aus der ganzen Schweiz zusammen – von Zürich über Bern bis Genf. Die Zusammenarbeit läuft komplett remote über Videocalls und moderne Tools, was Kosten spart ohne Qualitätsverlust."
    },
    {
      question: "Wie funktioniert die Bezahlung – Euro oder Franken?",
      answer: "Sie entscheiden: Rechnung wahlweise in CHF oder EUR. Für Schweizer Kunden rechne ich typischerweise in Franken ab. Ein Strategie-Workshop kostet CHF 17.000–28.000, komplette Projekte CHF 45.000–90.000, laufende Begleitung ab CHF 9.000/Monat."
    },
    {
      question: "Kennen Sie den Schweizer Markt?",
      answer: "Ja. Ich arbeite seit Jahren mit Schweizer B2B-Unternehmen und kenne die Besonderheiten: .ch-Domains, mehrsprachige Anforderungen (DE/FR/IT), hohe Qualitätsansprüche und die spezifischen Erwartungen Ihrer Zielgruppe. DSGVO-konforme Umsetzung ist selbstverständlich."
    },
    {
      question: "Kommen Sie auch in die Schweiz für persönliche Meetings?",
      answer: "Für wichtige Meilensteine wie Kickoff-Meetings oder Strategie-Workshops komme ich gerne persönlich vorbei. Die laufende Zusammenarbeit läuft remote – das ist effizienter und günstiger für Sie. Bei größeren Projekten plane ich regelmäßige Vor-Ort-Termine ein."
    },
    {
      question: "Bieten Sie auch mehrsprachige Websites an?",
      answer: "Ja, absolut. Viele Schweizer Projekte sind mehrsprachig (DE/FR/IT oder auch EN). Wir entwickeln die Website-Struktur von Anfang an mehrsprachig und können auch bei Content-Erstellung in verschiedenen Sprachen unterstützen – mit muttersprachlichen Redakteuren."
    },
    {
      question: "Was unterscheidet Sie von Schweizer Agenturen?",
      answer: "Sie sparen die typischen Schweizer Agentur-Aufschläge, erhalten aber dieselbe Qualität: Direkte Zusammenarbeit mit einem erfahrenen Digital-Berater, klare Prozesse, messbare Ergebnisse. Viele Schweizer Kunden schätzen das Preis-Leistungs-Verhältnis bei gleichbleibend hohem Standard."
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
              Antworten für Schweizer Unternehmen zur Zusammenarbeit
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
                Weitere Fragen zu Strategic Advisory?
              </h3>
              <button 
                onClick={handleStartProject}
                className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-accent-primary hover:text-white hover:border-accent-primary font-medium px-8 py-3 transition-all duration-300"
              >
                <ArrowRight className="h-4 w-4" />
                Schweizer Projekt starten
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SchweizFAQ;
