
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
      answer: "In der Regel noch am selben Werktag – meist innerhalb weniger Stunden. Sie müssen nicht tagelang auf eine Rückmeldung warten."
    },
    {
      question: "Ist das Erstgespräch wirklich kostenlos?",
      answer: "Ja, absolut. Das erste Gespräch (30–60 Min.) ist unverbindlich und kostenlos. Wir besprechen Ihre Situation, Ihre Ziele und ob eine Zusammenarbeit Sinn macht – ohne versteckte Kosten oder Verpflichtungen."
    },
    {
      question: "Was muss ich zum Erstgespräch mitbringen?",
      answer: "Eigentlich nur Ihre Herausforderungen und Ziele. Hilfreich ist es, wenn Sie Ihre aktuelle Website-URL parat haben und grob einschätzen können, was Sie erreichen möchten. Den Rest klären wir gemeinsam im Gespräch."
    },
    {
      question: "Habe ich einen festen Ansprechpartner?",
      answer: "Ja! Sie arbeiten direkt mit mir zusammen – keine wechselnden Projektmanager, keine Hierarchien. Kurze Wege, schnelle Entscheidungen, persönlicher Kontakt während des gesamten Projekts."
    },
    {
      question: "Wie läuft ein typisches Projekt ab?",
      answer: "Nach dem Erstgespräch erstelle ich ein maßgeschneidertes Angebot mit Festpreis und Zeitplan. Nach Ihrer Freigabe starten wir: Regelmäßige Updates, enger Austausch, transparente Fortschritte. Sie wissen immer genau, wo wir stehen und was als nächstes kommt."
    },
    {
      question: "Können wir auch kurzfristig starten?",
      answer: "In vielen Fällen ja. Nach unserem Erstgespräch kann ich meist innerhalb von 3–5 Werktagen ein Angebot erstellen. Danach können wir oft innerhalb 1–2 Wochen starten. Bei dringenden Projekten geht's auch schneller."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ lineHeight: '1.3' }}>
            Häufige Fragen
          </h2>
          <div className="w-20 h-1 bg-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Antworten auf wichtige Fragen zur ersten Kontaktaufnahme
          </p>
        </div>
        
        <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-turquoise/20">
          <Accordion type="single" collapsible className="w-full">
            {contactFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-turquoise/10 rounded-xl px-6 py-2 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-turquoise transition-colors duration-200">
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
          <div className="bg-turquoise/5 rounded-2xl p-8 border border-turquoise/20">
            <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
              Haben Sie noch weitere Fragen?
            </h3>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-foreground text-foreground hover:bg-turquoise hover:text-white hover:border-turquoise font-medium px-8 py-3 transition-all duration-300">
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
