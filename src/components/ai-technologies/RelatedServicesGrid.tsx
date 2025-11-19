import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Code, FileText, Search, ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Button } from '@/components/ui/button';

const RelatedServicesGrid = () => {
  const services = [
    {
      icon: Target,
      title: "Digitale Strategie",
      description: "Von der Strategic Discovery über die Roadmap bis zur Umsetzung.",
      link: "/strategie"
    },
    {
      icon: Code,
      title: "Webentwicklung",
      description: "Technische Umsetzung Ihrer KI-Lösungen mit modernen Frameworks.",
      link: "/webentwicklung"
    },
    {
      icon: FileText,
      title: "Content-Erstellung",
      description: "KI-gestützte Content-Workflows für effiziente Content-Produktion.",
      link: "/content-erstellung"
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Technisches SEO und Performance-Optimierung für bessere Rankings.",
      link: "/seo-optimierung"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ergänzende Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Für eine ganzheitliche digitale KI-Integration
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={0.1 * index}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:border-accent-primary/50 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto hover:bg-transparent"
                    >
                      <span className="flex items-center gap-2 text-accent-primary group-hover/btn:gap-3 transition-all">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesGrid;
