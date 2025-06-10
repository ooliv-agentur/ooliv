
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFAQSectionDE = () => {
  const contactFaqs = [
    {
      question: "Wie schnell erhalte ich eine Antwort auf meine Anfrage?",
      answer: "Wir antworten in der Regel noch am selben Tag – ohne Warteschleifen."
    },
    {
      question: "Habe ich einen festen Ansprechpartner für mein Projekt?",
      answer: "Ja, bei ooliv haben Sie immer einen direkten Ansprechpartner aus unserer Geschäftsführung."
    },
    {
      question: "Kann ich ein kostenloses Erstgespräch vereinbaren?",
      answer: "Ja, selbstverständlich! Kontaktieren Sie uns telefonisch, per E-Mail oder über das Formular."
    },
    {
      question: "Welche Leistungen bietet ooliv an?",
      answer: "Strategie, Webdesign, Webentwicklung, Content-Erstellung, SEO-Optimierung, Google Ads und KI-Technologien."
    },
    {
      question: "Wie läuft der Projektprozess bei ooliv ab?",
      answer: "Klar strukturiert: Erstgespräch, Strategie, Umsetzung, Testing und Launch – alles transparent und ohne Zwischenstellen."
    }
  ];

  return (
    <section className="py-24 bg-medico-darkGreen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Häufige Fragen
        </h2>
        
        <div className="bg-medico-darkGreen/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {contactFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-2 mb-4 shadow-sm hover:bg-white/20 transition-all duration-200"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium text-white hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-yellow transition-colors duration-200">
                  <span className="flex items-center">
                    <span className="text-medico-yellow mr-3">•</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] text-white/90 leading-relaxed mt-4 pb-4 ml-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSectionDE;
