
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsFAQ = () => {
  const faqItems = [
    {
      question: "Wie arbeiten Sie mit Ihren Kunden zusammen?",
      answer: "Direkt und persönlich. Sie sprechen mit mir – dem Gründer und Digital-Berater – nicht mit wechselnden Projektmanagern. Wir starten mit einem ausführlichen Gespräch, entwickeln gemeinsam die Strategie und bleiben während des gesamten Projekts in engem Austausch. Kurze Wege, schnelle Entscheidungen."
    },
    {
      question: "Was macht Sie als Berater besonders?",
      answer: "16+ Jahre Erfahrung in digitaler Strategie, ehrliche Ansagen statt Marketing-Blabla, und messbare Ergebnisse. Ich sage Ihnen, was wirklich funktioniert – auch wenn das manchmal bedeutet, von Ihren ursprünglichen Plänen abzuraten. Keine Junior-Berater, kein Agentur-Overhead."
    },
    {
      question: "Für welche Unternehmen arbeiten Sie?",
      answer: "Hauptsächlich für B2B-Unternehmen im DACH-Raum: SaaS-Firmen, produzierende Unternehmen, Beratungen, Kanzleien, Gesundheitsdienstleister. Typischerweise mittelständische Unternehmen oder ambitionierte Start-ups, die digitales Marketing strategisch angehen wollen."
    },
    {
      question: "Wie läuft ein typisches Projekt mit Ihnen ab?",
      answer: "Wir starten mit einem kostenlosen Erstgespräch (30–60 Min.), entwickeln dann ein maßgeschneidertes Konzept mit klarem Zeitplan und Festpreis. Nach Ihrer Freigabe geht's los: Regelmäßige Updates, enger Austausch, transparente Fortschritte. Sie wissen immer, wo wir stehen."
    },
    {
      question: "Können Sie auch einzelne Leistungen übernehmen?",
      answer: "Ja, absolut. Sie brauchen nur SEO-Beratung? Nur einen Strategie-Workshop? Nur Google Ads Management? Kein Problem. Ich biete sowohl Full-Service als auch einzelne Module – je nachdem, was für Ihr Unternehmen am besten passt."
    },
    {
      question: "Setzen Sie auch KI-Tools ein?",
      answer: "Ja, wo es sinnvoll ist. KI hilft bei Content-Erstellung, Bild-Generierung und Prozess-Automatisierung – immer mit menschlicher Kontrolle und Veredelung. Keine Experimente, sondern bewährte Tools für bessere Effizienz bei gleichbleibender Qualität."
    }
  ];

  return (
    <section className="py-24 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ lineHeight: '1.3' }}>
            Häufig gestellte Fragen
          </h2>
          <div className="w-20 h-1 bg-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Antworten auf die wichtigsten Fragen zur Zusammenarbeit
          </p>
        </div>
        
        <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-turquoise/20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
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
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-2 border-foreground text-foreground hover:bg-turquoise hover:text-white hover:border-turquoise font-medium px-8 py-3 transition-all duration-300"
            >
              <Link to="/kontakt" className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
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
