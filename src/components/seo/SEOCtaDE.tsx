
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const SEOCtaDE = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            SEO, das wirkt – lokal & skalierbar
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
            SEO ist kein Projekt – sondern ein strategischer Hebel für nachhaltiges Wachstum. 
            Lassen Sie uns gemeinsam das volle Potenzial Ihrer Website entfalten.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-brand-primary text-white hover:bg-brand-primaryHover text-base py-6 font-medium font-sans"
              onClick={handleOpenLeadForm}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Beratungsgespräch anfordern
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SEOCtaDE;
