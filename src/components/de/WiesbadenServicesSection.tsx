
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Code, Search, BarChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const WiesbadenServicesSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const services = [
    {
      icon: Palette,
      title: "Webdesign",
      description: "Professionelle Websites, die Ihre Wiesbadener Zielgruppe überzeugen und Vertrauen schaffen."
    },
    {
      icon: Code,
      title: "Entwicklung",
      description: "Technisch ausgereifte Lösungen für nachhaltiges Wachstum Ihres Unternehmens."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Bessere Sichtbarkeit in Wiesbaden und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen."
    },
    {
      icon: BarChart,
      title: "Strategie",
      description: "Datenbasierte Konzepte, die Ihre Marktposition stärken und Umsätze steigern."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Ihre Werbeagentur Wiesbaden für messbare Erfolge
        </h2>
        
        <p className="text-center text-xl mb-6 text-brand-accent font-medium">
          Digitale Lösungen, die Ihr Unternehmen nachhaltig voranbringen
        </p>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Als spezialisierte Werbeagentur in Wiesbaden entwickeln wir strategische Online-Auftritte, die Ihre Zielgruppe erreichen und Geschäftsergebnisse verbessern. Professionell, zielgerichtet und mit nachweisbaren Resultaten.
        </p>
        
        <div className="text-center mb-16">
          <Button 
            variant="primary"
            size="lg" 
            className="group"
            onClick={handleStartProject}
          >
            Mehr erfahren
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-none shadow-none">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand-heading">
                  {service.title}
                </h3>
                <p className="text-brand-text mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="text-brand-primary hover:text-brand-primary/90 font-medium text-sm inline-flex items-center group">
                  Mehr erfahren 
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WiesbadenServicesSection;
