
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  footerNote?: string;
}

const CTA = ({ title, subtitle, primaryCta, secondaryCta, footerNote }: CTAProps) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-heading mb-5">
          {title || (language === 'de' 
            ? "Bereit, Ihre digitale Präsenz zu transformieren?" 
            : "Ready to transform your digital presence?")}
        </h2>
        
        <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
          {subtitle || (language === 'de' 
            ? "Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen." 
            : "Let's discuss how our team can help your business achieve its online goals.")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="group text-lg"
            asChild
          >
            <Link to={language === 'de' ? "/de/kontakt" : "/contact"}>
              {primaryCta || (language === 'de' ? "Projekt starten" : "Start Your Project")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group text-lg" 
            asChild
          >
            <Link to={language === 'de' ? "/de/case-studies" : "/case-studies"}>
              {secondaryCta || (language === 'de' ? "Unsere Arbeiten ansehen" : "See Our Work")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        {footerNote && (
          <p className="text-sm text-brand-text mt-8">
            {footerNote}
          </p>
        )}
      </div>
    </section>
  );
};

export default CTA;
