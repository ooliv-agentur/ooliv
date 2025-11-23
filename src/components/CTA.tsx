
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { H2, LargeParagraph, Paragraph } from '@/components/ui/typography';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  primaryCtaLink?: string;
  secondaryCtaLink?: string;
  footerNote?: string;
  lightBackground?: boolean;
  children?: React.ReactNode;
}

const CTA = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryCtaLink,
  secondaryCtaLink,
  footerNote,
  lightBackground = false,
  children
}: CTAProps) => {
  const { language } = useLanguage();
  
  const contactPath = "/kontakt";
  
  const isStrategyCallCta = (text: string) => {
    return text.includes('Strategiegespräch vereinbaren') || 
           text.includes('Schedule a Strategy Call') ||
           text.includes('Technical Consultation') ||
           text.includes('Technische Beratung');
  };
  
  const shouldOpenLeadForm = (text: string) => {
    if (
      text === 'Projekt starten' || 
      text === 'Start Your Project' ||
      text === 'Start Your Web Project' ||
      text === 'SEO-Strategie starten' ||
      text === 'Start Your SEO Strategy' ||
      text === 'Content-Projekt starten' ||
      text === 'Launch Your Campaign' ||
      text === 'Kampagne starten'
    ) {
      return true;
    }
    
    return text.includes('Projekt starten') || 
           text.includes('Start Your') || 
           text.includes('Launch Your') ||
           text.includes('SEO-Strategie starten') ||
           text.includes('Kampagne starten');
  };
  
  const handleOpenLeadForm = () => {
    console.log('🚀 CTA: Lead form trigger button clicked, text:', primaryCta);
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { mode: 'prototype' } }));
    console.log('📡 CTA: open-lead-form event dispatched');
  };

  const defaultFooterNote = "200+ realisierte Digitalprojekte • Vertraut von führenden Unternehmen • KI-gestützte Strategien für maximale Effizienz";
  
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <H2 className="mb-8 max-w-4xl mx-auto" alignment="center">
          {title}
        </H2>
        <LargeParagraph className="mb-12 max-w-4xl mx-auto" alignment="center" color="secondary">
          {subtitle}
        </LargeParagraph>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full sm:w-auto">
          {shouldOpenLeadForm(primaryCta) ? (
            <Button 
              variant="primary"
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenLeadForm();
              }}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : primaryCtaLink ? (
            <Button 
              variant="primary"
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <Link to={primaryCtaLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button 
              variant="primary"
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenLeadForm();
              }}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          
          {secondaryCta && (
            isStrategyCallCta(secondaryCta) ? (
              <Button 
                variant="secondary" 
                size="lg" 
                className="group w-full sm:w-auto"
                asChild
              >
                <Link to={contactPath}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : secondaryCtaLink ? (
              <Button 
                variant="secondary" 
                size="lg" 
                className="group w-full sm:w-auto"
                asChild
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button 
                variant="secondary" 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleOpenLeadForm}
              >
                {secondaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            )
          )}
        </div>
        
        {footerNote ? (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-[20px] p-8 border border-border">
              <Paragraph color="secondary" className="text-base md:text-lg">
                {footerNote}
              </Paragraph>
            </div>
          </div>
        ) : children ? (
          <div className="mt-8">
            {children}
          </div>
        ) : (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-[20px] p-8 border border-border">
              <Paragraph color="secondary" className="text-base md:text-lg">
                {defaultFooterNote}
              </Paragraph>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
