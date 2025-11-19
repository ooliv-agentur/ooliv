import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Users, TrendingUp, ArrowRight, CheckCircle2, Award, Target, Zap } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Button } from '@/components/ui/button';

const AiTechWhyUs = () => {
  const agencyStrengths = [
    {
      icon: Award,
      title: "16+ Jahre Digital-Expertise",
      description: "Langjährige Erfahrung in digitaler Transformation, kombiniert mit aktueller KI-Kompetenz"
    },
    {
      icon: Cpu,
      title: "50+ KI-Integrationen",
      description: "Praktische Erfahrung mit RAG-Systemen, Multi-Agent-Workflows und Custom AI Applications"
    },
    {
      icon: Target,
      title: "Business-Fokus statt Hype",
      description: "Wir integrieren KI strategisch – mit echten Ergebnissen und messbaren Effizienzgewinnen"
    },
    {
      icon: Zap,
      title: "Messbare Erfolge",
      description: "Durchschnittlich 40% Zeitersparnis und 60% weniger manueller Aufwand"
    }
  ];

  const teamCapabilities = [
    {
      icon: Cpu,
      title: "KI-Engineers",
      description: "RAG-Systeme, Multi-Agent-Workflows und Custom AI Applications"
    },
    {
      icon: TrendingUp,
      title: "Data Scientists",
      description: "Datenanalyse, Modell-Training und Performance-Optimierung"
    },
    {
      icon: Users,
      title: "Process Consultants",
      description: "Change Management und Team-Enablement für nachhaltige KI-Integration"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Warum ooliv für Ihre KI-Integration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategische KI-Expertise kombiniert mit technischer Umsetzungskraft
            </p>
          </div>
        </Reveal>

        {/* Main Content: Agency Expertise (70%) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {agencyStrengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-xl border border-border h-full">
                  <div className="h-12 w-12 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main Agency Content (2 columns = 66%) */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  So arbeitet ooliv
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Seit über 16 Jahren entwickelt ooliv digitale Lösungen für B2B-Unternehmen. In den letzten 3 Jahren haben wir über 50 KI-Integrationsprojekte erfolgreich umgesetzt – von der Strategie über die Implementierung bis zum Team-Enablement.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Unser Team kombiniert strategisches KI-Verständnis mit praktischer Umsetzung: KI-Engineers entwickeln RAG-Systeme und Multi-Agent-Workflows, Data Scientists optimieren Modelle und Performance, und Process Consultants sorgen für nachhaltiges Change Management.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      -40%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Zeitersparnis
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      -60%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Manueller Aufwand
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      4.8/5
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Zufriedenheit
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Unser spezialisiertes KI-Team
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {teamCapabilities.map((capability, index) => {
                    const IconComponent = capability.icon;
                    return (
                      <div key={index} className="flex flex-col items-start gap-2">
                        <div className="h-10 w-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-accent-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {capability.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Personal Touch with Uli (1 column = 33%) */}
          <div className="lg:col-span-1">
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-accent-primary/5 to-accent-primary/10 p-6 rounded-xl border border-accent-primary/20 sticky top-24">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-foreground">
                    Uli Schönleber
                  </h3>
                  <p className="text-sm text-accent-primary font-semibold">
                    Ihr persönlicher Ansprechpartner
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Als KI-Strategieberater leite ich Ihr Projekt und koordiniere unser spezialisiertes Team von der Analyse bis zur erfolgreichen Implementierung.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Direkte Begleitung von Strategie bis Umsetzung</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">16+ Jahre digitale Transformation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">50+ KI-Integrationsprojekte</span>
                    </div>
                  </div>
                </div>
                <Link to="/ueber-uns">
                  <Button variant="outline" className="w-full group">
                    Mehr über unser Team
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTechWhyUs;
