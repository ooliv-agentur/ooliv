import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from '@/components/animations/Reveal';

const faqs = [
  {
    question: 'Wie unterscheiden sich die drei Engagement-Modelle?',
    answer: 'Das Strategic Discovery Package liefert dir strategische Klarheit und eine validierte Roadmap (4-6 Wochen). Die End-to-End Transformation geht von Discovery bis zur live Implementation (8-16 Wochen). Der Strategic Retainer ist für kontinuierliche strategische Begleitung über mehrere Monate hinweg – ideal, wenn du einen strategischen Sparringspartner auf Abruf brauchst.',
  },
  {
    question: 'Was ist im Investment genau enthalten?',
    answer: 'Jedes Engagement-Modell hat klar definierte Deliverables, die in der jeweiligen Beschreibung aufgelistet sind. Du bekommst keine "Beratungsstunden", sondern konkrete strategische Outputs: Reports, Frameworks, Roadmaps, Designs, Implementation Oversight – je nach gewähltem Package. Alles transparent und vorhersagbar.',
  },
  {
    question: 'Wie wird der genaue Preis innerhalb der Range bestimmt?',
    answer: 'Der finale Preis hängt von drei Faktoren ab: (1) Scope & Komplexität des Projekts, (2) Timeline & Dringlichkeit, (3) bestehende Assets & Vorarbeit. Ein Enterprise-Produkt mit komplexem Ecosystem kostet mehr als eine fokussierte B2B-SaaS Plattform. Nach einem initialen Discovery Call bekommst du ein fixes, transparentes Angebot.',
  },
  {
    question: 'Was ist der ROI eines Strategic Discovery Packages?',
    answer: 'Ein Discovery Package verhindert durchschnittlich 6-8 Monate Fehlentwicklung. Bei einem Development Team von €15k/Monat entspricht das €90k-120k vermiedenen Kosten. Zusätzlich bekommst du schnelleren Time-to-Market durch richtige Priorisierung und höhere Conversion durch evidenzbasierte UX-Entscheidungen. Typischer ROI: 5-12x des Investments innerhalb von 12 Monaten.',
  },
  {
    question: 'Kann ich mit einem Strategic Discovery Package starten und später upgraden?',
    answer: 'Absolut – das ist sogar der empfohlene Weg für die meisten Unternehmen. Starte mit dem Discovery Package, um strategische Klarheit zu bekommen. Danach kannst du entscheiden, ob du die End-to-End Transformation direkt buchst oder schrittweise umsetzt. Der Strategic Retainer macht nach dem Launch Sinn, um kontinuierlich zu optimieren.',
  },
  {
    question: 'Warum kein klassisches Stundensatz-Modell?',
    answer: 'Stundensätze incentivieren lange Projekte, nicht schnelle Outcomes. Mein Fokus liegt auf messbarem Business Impact, nicht auf abrechenbaren Stunden. Outcome-basierte Pricing bedeutet: Du zahlst für strategische Excellence und nachweisbare Ergebnisse – nicht für Meetings und Status Updates.',
  },
  {
    question: 'Was macht diesen Approach anders als typische Agenturen?',
    answer: 'Drei Dinge: (1) Kein Agentur-Overhead – du arbeitest direkt mit einem Senior Strategy Lead mit 16+ Jahren Erfahrung. (2) Outcome-fokussiert statt stundenfokussiert – ich optimiere auf Business Impact, nicht auf Projektlaufzeit. (3) Transparenz – fixe Preise, klare Deliverables, messbare ROI-Erwartungen. Keine Black Box.',
  },
  {
    question: 'Wie schnell kann ich starten?',
    answer: 'Bei einem Strategic Discovery Package können wir innerhalb von 1-2 Wochen starten. Bei End-to-End Transformationen hängt es von meiner aktuellen Auslastung ab – meist 2-4 Wochen. Strategic Retainer können wir fast sofort aktivieren. Nach einem initialen Call bekommst du einen konkreten Starttermin.',
  },
];

const InvestmentFAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Häufige Fragen zu Investment & Engagement
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles zu Pricing, Prozess und ROI-Erwartungen
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default InvestmentFAQ;
