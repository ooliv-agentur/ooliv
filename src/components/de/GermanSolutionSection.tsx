
import React from 'react';
import { ArrowRight, TrendingDown, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const GermanSolutionSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const problems = [
    {
      icon: TrendingDown,
      title: "Website generiert keine Anfragen",
      description: "Viel Traffic, aber wenig Leads? Das frustriert."
    },
    {
      icon: Search,
      title: "Bei Google nicht auffindbar",
      description: "Ihre Konkurrenz steht auf Seite 1, Sie nicht."
    },
    {
      icon: Users,
      title: "Komplizierte Agentur-Zusammenarbeit",
      description: "Endlose Meetings, aber wenig Fortschritt."
    }
  ];

  return (
    <section className="py-24 bg-secondary font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-foreground leading-tight">
              Kennen Sie diese Probleme?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <problem.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Wir lösen sie pragmatisch und nachhaltig.
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
              Von <Link to="/webdesign" className="text-primary hover:underline font-medium">Website-Entwicklung</Link> über{' '}
              <Link to="/seo-optimierung" className="text-primary hover:underline font-medium">SEO-Optimierung</Link> bis hin zu{' '}
              <Link to="/content-erstellung" className="text-primary hover:underline font-medium">Content-Marketing</Link> – 
              alles koordiniert aus einer Hand. Inklusive{' '}
              <Link to="/ki-technologien" className="text-primary hover:underline font-medium">KI-Integration</Link> und{' '}
              <Link to="/google-ads" className="text-primary hover:underline font-medium">Google Ads</Link>.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[44px] min-w-[44px]"
                onClick={handleStartProject}
                aria-label="Kostenloses Website-Konzept anfordern"
              >
                Kostenloses Konzept sichern
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
