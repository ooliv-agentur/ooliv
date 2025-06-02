
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
  
  // Check if the CTA text is the strategy call text
  const isStrategyCallCta = (text: string) => {
    return text.includes('Strategiegespräch vereinbaren') || 
           text.includes('Schedule a Strategy Call') ||
           text.includes('Technical Consultation') ||
           text.includes('Technische Beratung');
  };
  
  // Check if button should open lead form
  const shouldOpenLeadForm = (text: string) => {
    // Direct project start texts
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
    
    // Then check for partial matches
    return text.includes('Projekt starten') || 
           text.includes('Start Your') || 
           text.includes('Launch Your') ||
           text.includes('SEO-Strategie starten') ||
           text.includes('Kampagne starten');
  };
  
  // Handler for opening the lead form via event
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Default footer text based on language
  const defaultFooterNote = language === 'de' 
    ? "100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-gestützte Strategien für maximale Effizienz"
    : "100+ successful projects • Trusted by leading companies • AI-powered strategies for maximum impact";
  
  return (
    <section className={`py-24 ${lightBackground ? 'bg-gradient-to-br from-brand-mint-50 to-brand-mint-100' : 'bg-gradient-to-br from-brand-mint-500 to-brand-mint-600'} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${lightBackground ? 'text-brand-heading' : 'text-white'}`}>{title}</h2>
        <p className={`text-xl mb-12 max-w-3xl mx-auto ${lightBackground ? 'text-brand-text' : 'text-brand-mint-50'}`}>{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {shouldOpenLeadForm(primaryCta) ? (
            <Button
              size="lg" 
              className={`group ${lightBackground ? 'bg-brand-mint-500 text-white hover:bg-brand-mint-600' : 'bg-white text-brand-mint-600 hover:bg-brand-mint-50'} shadow-mint hover:shadow-mintHover`}
              data-trigger-lead-form
              onClick={handleOpenLeadForm}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : primaryCtaLink ? (
            <Button
              size="lg" 
              className={`group ${lightBackground ? 'bg-brand-mint-500 text-white hover:bg-brand-mint-600' : 'bg-white text-brand-mint-600 hover:bg-brand-mint-50'} shadow-mint hover:shadow-mintHover`} 
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
              className={`group ${lightBackground ? 'bg-brand-mint-500 text-white hover:bg-brand-mint-600' : 'bg-white text-brand-mint-600 hover:bg-brand-mint-50'} shadow-mint hover:shadow-mintHover`}
              onClick={handleOpenLeadForm}
              data-trigger-lead-form
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
                className={`group ${lightBackground ? 'border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-mint-600'}`}
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
                className={`group ${lightBackground ? 'border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-mint-600'}`}
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
                className={`group ${lightBackground ? 'border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-mint-600'}`}
                onClick={handleOpenLeadForm}
              >
                {secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            )
          )}
        </div>
        
        {/* Show either custom footer note, children, or default footer (but not multiple) */}
        {footerNote ? (
          <p className={`mt-12 text-sm font-semibold ${lightBackground ? 'text-brand-text/80' : 'text-brand-mint-100'}`}>{footerNote}</p>
        ) : children ? (
          <div className="mt-8">
            {children}
          </div>
        ) : (
          <p className={`mt-12 text-sm font-semibold ${lightBackground ? 'text-brand-text/80' : 'text-brand-mint-100'}`}>
            {defaultFooterNote}
          </p>
        )}
      </div>
    </section>
  );
};

export default CTA;
