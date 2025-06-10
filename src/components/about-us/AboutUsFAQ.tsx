
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const AboutUsFAQ = () => {
  const faqItems = [
    {
      question: "Was unterscheidet ooliv von anderen Marketing Agenturen in Mainz?",
      answer: "Als spezialisierte Marketing Agentur in Mainz verbinden wir strategisches Denken mit praktischer Umsetzung. Bei uns arbeiten Sie direkt mit dem Gründer zusammen, was kurze Entscheidungswege und ein tiefes Verständnis für Ihre Ziele garantiert."
    },
    {
      question: "Welche Leistungen bietet ooliv als Marketing Agentur an?",
      answer: "Wir bieten ein Komplettpaket digitaler Marketingdienstleistungen – von Webdesign und -entwicklung über SEO und Content-Erstellung bis hin zu Google Ads und KI-Technologien. Als Marketing Agentur in Mainz konzentrieren wir uns auf messbare Ergebnisse und langfristigen Geschäftserfolg."
    },
    {
      question: "Für welche Branchen arbeitet eure Marketing Agentur in Mainz?",
      answer: "Wir haben besondere Expertise in B2B-Bereichen wie SaaS, Fertigung, Beratung, Recht und Gesundheitswesen. Als Marketing Agentur mit Sitz in Mainz unterstützen wir sowohl lokale Unternehmen als auch Kunden im gesamten DACH-Raum."
    },
    {
      question: "Wie ist der typische Projektablauf mit eurer Marketing Agentur?",
      answer: "Jedes Projekt beginnt mit einem strategischen Gespräch, gefolgt von einer maßgeschneiderten Planung. Unser Team in Mainz entwickelt dann Konzepte, setzt diese um und optimiert kontinuierlich. Als Full-Service Marketing Agentur begleiten Sie von der ersten Idee bis zur langfristigen Betreuung."
    },
    {
      question: "Arbeitet ihr als Marketing Agentur auch mit KI-Tools?",
      answer: "Ja, wir nutzen modernste KI-Tools zur Effizienzsteigerung. Als zukunftsorientierte Marketing Agentur in Mainz setzen wir auf eine sinnvolle Balance zwischen technologischer Innovation und menschlicher Kreativität."
    }
  ];

  return (
    <section className="py-24 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Häufig gestellte Fragen
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Antworten auf die wichtigsten Fragen über unsere Leistungen als Marketing Agentur in Mainz
          </p>
        </div>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-medico-turquoise/20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-medico-turquoise/5 rounded-2xl p-8 border border-medico-turquoise/20">
            <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
              Haben Sie noch weitere Fragen?
            </h3>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-2 border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-white font-medium px-8 py-3 transition-all duration-300"
            >
              <Link to="/kontakt" className="flex items-center gap-2">
                <span className="text-xl">+</span>
                Weitere Fragen? Sprechen Sie mit uns
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsFAQ;
