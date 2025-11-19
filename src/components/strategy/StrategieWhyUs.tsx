import React from 'react';
import { Award, Target, TrendingUp, Palette, Code, Users, ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StrategieWhyUs = () => {
  const uliCredentials = [
    {
      icon: Award,
      text: "16+ Jahre Digital-Expertise"
    },
    {
      icon: Target,
      text: "100+ erfolgreiche Projekte"
    },
    {
      icon: Users,
      text: "Direkt mit mir – keine Junior-Teams"
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
              Ihr strategischer Partner für digitale Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Persönliche Beratung trifft auf spezialisierte Umsetzungskraft
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Uli's Credentials (50%) */}
          <Reveal>
            <div className="bg-card p-8 rounded-xl border border-border h-full">
              <div className="flex flex-col gap-6">
                <div className="w-full max-w-[280px] mx-auto md:mx-0">
                  <img
                    src="/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
                    alt="Uli Schönleber"
                    className="rounded-xl w-full aspect-square object-cover shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Uli Schönleber
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Ihr Digital Strategy Lead
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Seit über 16 Jahren helfe ich B2B-Unternehmen im DACH-Raum dabei, digital besser zu werden. Dabei unterstützt mich ein spezialisiertes Team für Design, Entwicklung und Content. Sie arbeiten direkt mit mir als Ihrem Strategy Lead – keine Junior-Teams, keine Agentur-Hierarchie.
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

          {/* Right: Team Capabilities (50%) */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Unterstützt von Spezialisten
                </h3>
                <div className="space-y-4">
                  {teamCapabilities.map((capability, index) => {
                    const IconComponent = capability.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{capability.title}</h4>
                          <p className="text-sm text-muted-foreground">{capability.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Messbare Erfolge
                </h3>
                <div className="space-y-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{metric.value}</span>
                      <span className="text-sm text-muted-foreground text-right">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/ueber-uns" className="mt-6 block">
                  <Button variant="outline" className="w-full">
                    Das komplette Team kennenlernen
                    <ArrowRight className="ml-2 h-4 w-4" />
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
