import React from 'react';
import { Award, Users, Target, TrendingUp, Code, Palette } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StrategieTeamExpertise = () => {
  const uliCredentials = [
    {
      icon: Award,
      text: "16+ Jahre Digital-Erfahrung"
    },
    {
      icon: Target,
      text: "100+ erfolgreiche Projekte"
    },
    {
      icon: TrendingUp,
      text: "+180% Lead-Qualität im Schnitt"
    }
  ];

  const teamCapabilities = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Conversion-optimierte Interfaces"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, WordPress, Headless CMS"
    },
    {
      icon: Users,
      title: "Content & SEO",
      description: "KI-gestützte Content-Strategien"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ihr strategischer Partner: Experte + eingespieltes Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Persönliche Beratung trifft auf spezialisierte Umsetzungskraft
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left: Uli's Credentials (60% width = 3 columns) */}
          <Reveal className="md:col-span-3">
            <div className="bg-card p-8 rounded-xl border border-border h-full">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-48 flex-shrink-0">
                  <img
                    src="/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
                    alt="Uli Schönleber"
                    className="rounded-xl w-full aspect-square object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Uli Schönleber
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Ihr Digital Strategy Lead
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Seit über 16 Jahren helfe ich B2B-Unternehmen im DACH-Raum dabei, digital besser zu werden. Sie arbeiten direkt mit mir – keine Junior-Teams, keine Agentur-Hierarchie.
                  </p>
                  <div className="space-y-3">
                    {uliCredentials.map((credential, index) => {
                      const IconComponent = credential.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground font-medium">{credential.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Team Capabilities (40% width = 2 columns) */}
          <div className="md:col-span-2">
            <Reveal>
              <div className="bg-card p-6 rounded-xl border border-border mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Unterstützt von Spezialisten
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Ein festes Team aus Designern, Entwicklern und Strategen – alle unter einem Dach in Mainz.
                </p>
                <div className="space-y-4">
                  {teamCapabilities.map((capability, index) => {
                    const IconComponent = capability.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-8 w-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{capability.title}</p>
                          <p className="text-xs text-muted-foreground">{capability.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Mehr über das Team und unsere Arbeitsweise erfahren?
                </p>
                <Link to="/ueber-uns">
                  <Button variant="outline" className="w-full">
                    Das komplette Team kennenlernen
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

export default StrategieTeamExpertise;
