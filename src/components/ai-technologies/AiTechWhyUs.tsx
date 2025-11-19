import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Users, TrendingUp, ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const AiTechWhyUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Warum ooliv für Ihre KI-Integration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategische KI-Expertise kombiniert mit technischer Umsetzungskraft
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Uli's Personal Touch */}
          <Reveal delay={0.1}>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Uli Schönleber
                  </h3>
                  <p className="text-accent-primary font-semibold mb-4">
                    Ihr KI-Strategiepartner
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>16+ Jahre digitale Transformation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>50+ KI-Integrationsprojekte</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      <span>Direkte Begleitung von Strategie bis Umsetzung</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Seit über 16 Jahren begleite ich Unternehmen bei der digitalen Transformation. Heute helfe ich B2B-Unternehmen, KI strategisch zu nutzen – ohne Hype, mit echten Ergebnissen und messbaren Effizienzgewinnen.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Team Support */}
          <Reveal delay={0.2}>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Unterstützt von KI-Spezialisten
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">KI-Engineers</h4>
                    <p className="text-sm text-muted-foreground">
                      RAG-Systeme, Multi-Agent-Workflows und Custom AI Applications
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Data Scientists</h4>
                    <p className="text-sm text-muted-foreground">
                      Datenanalyse, ML-Modelle und intelligente Automatisierung
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Process Consultants</h4>
                    <p className="text-sm text-muted-foreground">
                      Workflow-Automation und Change Management für nachhaltige Integration
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">40-60%</div>
                    <div className="text-xs text-muted-foreground">Zeitersparnis</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">70-80%</div>
                    <div className="text-xs text-muted-foreground">Weniger Aufwand</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-primary mb-1">95%</div>
                    <div className="text-xs text-muted-foreground">Zufriedenheit</div>
                  </div>
                </div>
              </div>

              <Link 
                to="/ueber-uns" 
                className="inline-flex items-center gap-2 text-accent-primary hover:gap-3 transition-all font-semibold"
              >
                Mehr über unser Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AiTechWhyUs;
