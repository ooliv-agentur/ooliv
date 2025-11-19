import React from 'react';
import { Award, Users, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const TeamSection = () => {
  const uliCredentials = [
    {
      icon: <Award className="h-5 w-5" />,
      text: "16+ Jahre Digital-Expertise"
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "100+ erfolgreiche Projekte"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Direkter Ansprechpartner – keine Junior-Teams"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      text: "Strategischer Sparringspartner auf Augenhöhe"
    }
  ];

  const teamCapabilities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "UX/UI Designer",
      description: "Strategisches Design für optimale User Experience"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Developer",
      description: "Moderne Web-Technologien & Performance"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Content Strategists",
      description: "SEO-optimierte Inhalte mit Conversion-Fokus"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "KI-Integration Specialists",
      description: "Praktische AI-Lösungen für Ihr Business"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Ihr Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expertise trifft Umsetzungsstärke
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Persönliche Beratung durch einen erfahrenen Digital-Strategen, unterstützt von einem professionellen Umsetzungsteam
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Uli Schönleber - 50% */}
          <div>
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-border shadow-lg">
                  <img
                    src="/lovable-uploads/9d4e66ab-9d30-49b8-8d85-0062e5c77d6f.png"
                    alt="Uli Schönleber - Digital Strategy Lead"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Uli Schönleber
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    Founder & Digital Strategy Lead
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ich führe Ihre digitale Transformation persönlich – mit 16+ Jahren Erfahrung und strategischem Blick für das Wesentliche. Sie arbeiten direkt mit mir, nicht mit Junior-Teams.
                  </p>
                  <div className="space-y-3">
                    {uliCredentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {credential.icon}
                        </div>
                        <span className="text-foreground">{credential.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Team Capabilities - 50% */}
          <div>
            <Reveal>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Unterstützt von Spezialisten
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Für die Umsetzung arbeiten wir mit einem eingespielten Team aus erfahrenen Spezialisten – jeder ein Experte auf seinem Gebiet. So kombinieren wir strategische Führung mit professioneller Execution.
                </p>
              </div>
            </Reveal>

            <StaggerReveal className="grid gap-6">
              {teamCapabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>

            <Reveal delay={0.6}>
              <div className="mt-8 text-center lg:text-left">
                <Link to="/ueber-uns">
                  <Button size="lg" variant="outline" className="group">
                    Das komplette Team kennenlernen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

export default TeamSection;
