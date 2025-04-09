
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOCta = () => {
  const { language } = useLanguage();
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
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
            asChild
          >
            <Link to={contactPath}>
              <FileCheck className="mr-2 h-5 w-5" />
              Request a Consultation
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-base py-6 font-medium font-sans"
            asChild
          >
            <Link to={contactPath}>
              <PhoneCall className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Link>
          </Button>
        </div>
        
        <p className="text-sm text-brand-text">
          <span className="font-bold">100+ successful projects</span> • 
          <span className="mx-2">Trusted by leading companies</span> • 
          <span className="font-bold">AI-powered SEO strategy for maximum impact</span>
        </p>
      </div>
    </section>
  );
};

export default SEOCta;

