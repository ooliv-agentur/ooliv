
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Code, Search, Lightbulb } from 'lucide-react';
import { Link } from "react-router-dom";

const WiesbadenServicesSection = () => {
  const handleLearnMore = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            Ihre Werbeagentur Wiesbaden für messbare Erfolge
          </h2>
          <p className="text-xl mb-6 text-brand-primary max-w-3xl mx-auto">
            Digitale Lösungen, die Ihr Unternehmen nachhaltig voranbringen
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-brand-text">
            Als spezialisierte Werbeagentur in Wiesbaden entwickeln wir strategische Online-Auftritte, die Ihre Zielgruppe erreichen und Geschäftsergebnisse verbessern. Professionell, zielgerichtet und mit nachweisbaren Resultaten.
          </p>
          <Button 
            onClick={handleLearnMore}
            className="bg-brand-accent hover:bg-brand-accent/90 text-brand-text px-8 py-3"
          >
            Mehr erfahren
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-brand-heading">Webdesign</h3>
            <p className="text-brand-text mb-4">
              Professionelle Websites, die Ihre Wiesbadener Zielgruppe überzeugen und Vertrauen schaffen.
            </p>
            <Link 
              to="/webdesign" 
              className="inline-flex items-center text-brand-primary hover:text-brand-primary/90 transition-colors"
            >
              Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-brand-heading">Entwicklung</h3>
            <p className="text-brand-text mb-4">
              Technisch ausgereifte Lösungen für nachhaltiges Wachstum Ihres Unternehmens.
            </p>
            <Link 
              to="/webentwicklung" 
              className="inline-flex items-center text-brand-primary hover:text-brand-primary/90 transition-colors"
            >
              Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-brand-heading">SEO</h3>
            <p className="text-brand-text mb-4">
              Bessere Sichtbarkeit in Wiesbaden und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen.
            </p>
            <Link 
              to="/seo-optimierung" 
              className="inline-flex items-center text-brand-primary hover:text-brand-primary/90 transition-colors"
            >
              Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-brand-heading">Strategie</h3>
            <p className="text-brand-text mb-4">
              Datenbasierte Konzepte, die Ihre Marktposition stärken und Umsätze steigern.
            </p>
            <Link 
              to="/strategie" 
              className="inline-flex items-center text-brand-primary hover:text-brand-primary/90 transition-colors"
            >
              Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenServicesSection;
