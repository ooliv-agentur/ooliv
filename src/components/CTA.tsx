
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  lightBackground?: boolean;
  footerNote?: string;
}

const CTA = ({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  secondaryCtaLink,
  lightBackground = false,
  footerNote
}: CTAProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const defaultTitle = isGerman 
    ? "Bereit für eine Website, die Ihr Unternehmen voranbringt?"
    : "Ready to transform your digital presence?";
    
  const defaultSubtitle = isGerman
    ? "Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen."
    : "Let's discuss how our team can help your business achieve its online goals.";
    
  const defaultPrimaryCta = isGerman ? "Projekt starten" : "Start Your Project";
  const defaultSecondaryCta = isGerman ? "Strategiegespräch vereinbaren" : "Schedule Strategy Call";
  const defaultSecondaryLink = isGerman ? "/kontakt" : "/contact";

  return (
    <section className={`py-24 ${lightBackground ? 'bg-medico-mint/10' : 'bg-medico-darkGreen'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${lightBackground ? 'text-medico-darkGreen' : 'text-medico-white'}`} style={{ lineHeight: '1.3' }}>
            {title || defaultTitle}
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${lightBackground ? 'text-medico-darkGreen/80' : 'text-medico-white/90'}`} style={{ lineHeight: '1.6' }}>
            {subtitle || defaultSubtitle}
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ 
                backgroundColor: '#FFE500', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFE500';
              }}
              onClick={handleOpenLeadForm}
            >
              {primaryCta || defaultPrimaryCta}
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {(secondaryCta || defaultSecondaryCta) && (
              <Button 
                variant="outline" 
                size="lg" 
                className={`font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto ${
                  lightBackground 
                    ? 'bg-medico-white text-medico-darkGreen hover:bg-medico-mint border-2 border-medico-darkGreen hover:border-medico-turquoise' 
                    : 'bg-medico-white text-medico-darkGreen hover:bg-medico-mint border-2 border-medico-white hover:border-medico-turquoise'
                }`}
                asChild
              >
                <Link to={secondaryCtaLink || defaultSecondaryLink}>
                  {secondaryCta || defaultSecondaryCta}
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </Reveal>
        
        {footerNote && (
          <Reveal delay={0.3}>
            <p className={`text-sm mt-8 ${lightBackground ? 'text-medico-darkGreen/60' : 'text-medico-white/70'}`}>
              {footerNote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default CTA;
