
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
    <section className="py-24 bg-white font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-medico-darkGreen leading-tight" style={{ lineHeight: '1.2' }}>
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-medico-darkGreen/90 leading-relaxed" style={{ lineHeight: '1.5' }}>
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full sm:w-auto">
          {shouldOpenLeadForm(primaryCta) ? (
            <Button 
              size="lg" 
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleOpenLeadForm();
              }}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          ) : primaryCtaLink ? (
            <Button 
              size="lg" 
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
              }}
              asChild
            >
              <Link to={primaryCtaLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleOpenLeadForm();
              }}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          
          {secondaryCta && (
            isStrategyCallCta(secondaryCta) ? (
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                asChild
              >
                <Link to={contactPath}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : secondaryCtaLink ? (
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                asChild
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCta}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={handleOpenLeadForm}
              >
                {secondaryCta}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            )
          )}
        </div>
        
        {/* Trust elements with improved visual hierarchy */}
        {footerNote ? (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-medico-turquoise/5 rounded-2xl p-6 border border-medico-turquoise/20">
              <p className="text-base md:text-lg text-medico-darkGreen/80 font-medium leading-relaxed">
                {footerNote}
              </p>
            </div>
          </div>
        ) : children ? (
          <div className="mt-8">
            {children}
          </div>
        ) : (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-medico-turquoise/5 rounded-2xl p-6 border border-medico-turquoise/20">
              <p className="text-base md:text-lg text-medico-darkGreen/80 font-medium leading-relaxed">
                {defaultFooterNote}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
