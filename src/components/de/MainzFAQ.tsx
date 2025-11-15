import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from '@/components/animations/Reveal';

const MainzFAQ = () => {
  const faqs = [
    {
      question: "Was kostet eine Werbeagentur in Mainz?",
      answer: "Die Kosten für eine Werbeagentur in Mainz hängen stark vom Projektumfang ab. Bei ooliv beginnen kleinere Website-Projekte ab ca. 4.000€. Für umfassende digitale Strategien mit Webdesign, SEO und Content Marketing sollten Sie mit 10.000-25.000€ rechnen. Wir erstellen Ihnen gerne ein transparentes Angebot basierend auf Ihren konkreten Anforderungen."
    },
    {
      question: "Welche Leistungen bietet eure Werbeagentur in Mainz?",
      answer: "Als Full-Service Werbeagentur in Mainz bieten wir: Webdesign & Entwicklung, SEO & Local SEO für Mainz, Google Ads & Performance Marketing, Content Marketing & Texterstellung, Marketing Automation, Digitale Strategieberatung und Branding. Alle Leistungen können einzeln oder als Gesamtpaket gebucht werden."
    },
    {
      question: "Wie lange dauert ein typisches Projekt mit eurer Werbeagentur?",
      answer: "Die Projektdauer variiert je nach Umfang: Eine neue Website dauert typischerweise 6-12 Wochen von Konzept bis Launch. SEO-Projekte zeigen erste Ergebnisse nach 3-6 Monaten. Laufende Betreuung (Retainer) bieten wir ab 3 Monaten Laufzeit an. Wir arbeiten agil und liefern regelmäßige Updates, sodass Sie den Fortschritt jederzeit nachvollziehen können."
    },
    {
      question: "Warum sollte ich eine lokale Werbeagentur in Mainz wählen?",
      answer: "Eine lokale Werbeagentur in Mainz bietet mehrere Vorteile: Persönlicher Service mit direktem Kontakt und kurzen Wegen. Kenntnis der regionalen Wirtschaft und Zielgruppe. Schnelle Reaktionszeiten ohne lange E-Mail-Ketten. Möglichkeit zu persönlichen Treffen in unserem Mainzer Büro. Bei ooliv profitieren Sie zusätzlich von unserer langjährigen Erfahrung seit 2008."
    },
    {
      question: "Arbeitet eure Werbeagentur nur mit Unternehmen aus Mainz?",
      answer: "Nein, obwohl wir unseren Sitz in Mainz haben, arbeiten wir mit Unternehmen aus dem gesamten Rhein-Main-Gebiet und bundesweit. Viele unserer Kunden kommen aus Frankfurt, Wiesbaden, Darmstadt und anderen Städten. Durch unsere digitalen Prozesse können wir auch überregional effizient zusammenarbeiten, schätzen aber persönliche Treffen in Mainz."
    },
    {
      question: "Was macht ooliv als Werbeagentur besonders?",
      answer: "Was uns unterscheidet: Inhabergeführt seit 2008 – direkte Kommunikation ohne Zwischenstellen. B2B-Spezialisierung – wir verstehen komplexe Geschäftsmodelle. Messbare Erfolge – transparentes Reporting und klare KPIs. Langfristige Partnerschaften – viele Kunden arbeiten seit Jahren mit uns. Technische Expertise – moderne Technologien und bewährte Tools."
    },
    {
      question: "Bietet eure Werbeagentur auch SEO für Mainz an?",
      answer: "Ja, SEO ist eine unserer Kernkompetenzen! Wir bieten sowohl Local SEO speziell für Mainz als auch überregionale SEO-Strategien an. Unser Fokus liegt auf nachhaltiger Sichtbarkeit, qualitativem Content und technischer Optimierung. Gerne erstellen wir Ihnen eine individuelle SEO-Strategie für Ihr Unternehmen in Mainz."
    },
    {
      question: "Wie kann ich mit eurer Werbeagentur in Mainz in Kontakt treten?",
      answer: "Am einfachsten über unser Kontaktformular auf dieser Seite. Sie können uns auch direkt anrufen oder eine E-Mail schreiben. Gerne vereinbaren wir ein kostenloses Erstgespräch – entweder in unserem Büro in der Mombacher Straße in Mainz oder per Video-Call. Wir melden uns in der Regel innerhalb von 24 Stunden zurück."
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Häufig gestellte Fragen zu unserer Werbeagentur in Mainz
            </h2>
            <p className="text-xl text-gray-600">
              Alles, was Sie über die Zusammenarbeit mit ooliv wissen müssen
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-medico-darkGreen hover:text-accent-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzFAQ;
