
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOCtaDE = () => {
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-heading mb-4">
          SEO, das wirkt – lokal & skalierbar
        </h2>
        
        <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
          SEO ist kein Projekt – sondern ein strategischer Hebel für nachhaltiges Wachstum. 
          Lassen Sie uns gemeinsam das volle Potenzial Ihrer Website entfalten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primaryHover text-base py-6 font-medium font-sans"
            asChild
          >
            <Link to="/de/kontakt">
              <FileCheck className="mr-2 h-5 w-5" />
              Projekt starten →
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-base py-6 font-medium font-sans"
            asChild
          >
            <Link to="/de/kontakt">
              <PhoneCall className="mr-2 h-5 w-5" />
              Strategiegespräch buchen →
            </Link>
          </Button>
        </div>
        
        <p className="text-sm text-brand-text">
          <span className="font-bold">100+ erfolgreich umgesetzte Projekte</span> • 
          <span className="mx-2">Vertrauen von führenden Unternehmen</span> • 
          <span className="font-bold">Strategien, die messbar wirken</span>
        </p>
      </div>
    </section>
  );
};

export default SEOCtaDE;
