
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

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
  
  // Get the appropriate contact page based on language
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
  // Handler for opening the lead form
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  // Check if the CTA text is the strategy call text
  const isStrategyCallCta = (text: string) => {
    return text.includes('Strategiegespräch vereinbaren') || 
           text.includes('Schedule a Strategy Call') ||
           text.includes('Technical Consultation') ||
           text.includes('Technische Beratung');
  };
  
  // Check if button should open lead form
  const shouldOpenLeadForm = (text: string) => {
    // Check for exact matches first
    if (
      text === 'Projekt starten' || 
      text === 'Start Your Project' ||
      text === 'Start Your Web Project' ||
      text === 'SEO-Strategie starten' ||
      text === 'Start Your SEO Strategy'
    ) {
      return true;
    }
    
    // Then check for partial matches
    return text.includes('Projekt starten') || 
           text.includes('Start Your') || 
           text.includes('Launch Your') ||
           text.includes('SEO-Strategie starten') ||
           text.includes('Kampagne starten');
  };
  
  return (
    <section className={`py-24 ${lightBackground ? 'bg-brand-backgroundAlt' : 'bg-brand-background'} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-brand-heading">{title}</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-brand-text">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {shouldOpenLeadForm(primaryCta) ? (
            <Button
              size="lg" 
              className="group bg-[#006064] text-white hover:bg-[#004D40]" 
              onClick={handleOpenLeadForm}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : primaryCtaLink ? (
            <Button
              size="lg" 
              className="group bg-[#006064] text-white hover:bg-[#004D40]" 
              asChild
            >
              <Link to={primaryCtaLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="group bg-[#006064] text-white hover:bg-[#004D40]" 
              onClick={handleOpenLeadForm}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          
          {secondaryCta && (
            isStrategyCallCta(secondaryCta) ? (
              // If it's the strategy call CTA, always use the contact path
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-[#006064] text-brand-primary hover:bg-[#E0F2F1] hover:text-[#004D40]"
                asChild
              >
                <Link to={contactPath}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : secondaryCtaLink ? (
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-[#006064] text-brand-primary hover:bg-[#E0F2F1] hover:text-[#004D40]"
                asChild
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-[#006064] text-brand-primary hover:bg-[#E0F2F1] hover:text-[#004D40]"
                onClick={handleOpenLeadForm}
              >
                {secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            )
          )}
        </div>
        
        {footerNote && (
          <p className="mt-12 text-sm text-brand-text/80 font-semibold">{footerNote}</p>
        )}
        
        {children ? (
          <div className="mt-8">
            {children}
          </div>
        ) : (
          <section className="mt-12 text-center">
            <div className="container mx-auto px-4">
              <p className="text-lg text-brand-text font-medium">
                {language === 'de' ? 
                  "100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-gestützte Strategien für maximale Effizienz" :
                  "100+ successful projects • Trusted by leading companies • AI-powered strategies for maximum impact"}
              </p>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default CTA;
