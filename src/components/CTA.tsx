
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
  
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
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
    window.dispatchEvent(new Event('open-lead-form'));
    console.log('📡 CTA: open-lead-form event dispatched');
  };

  const defaultFooterNote = language === 'de' 
    ? "100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-gestützte Strategien für maximale Effizienz"
    : "100+ successful projects • Trusted by leading companies • AI-powered strategies for maximum impact";
  
  return (
    <section className={`py-24 ${lightBackground ? 'bg-medico-mint' : 'bg-medico-white'} font-satoshi`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-medico-darkGreen leading-tight">{title}</h2>
        <p className="text-xl mb-12 max-w-4xl mx-auto text-medico-darkGreen leading-relaxed">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {shouldOpenLeadForm(primaryCta) ? (
            <Button
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleOpenLeadForm();
              }}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : primaryCtaLink ? (
            <Button
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to={primaryCtaLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
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
                size="lg" 
                variant="outline" 
                className="group border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg"
                asChild
              >
                <Link to={contactPath}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : secondaryCtaLink ? (
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg"
                asChild
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg"
                onClick={handleOpenLeadForm}
              >
                {secondaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            )
          )}
        </div>
        
        {footerNote ? (
          <p className="mt-12 text-sm text-medico-darkGreen/80 font-medium">{footerNote}</p>
        ) : children ? (
          <div className="mt-8">
            {children}
          </div>
        ) : (
          <p className="mt-12 text-sm text-medico-darkGreen/80 font-medium">
            {defaultFooterNote}
          </p>
        )}
      </div>
    </section>
  );
};

export default CTA;
