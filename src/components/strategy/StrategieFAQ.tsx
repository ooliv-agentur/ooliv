
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const StrategieFAQ = () => {
  const faqItems = [
    {
      question: "Was ist ein Webkonzept?",
      answer: "Ein Webkonzept beschreibt die strategische Grundlage für Ihre Website. Es enthält die Zielgruppenanalyse, die Sitemap, die Content-Strategie und erste Wireframes – alles, was Ihre Website erfolgreich macht."
    },
    {
      question: "Warum ist ein Webkonzept so wichtig?",
      answer: "Ohne Webkonzept fehlt Ihrer Website die Basis. Nur mit einer durchdachten Struktur und Strategie kann Ihre Website später erfolgreich Leads generieren und Ihre Marke stärken."
    },
    {
      question: "Wie entwickelt ooliv ein Webkonzept für mein Unternehmen?",
      answer: "Wir starten mit einer Analyse Ihrer Zielgruppe und des Wettbewerbs. Daraus entwickeln wir eine Sitemap, Content-Strategien und Wireframes. So entsteht ein individuelles Webkonzept, das genau zu Ihrem Unternehmen passt."
    },
    {
      question: "Was genau ist ein strategisches Webkonzept?",
      answer: "Ein strategisches Webkonzept ist die durchdachte Planung Ihrer Website vor der Umsetzung. Es umfasst Zielgruppendefinition, Informationsarchitektur, Content-Strategie und Conversion-Optimierung. So entstehen Websites, die wirklich funktionieren und Ihre Geschäftsziele erreichen."
    },
    {
      question: "Warum brauche ich eine Strategieberatung für meine Website?",
      answer: "Ohne Strategie entstehen Websites, die zwar schön aussehen, aber nicht konvertieren. Eine professionelle Strategieberatung sorgt für klare Zielgruppendefinition, optimierte Nutzerführung und messbare Erfolge. Das spart langfristig Zeit und Geld."
    },
    {
      question: "Wie läuft die Strategieentwicklung bei ooliv ab?",
      answer: "Wir arbeiten in strukturierten Workshops: Analyse Ihrer Ziele und Zielgruppe, Entwicklung der Informationsarchitektur, Content-Planung und UX-Konzeption. Sie sind aktiv eingebunden und erhalten am Ende ein detailliertes Strategiedokument."
    },
    {
      question: "Was kostet eine professionelle Strategieberatung?",
      answer: "Die Kosten hängen vom Projektumfang ab. Eine Basis-Strategieberatung für kleinere Websites beginnt bei etwa 2.500€. Für umfangreichere B2B-Projekte oder E-Commerce-Strategien kalkulieren wir individuell. Sie erhalten immer ein transparentes Angebot."
    },
    {
      question: "Wie lange dauert die Strategieentwicklung?",
      answer: "Je nach Komplexität 2-6 Wochen. Einfache Unternehmenswebsites benötigen meist 2-3 Wochen, komplexere Projekte mit mehreren Stakeholdern entsprechend länger. Wir erstellen einen klaren Zeitplan als Teil unseres Angebots."
    },
    {
      question: "Können Sie auch bestehende Websites strategisch optimieren?",
      answer: "Absolut! Wir analysieren Ihre aktuelle Website, identifizieren Schwachstellen und entwickeln eine Optimierungsstrategie. Oft lassen sich mit gezielten strategischen Änderungen deutliche Verbesserungen bei Conversion und Nutzererfahrung erreichen."
    },
    {
      question: "Welche Branchen betreuen Sie in der Strategieberatung?",
      answer: "Wir entwickeln Strategien für alle Branchen: B2B-Unternehmen, E-Commerce, Dienstleister, Gesundheitswesen, Start-ups und mehr. Jede Branche hat ihre Besonderheiten – unsere Strategien berücksichtigen das von Anfang an."
    },
    {
      question: "Übernehmen Sie auch die Umsetzung der Strategie?",
      answer: "Ja, das ist unser Vorteil! Wir entwickeln nicht nur die Strategie, sondern setzen sie auch um: Webdesign, Entwicklung, Content-Erstellung und SEO-Optimierung. So können Sie sicher sein, dass die Strategie auch wirklich umgesetzt wird."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              Häufig gestellte Fragen
            </h2>
            <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um strategische Webkonzepte.
            </p>
          </div>
        </Reveal>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-medico-turquoise/20">
          <Accordion type="single" collapsible className="w-full">
            <StaggerReveal className="space-y-4" stagger={0.08}>
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
            </StaggerReveal>
          </Accordion>
        </div>
        
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="bg-medico-turquoise/5 rounded-2xl p-8 border border-medico-turquoise/20">
              <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
                Haben Sie noch weitere Fragen?
              </h3>
              <button 
                onClick={() => window.dispatchEvent(new Event('open-lead-form'))}
                className="inline-flex items-center gap-2 rounded-full border-2 border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-white font-medium px-8 py-3 transition-all duration-300"
              >
                <span className="text-xl">+</span>
                Jetzt Strategiegespräch vereinbaren
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StrategieFAQ;
