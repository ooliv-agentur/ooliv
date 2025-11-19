import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Code, Search } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Button } from '@/components/ui/button';

const RelatedServicesGrid = () => {
  const relatedServices = [
    {
      icon: Palette,
      title: "Webdesign & UX",
      description: "Conversion-optimierte Designs, die Ihre Markenwerte transportieren und messbar mehr Anfragen generieren.",
      link: "/lp/webdesign",
      image: "/lovable-uploads/6e8f3f4b-5d3f-4be8-8fb7-7ae3bb59e55f.png"
    },
    {
      icon: Code,
      title: "KI-Integration",
      description: "Intelligente Automatisierung Ihrer Geschäftsprozesse – von Content-Erstellung bis Kundenservice.",
      link: "/lp/ki-integration",
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Technisches SEO, Content-Strategie und nachhaltige Rankings für mehr organische Sichtbarkeit.",
      link: "/lp/seo-optimierung",
      image: "/lovable-uploads/6e8f3f4b-5d3f-4be8-8fb7-7ae3bb59e55f.png"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Verwandte Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nach der Strategie kommt die Umsetzung – mit diesen Services setzen wir Ihre digitale Transformation um.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link 
                key={index}
                to={service.link}
                className="group"
              >
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default RelatedServicesGrid;
