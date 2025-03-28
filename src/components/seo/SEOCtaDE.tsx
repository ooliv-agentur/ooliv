
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOCtaDE = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-ooliv-black to-ooliv-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          SEO, das wirkt – lokal & skalierbar
        </h2>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          SEO ist kein Projekt – sondern ein strategischer Hebel für nachhaltiges Wachstum. 
          Lassen Sie uns gemeinsam das volle Potenzial Ihrer Website entfalten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-ooliv-green text-ooliv-black hover:bg-ooliv-green/90 text-lg py-7 font-bold"
            asChild
          >
            <Link to="/de/kontakt">
              <FileCheck className="mr-3 h-6 w-6" />
              Projekt starten →
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-ooliv-black text-lg py-7 font-bold"
            asChild
          >
            <Link to="/de/kontakt">
              <PhoneCall className="mr-3 h-6 w-6" />
              Strategiegespräch buchen →
            </Link>
          </Button>
        </div>
        
        <p className="text-lg text-white">
          <span className="font-bold">100+ erfolgreich umgesetzte Projekte</span> • 
          <span className="mx-3">Vertrauen von führenden Unternehmen</span> • 
          <span className="font-bold">Strategien, die messbar wirken</span>
        </p>
      </div>
    </section>
  );
};

export default SEOCtaDE;
