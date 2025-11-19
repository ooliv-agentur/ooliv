
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
      question: "Wie viel kostet mich Klickbetrug wirklich?",
      answer: "Je nach Budget und Branche können 10–30% Ihres Werbebudgets durch betrügerische Klicks verloren gehen. Bei 5.000€ monatlichem Budget sind das bis zu 1.500€ – Monat für Monat, die keine echten Kunden bringen."
    },
    {
      question: "Merke ich überhaupt, wenn ich betroffen bin?",
      answer: "Oft nicht sofort. Typische Anzeichen: Viele Klicks, aber kaum Anfragen. Ungewöhnliche Aktivitäts-Peaks zu seltsamen Uhrzeiten. Auffällig hohe Absprungraten. Oder immer wieder dieselben IPs in Ihren Daten. Wir analysieren das kostenlos für Sie."
    },
    {
      question: "Was genau macht Ihr Schutz?",
      answer: "Wir überwachen jeden Klick in Echtzeit, erkennen verdächtige Muster (Bots, VPNs, Wiederholungs-Klicks) und blockieren betrügerische Zugriffe automatisch – bevor Google dafür abrechnet. Sie zahlen nur für echte Interessenten."
    },
    {
      question: "Reicht Googles eigener Schutz nicht aus?",
      answer: "Google filtert nur einen Teil heraus – meist die offensichtlichsten Bot-Klicks. Professioneller Klickbetrug über VPNs, wechselnde IPs oder Klick-Farmen bleibt oft unentdeckt. Unser System erkennt auch diese raffinierten Angriffe."
    },
    {
      question: "Wie schnell kann ich mit Ihrem Schutz starten?",
      answer: "Sehr schnell. Nach einem kurzen Setup (ca. 30 Min.) ist der Schutz aktiv und überwacht Ihre Kampagnen rund um die Uhr. Sie sehen sofort in einem Dashboard, wie viele betrügerische Klicks wir für Sie blockieren."
    },
    {
      question: "Ist das alles datenschutzkonform?",
      answer: "Ja, vollständig DSGVO-konform. Wir erfassen nur technische Zugriffsmuster (IP, Gerät, Klickverhalten) – keine personenbezogenen Daten. Alles läuft auf deutschen Servern mit höchsten Sicherheitsstandards."
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
