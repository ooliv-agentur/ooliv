
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOCta = () => {
  const { language } = useLanguage();
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-heading mb-4">
          SEO That Scales — Locally and Globally
        </h2>
        
        <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
          SEO isn't a checklist — it's a strategic lever for sustainable growth. Let's turn your website into a lead engine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primaryHover text-base py-6 font-medium font-sans"
            onClick={handleOpenLeadForm}
          >
            <FileCheck className="mr-2 h-5 w-5" />
            Request a Consultation
          </Button>
        </div>
        
        {/* Removed duplicate footer note - now handled by CTA component */}
      </div>
    </section>
  );
};

export default SEOCta;
