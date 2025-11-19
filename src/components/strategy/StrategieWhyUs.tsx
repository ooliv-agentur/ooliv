import React from 'react';
import { Award, Target, TrendingUp, Palette, Code, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StrategieWhyUs = () => {
  const agencyStrengths = [
    {
      icon: Award,
      title: "16+ Jahre Digital-Expertise",
      description: "Erfahrung aus über 100 erfolgreichen Strategieprojekten im DACH-Raum"
    },
    {
      icon: Target,
      title: "Strategische Tiefe",
      description: "Von Strategic Discovery über Roadmap bis zur technischen Umsetzung"
    },
    {
      icon: Users,
      title: "Spezialisiertes Team",
      description: "UX/UI Designer, Full-Stack Developer und Content-Strategen"
    },
    {
      icon: TrendingUp,
      title: "Messbare Ergebnisse",
      description: "Durchschnittlich +180% Lead-Qualität, 95% Weiterempfehlung"
    }
  ];

  const teamCapabilities = [
    {
      icon: Palette,
      title: "UX/UI Designer",
      description: "Conversion-optimierte Interfaces"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "React, WordPress, Headless CMS"
    },
    {
      icon: Users,
      title: "Content & SEO",
      description: "KI-gestützte Content-Strategien"
    }
  ];

  const metrics = [
    { value: "+180%", label: "Lead-Qualität im Schnitt" },
    { value: "95%", label: "Weiterempfehlung" },
    { value: "4.9/5", label: "Kundenzufriedenheit" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Warum ooliv für Ihre digitale Transformation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategische Expertise trifft auf spezialisierte Umsetzungskraft
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
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
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
                  ooliv unterstützt B2B-Unternehmen im DACH-Raum dabei, digital besser zu werden. Wir verbinden strategische Expertise mit spezialisierter Umsetzungskraft – von der Strategic Discovery über Roadmaps bis zur technischen Implementierung.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Unser Team kombiniert strategisches Denken mit praktischer Umsetzung: UX/UI Designer entwickeln conversion-optimierte Interfaces, Full-Stack Developer setzen mit modernsten Technologien um, und Content-Strategen sorgen für nachhaltige Sichtbarkeit.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
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
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
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
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20 sticky top-24">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-foreground">
                    Uli Schönleber
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    Ihr persönlicher Ansprechpartner
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Als Strategy Lead begleite ich Sie persönlich von der Analyse bis zur Umsetzung und koordiniere unser spezialisiertes Team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Direkte Zusammenarbeit – keine Hierarchie</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">16+ Jahre Digital-Expertise</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">100+ erfolgreiche Projekte</span>
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

export default StrategieWhyUs;
