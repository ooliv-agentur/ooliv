
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugFAQ = () => {
  const faqItems = [
    {
      question: "Was ist Klickbetrug genau?",
      answer: "Klickbetrug meint ungültige oder absichtlich ausgelöste Klicks auf Anzeigen – häufig durch Bots, Wettbewerber oder sogenannte Klickfarmen."
    },
    {
      question: "Wie erkenne ich, ob ich betroffen bin?",
      answer: "Anzeichen sind hohe Klickzahlen ohne Anfragen, ungewöhnliche Peaks im Tagesverlauf oder auffällig viele Absprünge über mobile Geräte."
    },
    {
      question: "Reicht Googles Schutzmechanismus nicht aus?",
      answer: "Google filtert nur einen Teil der Angriffe heraus. Viele Klicks – etwa über VPNs oder durch wiederkehrende IPs – bleiben unerkannt."
    },
    {
      question: "Wie funktioniert euer Schutz?",
      answer: "Wir analysieren jeden Klick in Echtzeit, erkennen Muster und blockieren betrügerische Zugriffe automatisch – bevor Kosten entstehen."
    },
    {
      question: "Ist das Ganze DSGVO-konform?",
      answer: "Ja. Wir erfassen keine personenbezogenen Daten, sondern nur technische Zugriffsmuster zur Erkennung von Missbrauch."
    }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses('narrow')}>
        <Reveal>
          <div className="text-left mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Häufige Fragen zum Thema Klickbetrug
            </h2>
            <div className="w-20 h-1 bg-accent-primary mb-8"></div>
            <p className={`${getBodyClasses('large', 'secondary', 'left')} max-w-2xl`}>
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Klickbetrug und unseren Schutz.
            </p>
          </div>
        </Reveal>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-accent-primary/20">
          <Accordion type="single" collapsible className="w-full">
            <StaggerReveal className="space-y-4" stagger={0.08}>
              {faqItems.map((faq, index) => (
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
                onClick={handleOpenLeadForm}
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

export default KlickbetrugFAQ;
