
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const WiesbadenBeforeAfterSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">
          Ihre Website sollte Kunden gewinnen — nicht nur existieren.
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Viele Unternehmen in Wiesbaden haben Websites, die nicht aktiv zur Kundengewinnung beitragen. Als erfahrene Werbeagentur entwickeln wir digitale Auftritte, die Vertrauen schaffen, Mehrwert bieten und nachhaltig zum Geschäftserfolg führen.
        </p>
        <BeforeAfterSlider />
        <div className="mt-8 text-center">
          <p className="text-brand-text mb-6">
            Weitere Projekte zeigen wir Ihnen gerne persönlich — <a href="mailto:info@ooliv.de" className="text-brand-primary hover:underline">info@ooliv.de</a>
          </p>
          <Button 
            variant="primary"
            size="lg" 
            className="group"
            onClick={handleStartProject}
          >
            Mit ooliv durchstarten
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WiesbadenBeforeAfterSection;
