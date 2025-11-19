import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Database, Server, ArrowRight, Award, Clock, Zap } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Button } from '@/components/ui/button';

const WebDevWhyUs = () => {
  const agencyStrengths = [
    {
      icon: Code2,
      title: "16+ Jahre Entwicklungs-Erfahrung",
      description: "Seit über 16 Jahren entwickle ich Web-Anwendungen für B2B-Unternehmen – von WordPress bis zu Custom React-Apps."
    },
    {
      icon: Award,
      title: "Persönlicher Ansprechpartner",
      description: "Sie arbeiten direkt mit mir an Ihrem Development-Projekt – keine Outsourcing-Teams, keine Agentur-Hierarchie."
    },
    {
      icon: Zap,
      title: "Spezialisiertes Tech-Team",
      description: "Ich koordiniere unser ooliv-Team aus Frontend-, Backend- und DevOps-Spezialisten für Ihre technische Umsetzung."
    },
    {
      icon: Server,
      title: "150+ erfolgreiche Launches",
      description: "Über 150 Web-Projekte erfolgreich gelauncht: 99.9% Uptime, <2s Ladezeit, moderne Tech-Stacks (React, Node.js)."
    }
  ];

  const teamCapabilities = [
    {
      icon: Code2,
      title: "Uli Schönleber – Development Lead",
      description: "Begleitet Sie persönlich von der technischen Konzeption über die Entwicklung bis zum Launch."
    },
    {
      icon: Server,
      title: "Frontend Developer (Team ooliv)",
      description: "React, Vue.js, Performance-Optimierung & moderne UI-Frameworks."
    },
    {
      icon: Database,
      title: "Backend Developer (Team ooliv)",
      description: "APIs, Datenbanken, Server-Infrastruktur & Systemintegration."
    },
    {
      icon: Zap,
      title: "DevOps Engineer (Team ooliv)",
      description: "Hosting, CI/CD, Security & Performance-Monitoring."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ihr persönlicher Partner für Web-Entwicklung
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sie arbeiten direkt mit mir, Uli Schönleber, als Ihrem Development Lead – 
              keine Outsourcing-Teams, keine Agentur-Hierarchie. Ich koordiniere unser 
              ooliv-Team für Ihre technisch exzellente Umsetzung.
            </p>
          </div>
        </Reveal>

        {/* Main Content: 50/50 Balance */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
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

        {/* Two Column Layout: 50/50 Balance */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Uli's Personal Approach (50%) */}
          <div className="space-y-6">
            <Reveal>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  So arbeite ich mit Ihnen
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sie haben mich als festen Ansprechpartner für Ihr Development-Projekt – von 
                  der ersten technischen Konzeption bis zum finalen Launch. Ich koordiniere unser 
                  ooliv-Team und stelle sicher, dass Frontend, Backend und DevOps perfekt 
                  zusammenspielen.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Gemeinsam entwickeln wir Ihre technische Lösung, setzen sie mit unserem 
                  spezialisierten Team um (Frontend, Backend, DevOps) und optimieren 
                  kontinuierlich. Klare Prozesse, direkte Kommunikation, messbare Performance.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      150+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Web-Projekte
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Uptime
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      &lt;2s
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ladezeit Ø
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Team Expertise (50%) */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ihr persönliches Development-Team
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ich koordiniere für Sie ein spezialisiertes Team aus erfahrenen 
                  Entwicklern. Gemeinsam verbinden wir moderne Web-Technologien mit 
                  solider Architektur – für Anwendungen, die technisch exzellent sind 
                  und Ihre Business-Ziele erreichen.
                </p>
                <div className="space-y-4">
                  {teamCapabilities.map((capability, index) => {
                    const IconComponent = capability.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {capability.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
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
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 inline-block">
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                Interessiert an einer persönlichen Zusammenarbeit? Ich freue mich darauf, 
                Sie und Ihr Development-Projekt kennenzulernen.
              </p>
              <Link to="/ueber-uns">
                <Button size="lg">
                  Mehr über mich und unser Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WebDevWhyUs;
