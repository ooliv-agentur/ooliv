import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Code, ArrowRight, CheckCircle2, Palette, TrendingUp, Award } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Button } from '@/components/ui/button';

const WebDesignWhyUs = () => {
  const agencyStrengths = [
    {
      icon: Award,
      title: "16+ Jahre Design-Expertise",
      description: "Über 100 erfolgreiche Webprojekte für B2B-Unternehmen im DACH-Raum"
    },
    {
      icon: Target,
      title: "Conversion-Fokus",
      description: "Websites, die nicht nur schön aussehen, sondern auch messbar konvertieren"
    },
    {
      icon: Palette,
      title: "Design-System-Ansatz",
      description: "Konsistente, skalierbare Design-Systeme statt einmaliger Pixel-Perfektion"
    },
    {
      icon: TrendingUp,
      title: "Messbare Erfolge",
      description: "Durchschnittlich +180% Conversion-Rate bei unseren Projekten"
    }
  ];

  const teamCapabilities = [
    {
      icon: Palette,
      title: "UX/UI Designer",
      description: "Conversion-optimierte Interfaces, die Besucher zu Kunden machen"
    },
    {
      icon: Code,
      title: "Frontend Developer",
      description: "React, Tailwind CSS, responsive & performance-optimiert"
    },
    {
      icon: Users,
      title: "Content Strategist",
      description: "Texte und Strukturen, die Ihre Zielgruppe überzeugen"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Warum ooliv für professionelles Webdesign?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Design-Expertise trifft auf technische Umsetzungskraft
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
                  ooliv entwickelt Websites, die nicht nur schön aussehen, sondern auch messbar konvertieren. Wir kombinieren strategisches UX-Design mit modernster Technologie und conversion-optimierter Content-Architektur. Dabei beginnen wir immer mit einer klaren <Link to="/strategie" className="text-primary hover:underline font-medium">Strategie-First-Beratung</Link>.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Unser Team aus UX/UI Designern, Frontend Developern und Content-Strategen arbeitet nach einem klaren Design-System-Ansatz: konsistent, skalierbar und fokussiert auf Ihre Business-Ziele statt einmaliger Pixel-Perfektion.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Webprojekte
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      +180%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Conversion-Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">
                      4.9/5
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
                  Unser spezialisiertes Team
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
                    Als Webdesign-Lead begleite ich Sie persönlich von der ersten Idee bis zum erfolgreichen Launch und koordiniere unser Design- und Development-Team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Direkte Zusammenarbeit – kein Outsourcing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">16+ Jahre Design-Expertise</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">100+ erfolgreiche Webprojekte</span>
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

export default WebDesignWhyUs;
