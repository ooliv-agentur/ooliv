import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsCTANew = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className={getSectionClasses('large', 'mint')}>
      <div className={getContainerClasses('narrow')}>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
            Lassen Sie uns reden — ohne Agentur-Geschwätz.
          </h2>
          <p className="text-lg text-brand-text mb-8 max-w-2xl mx-auto">
            Sie brauchen Klarheit, Struktur und ein digitales System, das für Sie arbeitet? Dann wird&apos;s Zeit für ein erstes Gespräch.
          </p>
          
          <Button 
            variant="primary"
            size="lg"
            onClick={handleOpenLeadForm}
            className="group"
          >
            Unverbindlich anfragen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTANew;
