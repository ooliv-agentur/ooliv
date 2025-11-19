import React from 'react';
import { Search, Rocket, RefreshCw, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const engagementModels = [
  {
    icon: Search,
    badge: 'Strategic Discovery',
    title: 'Strategic Discovery Package',
    price: '€15.000 – €25.000',
    duration: '4–6 Wochen',
    description: 'Fundierte strategische Basis für erfolgreiche Digital-Transformationen. Ideal für Unternehmen, die Klarheit über ihre digitale Strategie, Produktvision oder UX-Roadmap brauchen.',
    process: [
      { phase: 'Woche 1-2', title: 'Discovery & Research', items: ['Stakeholder Interviews', 'Market & Competitor Analysis', 'User Research & Data Analysis'] },
      { phase: 'Woche 3-4', title: 'Strategy Definition', items: ['Strategic Framework Development', 'Opportunity Prioritization', 'Roadmap Planning'] },
      { phase: 'Woche 5-6', title: 'Delivery & Handover', items: ['Strategy Presentation', 'Implementation Roadmap', 'Success Metrics Definition'] },
    ],
    deliverables: [
      'Strategic Assessment Report (30-50 Seiten)',
      'Product/UX Strategy Framework',
      'Prioritized Opportunity Backlog',
      'Implementation Roadmap (6-12 Monate)',
      'Success Metrics & KPI Framework',
      'Executive Presentation Deck',
    ],
    outcomes: [
      'Klare strategische Richtung statt diffuser Ideen',
      'Priorisierte Roadmap mit Business Impact',
      'Reduziertes Risiko durch validierte Annahmen',
      'Alignment zwischen Business & Tech',
    ],
    idealFor: 'C-Level, die vor wichtigen Digital-Entscheidungen stehen oder strategische Klarheit brauchen.',
  },
  {
    icon: Rocket,
    badge: 'End-to-End Transformation',
    title: 'End-to-End Product & UX Transformation',
    price: '€40.000 – €80.000',
    duration: '8–16 Wochen',
    description: 'Vollständige strategische Transformation von Discovery bis Implementation. Für Unternehmen, die nicht nur wissen wollen WAS zu tun ist, sondern es auch umgesetzt haben wollen.',
    process: [
      { phase: 'Phase 1', title: 'Strategic Discovery (2-3 Wochen)', items: ['Deep Dive Analysis', 'Strategy Framework', 'Roadmap Definition'] },
      { phase: 'Phase 2', title: 'Concept & Design (3-5 Wochen)', items: ['UX Concept Development', 'Design System', 'Prototyping & Testing'] },
      { phase: 'Phase 3', title: 'Implementation Leadership (3-8 Wochen)', items: ['Development Oversight', 'Quality Assurance', 'Launch Strategy'] },
    ],
    deliverables: [
      'Strategic Discovery Package (komplett)',
      'UX Concept & User Flows',
      'Design System & Component Library',
      'High-Fidelity Prototypes',
      'Implementation Oversight & QA',
      'Performance & Analytics Setup',
      'Launch Strategy & Optimization Plan',
    ],
    outcomes: [
      'Nicht nur Strategy, sondern live Implementation',
      'Messbare Business Outcomes (Conversion, Retention, Revenue)',
      'Skalierbare Design & Tech Foundation',
      'Reduzierte Time-to-Market durch klaren Prozess',
    ],
    idealFor: 'Unternehmen, die eine strategische Transformation wirklich durchziehen wollen – nicht nur planen.',
  },
  {
    icon: RefreshCw,
    badge: 'Ongoing Advisory',
    title: 'Strategic Retainer',
    price: '€8.000 – €15.000/Monat',
    duration: 'Ongoing (min. 6 Monate)',
    description: 'Kontinuierliche strategische Begleitung für Unternehmen, die langfristig auf strategischer Excellence setzen. Perfekt für scale-ups und etablierte Firmen mit laufenden Transformationen.',
    process: [
      { phase: 'Weekly', title: 'Strategic Touchpoints', items: ['Weekly Strategy Calls', 'Roadmap Reviews', 'Quick Decision Support'] },
      { phase: 'Monthly', title: 'Deep Dives', items: ['Strategic Workshops', 'Quarterly Planning', 'Performance Reviews'] },
      { phase: 'Ongoing', title: 'Continuous Support', items: ['Slack/Teams Access', 'Ad-hoc Consulting', 'Thought Leadership'] },
    ],
    deliverables: [
      '8-15h strategische Beratung pro Monat',
      'Wöchentliche Strategy Calls',
      'Quartalsweise Strategic Reviews',
      'Ad-hoc Decision Support',
      'Kontinuierliche Roadmap Optimization',
      'Team Coaching & Upskilling',
      'Priority Support via Slack/Teams',
    ],
    outcomes: [
      'Continuous strategic guidance statt einmalige Projekte',
      'Schnellere Entscheidungen durch direkten Zugang',
      'Vermeidung strategischer Fehler in Echtzeit',
      'Langfristige Partnerschaft mit strategischem Sparringspartner',
    ],
    idealFor: 'C-Level und Product Leaders, die einen strategischen Sparringspartner auf Abruf wollen.',
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
              Drei Engagement-Modelle für strategische Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wähle das Investment-Modell, das zu deiner aktuellen Phase passt – oder kombiniere sie für maximalen Impact.
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
                  <h4 className="text-lg font-semibold text-foreground mb-4">Prozess</h4>
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
                  <h4 className="text-lg font-semibold text-foreground mb-4">Deliverables</h4>
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
                  <h4 className="text-lg font-semibold text-foreground mb-4">Expected Outcomes</h4>
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
                  Investment besprechen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Kombination Hinweis */}
        <Reveal>
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Kombination möglich</h3>
            <p className="text-muted-foreground">
              Die meisten erfolgreichen Transformationen starten mit dem <strong>Strategic Discovery Package</strong>, 
              gehen dann in die <strong>End-to-End Transformation</strong> über und werden langfristig durch einen 
              <strong> Strategic Retainer</strong> begleitet. Lass uns besprechen, welcher Weg für dich am sinnvollsten ist.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EngagementModels;
