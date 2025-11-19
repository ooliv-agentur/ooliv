import React from 'react';
import { Search, Rocket, RefreshCw, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const engagementModels = [
  {
    icon: Search,
    badge: 'Strategie-Paket',
    title: 'Strategie-Paket: Klarheit & Roadmap',
    price: '€15.000 – €25.000',
    duration: '4–6 Wochen',
    description: 'Sie bekommen einen klaren Plan, was digital zu tun ist und in welcher Reihenfolge. Perfekt, wenn Sie wissen wollen, wo Sie stehen und welche konkreten Schritte jetzt Sinn machen.',
    process: [
      { phase: 'Woche 1-2', title: 'Analyse & Gespräche', items: ['Ich spreche mit Ihnen und Ihrem Team', 'Schaue mir Ihre Website & Wettbewerber an', 'Analysiere Ihre Daten & User-Verhalten'] },
      { phase: 'Woche 3-4', title: 'Strategie entwickeln', items: ['Klare Prioritäten festlegen', 'Konkrete Maßnahmen definieren', 'Roadmap für 6-12 Monate erstellen'] },
      { phase: 'Woche 5-6', title: 'Übergabe & Präsentation', items: ['Strategie-Präsentation (inkl. Begründung)', 'Detaillierter Umsetzungsplan', 'Messbare Erfolgskriterien definieren'] },
    ],
    deliverables: [
      'Strategie-Dokument (30-50 Seiten, verständlich geschrieben) – zeigt wo Sie stehen und was zu tun ist',
      'Konkrete Maßnahmen-Roadmap für die nächsten 6-12 Monate – priorisiert nach Business-Impact',
      'User-Journey & Conversion-Optimierung Plan – wo verlieren Sie aktuell Kunden?',
      'Wettbewerbs-Analyse – was machen andere besser? Was können wir davon lernen?',
      'KPI-Framework – welche Zahlen müssen Sie im Auge behalten?',
      'Präsentation für Ihr Team – alle Ergebnisse verständlich aufbereitet',
    ],
    outcomes: [
      'Sie wissen genau, was als nächstes zu tun ist (keine Unsicherheit mehr)',
      'Klare Prioritäten statt zu vielen gleichzeitigen Projekten',
      'Weniger Risiko durch fundierte Entscheidungsgrundlage',
      'Ihr Team zieht an einem Strang (alle verstehen die Strategie)',
    ],
    idealFor: 'Geschäftsführer und Entscheider, die vor wichtigen digitalen Entscheidungen stehen oder einfach mal Klarheit brauchen, wo sie digital wirklich stehen.',
  },
  {
    icon: Rocket,
    badge: 'Komplett-Transformation',
    title: 'Komplett-Transformation: Von Strategie bis Go-Live',
    price: '€40.000 – €80.000',
    duration: '8–16 Wochen',
    description: 'Sie bekommen nicht nur einen Plan, sondern die fertige Lösung. Von der Strategie über das UX-Konzept bis zur technischen Umsetzung – alles aus einer Hand. Am Ende geht Ihre neue Website/Plattform live.',
    process: [
      { phase: 'Phase 1', title: 'Strategie (2-3 Wochen)', items: ['Wie im Strategie-Paket – Analyse, Gespräche, Plan', 'Klare Roadmap & Prioritäten', 'Abstimmung mit Ihrem Team'] },
      { phase: 'Phase 2', title: 'UX-Konzept & Design (3-5 Wochen)', items: ['Ich entwickle das komplette UX-Konzept', 'Modernes Design-System erstellen', 'Prototyp zum Anschauen & Testen'] },
      { phase: 'Phase 3', title: 'Umsetzung & Launch (3-8 Wochen)', items: ['Technische Entwicklung (mit meinem Team)', 'Qualitätssicherung & Testing', 'Go-Live & Optimierung'] },
    ],
    deliverables: [
      'Komplettes Strategie-Paket (siehe oben) – Analyse, Plan, Roadmap',
      'Durchdachtes UX-Konzept – wie Besucher zu Kunden werden',
      'Komplettes Design inkl. Design-System – modern, professionell, on-brand',
      'Klickbarer Prototyp – Sie sehen vor der Umsetzung, wie es aussieht',
      'Fertige Website/Plattform – entwickelt, getestet, live',
      'Analytics & Tracking Setup – ab Tag 1 wissen Sie, was funktioniert',
      'Performance-Optimierung – schnelle Ladezeiten, SEO-optimiert',
      'Launch-Support & erste Optimierungen – ich begleite den Go-Live',
    ],
    outcomes: [
      'Fertige Lösung statt nur Theorie – am Ende läuft alles',
      'Messbar bessere Ergebnisse: mehr Anfragen, mehr Verkäufe (+140% Conversion im Schnitt)',
      'Zukunftssichere Basis – skalierbar und professionell aufgebaut',
      'Schneller Go-Live durch strukturierten Prozess (keine Verzögerungen)',
    ],
    idealFor: 'Unternehmen, die nicht nur wissen wollen, was zu tun ist, sondern die Transformation wirklich durchziehen wollen – mit einem Partner, der den kompletten Prozess begleitet.',
  },
  {
    icon: RefreshCw,
    badge: 'Laufende Beratung',
    title: 'Laufende Beratung: Ihr strategischer Partner',
    price: '€8.000 – €15.000/Monat',
    duration: 'Laufend (mind. 6 Monate)',
    description: 'Ich bleibe an Ihrer Seite – als Ihr strategischer Sparringspartner für alle digitalen Themen. Perfekt, wenn Sie kontinuierlich jemanden brauchen, der mitdenkt, berät und hilft, die richtigen Entscheidungen zu treffen.',
    process: [
      { phase: 'Wöchentlich', title: 'Regelmäßiger Austausch', items: ['Wöchentlicher Strategy Call (30-60 Min)', 'Roadmap-Updates besprechen', 'Schnelle Entscheidungs-Unterstützung'] },
      { phase: 'Monatlich', title: 'Strategische Sessions', items: ['Monatliches Strategic Deep Dive', 'Quartalsplanung & Priorisierung', 'Performance-Review (was läuft, was nicht?)'] },
      { phase: 'Jederzeit', title: 'Direkter Zugang', items: ['Slack/Teams-Zugang für schnelle Fragen', 'Ad-hoc Beratung bei wichtigen Themen', 'Input zu neuen Ideen & Innovationen'] },
    ],
    deliverables: [
      '8-15 Stunden strategische Beratung pro Monat – flexibel nach Bedarf',
      'Wöchentliche Strategy Calls – wir bleiben im engen Austausch',
      'Quartalsweise strategische Reviews – schauen gemeinsam, wo wir stehen',
      'Ad-hoc Support bei wichtigen Entscheidungen – Sie haben mich bei Bedarf',
      'Laufende Optimierung Ihrer Roadmap – Prioritäten passen sich an',
      'Team-Coaching wenn gewünscht – ich helfe Ihrem Team, besser zu werden',
      'Priority Support via Slack/Teams – schnelle Antworten auf Ihre Fragen',
    ],
    outcomes: [
      'Sie haben immer jemanden für strategische Fragen (kein "alleine durchwursteln")',
      'Schnellere, bessere Entscheidungen durch direkten Zugang zu Expertise',
      'Weniger Fehler durch frühzeitige Beratung (bevor es teuer wird)',
      'Langfristige Partnerschaft – ich lerne Ihr Business wirklich kennen',
    ],
    idealFor: 'Geschäftsführer und Führungskräfte, die einen strategischen Partner auf Abruf wollen – jemanden, der mitdenkt und bei allen digitalen Themen zur Seite steht.',
  },
];

const EngagementModels = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              So können wir zusammenarbeiten
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drei Möglichkeiten – je nachdem, was Sie gerade brauchen. Mit klaren Preisen, konkreten Ergebnissen und bewährter Expertise aus 16+ Jahren.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="space-y-12">
          {engagementModels.map((model, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <model.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full mb-3">
                        <span className="text-xs font-medium text-secondary-foreground">{model.badge}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{model.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="text-lg font-semibold text-primary">{model.price}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{model.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8">{model.description}</p>

                {/* Process */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Wie läuft's ab?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {model.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="bg-secondary/20 p-4 rounded-xl">
                        <div className="text-xs font-medium text-primary mb-2">{step.phase}</div>
                        <div className="text-sm font-semibold text-foreground mb-2">{step.title}</div>
                        <ul className="space-y-1">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Was Sie konkret bekommen</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {model.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Was es Ihnen bringt</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {model.outcomes.map((outcome, outIndex) => (
                      <div key={outIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="bg-primary/5 p-4 rounded-xl mb-6">
                  <div className="text-sm font-medium text-foreground mb-1">Ideal für:</div>
                  <div className="text-sm text-muted-foreground">{model.idealFor}</div>
                </div>

                {/* CTA */}
                <Button 
                  onClick={handleOpenLeadForm}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  30 Min. unverbindlich – ich berate Sie, ob dieses Paket zu Ihrer Situation passt
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Kombination Hinweis */}
        <Reveal>
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Pakete können kombiniert werden</h3>
            <p className="text-muted-foreground mb-4">
              Viele meiner Kunden starten mit dem <strong>Strategie-Paket</strong> (um Klarheit zu bekommen), 
              gehen dann in die <strong>Komplett-Transformation</strong> über (um es umzusetzen) und nutzen anschließend die 
              <strong> Laufende Beratung</strong> (um am Ball zu bleiben).
            </p>
            <p className="text-muted-foreground">
              Im kostenlosen Erstgespräch schauen wir gemeinsam, welcher Weg für Ihre Situation am meisten Sinn macht.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EngagementModels;
