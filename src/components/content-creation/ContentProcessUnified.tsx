
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Search, Users, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentProcessUnified = () => {
  const steps = [
    {
      number: "01",
      title: 'Strategie & Kickoff',
      description: 'Ziele definieren, Tonalität festlegen, SEO-Recherche (z. B. mit Ahrefs).'
    },
    {
      number: "02",
      title: 'Erstellung & Design',
      description: 'Inhalte entwickeln – Texte, Bilder, Videos – mit Fokus auf UX & Conversion.'
    },
    {
      number: "03",
      title: 'Review & Integration',
      description: 'Freigabe durch Sie, Einbindung über uns oder Ihr CMS.'
    },
    {
      number: "04",
      title: 'Testing & Launch',
      description: 'SEO-Checks, Performance, Struktur – dann Go Live.'
    },
    {
      number: "05",
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
            Unser Kampagnen-Prozess – von Strategie bis Skalierung
          </h2>
          
          {/* Desktop Version */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-brand-backgroundAlt rounded-lg p-6 pt-12 h-full shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary relative">
                  <div className="absolute -top-7 left-6 h-14 w-14 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                    <p className="text-brand-text">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile and Tablet Version */}
          <div className="lg:hidden">
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-4 min-w-max">
                {steps.map((step, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-brand-backgroundAlt rounded-lg p-6 pt-12 shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary relative">
                    <div className="absolute -top-7 left-6 h-14 w-14 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="mt-3">
                      <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                      <p className="text-brand-text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Formats Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6 text-brand-heading">
            Content, der gefunden wird – und konvertiert
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            Content-Formate, die Ihre Ziele unterstützen
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <div key={index} className="bg-brand-backgroundAlt p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-brand-primary/10 mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-brand-heading">{format.title}</h3>
                      <p className="text-brand-text">{format.description}</p>
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
