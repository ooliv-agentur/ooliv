
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ lineHeight: '1.3' }}>
            Häufige Fragen
          </h2>
          <div className="w-20 h-1 bg-[#32b2ab] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unser Angebot.
          </p>
        </div>
        
        <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-[#32b2ab]/20">
          <Accordion type="single" collapsible className="w-full">
            {contactFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-turquoise/10 rounded-xl px-6 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32b2ab] focus-visible:ring-opacity-50 [&[data-state=open]]:text-[#32b2ab] transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed mt-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-[#32b2ab]/5 rounded-2xl p-8 border border-[#32b2ab]/20">
            <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
              Haben Sie noch weitere Fragen?
            </h3>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-foreground text-foreground hover:bg-[#32b2ab] hover:text-white hover:border-[#32b2ab] font-medium px-8 py-3 transition-all duration-300">
              <ArrowRight className="h-4 w-4" />
              Weitere Fragen? Sprechen Sie mit uns
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSectionDE;
