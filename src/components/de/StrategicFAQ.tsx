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
      question: "Was ist Strategic Discovery und wann macht sie Sinn?",
      answer: "Strategic Discovery ist eine intensive 4–6-wöchige Phase, in der wir Ihre Business Challenges systematisch analysieren, User Research durchführen und eine fundierte Digital Strategy entwickeln. Sie macht Sinn, wenn Sie vor einer Digital Transformation stehen, neue Produkte launchen oder bestehende Systeme strategisch optimieren wollen. Investment: €15k–25k."
    },
    {
      question: "Wie unterscheidet sich dieses Engagement-Modell von einer klassischen Werbeagentur?",
      answer: "Klassische Agenturen bieten operative Services (Webdesign, SEO, Ads). Wir bieten C-Level Strategic Advisory – von Strategic Discovery über Product & UX Strategy bis AI Integration. Kein Agentur-Theater, keine Junior-Mitarbeiter, sondern direkte Zusammenarbeit mit einem Digital Strategy Lead mit 16+ Jahren Track Record."
    },
    {
      question: "Welche Business Outcomes kann ich erwarten?",
      answer: `Basierend auf 16+ Jahren Track Record: durchschnittlich +240% Conversion Rate nach Strategic Discovery & UX Optimization, +180% Lead Quality durch Strategic Positioning. Jedes Projekt ist individuell${location ? ` – gerade für ${location} und die Region` : ''} nutzen Sie unseren ROI Calculator für Ihre Projektionen.`
    },
    {
      question: "Wie funktioniert die Zusammenarbeit?",
      answer: `Strategic Advisory ist keine klassische Agentur-Beziehung, sondern eine C-Level Partnership. Sie arbeiten direkt mit Uli Schönleber (Digital Strategy Lead, 16+ Jahre Erfahrung). ${location ? `Vor-Ort-Termine in ${location} möglich, ` : ''}Remote-Work als Standard – maximale Flexibilität.`
    },
    {
      question: "Für welche Unternehmen ist dieses Modell geeignet?",
      answer: "Unser Strategic Advisory richtet sich an B2B-Unternehmen im DACH-Raum, die digitale Transformation ernst nehmen. Typische Kunden: Tech-Startups mit Product-Market Fit Challenges, Mittelstand vor Digital Transformation, etablierte Unternehmen mit Innovation Gaps. Investment-Range: €15k–80k für Transformations-Projekte, €8k–15k/Monat für Strategic Retainer."
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
              Strategic Advisory FAQs
            </h2>
            <div className="w-20 h-1 bg-accent-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Antworten auf die wichtigsten Fragen zu Strategic Discovery und Digital Transformation
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
                Strategiegespräch vereinbaren
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StrategicFAQ;
