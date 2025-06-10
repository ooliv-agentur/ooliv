
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Search, Users, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentProcessUnified = () => {
  const steps = [
    {
      icon: Target,
      title: 'Strategie & Kickoff',
      description: 'Ziele definieren, Tonalität festlegen, SEO-Recherche (z. B. mit Ahrefs).'
    },
    {
      icon: Search,
      title: 'Erstellung & Design',
      description: 'Inhalte entwickeln – Texte, Bilder, Videos – mit Fokus auf UX & Conversion.'
    },
    {
      icon: Users,
      title: 'Review & Integration',
      description: 'Freigabe durch Sie, Einbindung über uns oder Ihr CMS.'
    },
    {
      icon: Zap,
      title: 'Testing & Launch',
      description: 'SEO-Checks, Performance, Struktur – dann Go Live.'
    },
    {
      icon: TrendingUp,
      title: 'Laufende Content-Pakete',
      description: 'Monatliche Pakete zur Pflege, Optimierung & strategischen Weiterentwicklung.'
    }
  ];

  const contentFormats = [
    {
      icon: Target,
      title: "Website-Content",
      description: "Starke Startseiten, überzeugende Leistungsseiten und klare CTAs"
    },
    {
      icon: Search,
      title: "SEO-Content",
      description: "Keyword-optimierte Texte, die bei Google gefunden werden"
    },
    {
      icon: Users,
      title: "Social Content",
      description: "Visueller Content für LinkedIn, Instagram und weitere Kanäle"
    },
    {
      icon: Zap,
      title: "Conversion-Content",
      description: "Landing Pages und Sales-Texte, die zum Handeln motivieren"
    },
    {
      icon: TrendingUp,
      title: "Blog & Thought Leadership",
      description: "Expertenbeiträge, die Vertrauen aufbauen und Expertise zeigen"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6 text-brand-heading">
            So bringen wir Ihr Content-Projekt zum Erfolg
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            Von der Strategie bis zum Go-Live: unser bewährter 5-Schritte-Prozess sorgt für klare Strukturen und messbare Ergebnisse.
          </p>
          
          {/* Desktop Version - Two rows layout */}
          <div className="hidden md:block">
            {/* First row - 3 steps */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {steps.slice(0, 3).map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-brand-backgroundAlt rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-brand-heading">{step.title}</h3>
                        <p className="text-brand-text text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Second row - 2 steps centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {steps.slice(3, 5).map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index + 3} className="bg-brand-backgroundAlt rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-brand-heading">{step.title}</h3>
                        <p className="text-brand-text text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Version */}
          <div className="md:hidden space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-brand-backgroundAlt rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-medico-turquoise" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-heading">{step.title}</h3>
                      <p className="text-brand-text text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Formats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-brand-heading">
            Content, der gefunden wird – und konvertiert
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            Content-Formate, die Ihre Ziele unterstützen
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <div key={index} className="bg-brand-backgroundAlt p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-medico-turquoise" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-heading">{format.title}</h3>
                      <p className="text-brand-text text-sm">{format.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Additional link at the bottom */}
        <div className="text-center">
          <Button variant="link" asChild className="group">
            <Link to="/webentwicklung" className="flex items-center gap-2 text-brand-primary">
              Mehr über unsere Webentwicklung
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentProcessUnified;
