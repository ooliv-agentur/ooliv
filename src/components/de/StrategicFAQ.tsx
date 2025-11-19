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

interface StrategicFAQProps {
  location?: string;
}

const StrategicFAQ: React.FC<StrategicFAQProps> = ({ location }) => {
  const faqs = [
    {
      question: `Kommen Sie auch zu uns ins Büro${location ? ` nach ${location}` : ''}?`,
      answer: `Ja, gerne! ${location ? `Für Erstgespräche und Strategie-Workshops komme ich persönlich nach ${location}. ` : 'Für Erstgespräche und Strategie-Workshops komme ich persönlich vorbei. '}Die laufende Zusammenarbeit läuft dann meist remote – das ist effizienter und spart Ihnen Kosten. Wichtige Meilensteine besprechen wir gerne wieder persönlich vor Ort.`
    },
    {
      question: `Arbeiten Sie nur in ${location || 'der Region'} oder auch deutschlandweit?`,
      answer: `${location ? `Mein Büro ist in Mainz, aber ich arbeite im gesamten DACH-Raum. Kunden aus ${location} schätzen die persönliche Nähe – gleichzeitig betreue ich erfolgreich Projekte in ganz Deutschland, Österreich und der Schweiz. ` : 'Ich arbeite im gesamten DACH-Raum. '}Standort ist zweitrangig, entscheidend ist die Chemie und Ihr Projekterfolg.`
    },
    {
      question: `Was kostet eine Beratung${location ? ` in ${location}` : ''}?`,
      answer: "Ein ausführliches Erstgespräch ist kostenlos (30–60 Min.). Ein fokussierter Strategie-Workshop mit Konzept startet bei €15.000–25.000. Umfassende Projekte mit Umsetzung liegen bei €30.000–80.000. Laufende Begleitung gibt's ab €8.000/Monat. Sie erhalten vorab ein transparentes Festpreis-Angebot."
    },
    {
      question: "Wie schnell können wir starten?",
      answer: `Nach unserem Erstgespräch erstelle ich innerhalb von 3–5 Werktagen ein konkretes Angebot. Nach Ihrer Freigabe können wir meist innerhalb von 1–2 Wochen starten${location ? ` – auch mit einem persönlichen Kickoff in ${location}` : ''}. Bei dringenden Projekten geht's auch schneller.`
    },
    {
      question: "Für welche Unternehmen arbeiten Sie?",
      answer: `Hauptsächlich für B2B-Unternehmen: SaaS-Firmen, produzierende Unternehmen, Beratungen, Kanzleien, Gesundheitsdienstleister. ${location ? `Viele meiner Kunden kommen aus ${location} und der Region – ` : ''}aber ich arbeite im gesamten DACH-Raum. Entscheidend ist, dass Sie digitales Marketing strategisch angehen wollen.`
    },
    {
      question: "Was passiert nach dem Erstgespräch?",
      answer: `Nach unserem kostenlosen Gespräch erhalten Sie von mir ein maßgeschneidertes Konzept mit klarem Zeitplan und Festpreis. Keine Überraschungen, keine versteckten Kosten. Sie entscheiden in Ruhe, ob Sie das Angebot annehmen${location ? ` – und ob wir Ihr nächstes Treffen in ${location} oder remote machen` : ''}.`
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
              {location ? `Antworten auf wichtige Fragen zur Zusammenarbeit in ${location}` : 'Antworten auf wichtige Fragen zur Zusammenarbeit'}
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
                {location ? `Weitere Fragen zur Zusammenarbeit in ${location}?` : 'Weitere Fragen zur Zusammenarbeit?'}
              </h3>
              <button 
                onClick={handleStartProject}
                className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-accent-primary hover:text-white hover:border-accent-primary font-medium px-8 py-3 transition-all duration-300"
              >
                <ArrowRight className="h-4 w-4" />
                Mit ooliv durchstarten
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StrategicFAQ;
