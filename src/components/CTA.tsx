
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;  // Added this property as optional
  footerNote?: string;
  lightBackground?: boolean;
  children?: React.ReactNode;
}

const CTA = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,  // Added this parameter
  footerNote,
  lightBackground = false,
  children
}: CTAProps) => {
  const { language } = useLanguage();
  
  return (
    <section className={`py-24 ${lightBackground ? 'bg-brand-backgroundAlt' : 'bg-brand-background'} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-brand-heading">{title}</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-brand-text">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="group bg-[#006064] text-white hover:bg-[#004D40]" 
            onClick={() => {
              window.dispatchEvent(new Event('open-lead-form'));
            }}
          >
            {primaryCta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {secondaryCta && (
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-[#006064] text-brand-primary hover:bg-[#E0F2F1] hover:text-[#004D40]"
              onClick={() => {
                window.dispatchEvent(new Event('open-lead-form'));
              }}
            >
              {secondaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>
        
        {footerNote && (
          <p className="mt-12 text-sm text-brand-text/80 font-semibold">{footerNote}</p>
        )}
        
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
