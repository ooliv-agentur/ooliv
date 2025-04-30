
import React from 'react';
import HeroButton from '@/components/HeroButton';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroGoogleAds = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Handle opening the lead form
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  // Handle free audit request
  const handleFreeAudit = () => {
    // Navigate to contact page
    window.location.href = isGerman ? '/kontakt' : '/en/contact';
  };
  
  const translations = {
    en: {
      badge: "Google Ads",
      title: "Google Ads Agency in Mainz – Built for B2B Leads, Not Just Clicks",
      subtitle: "We design and optimize Google Ads campaigns that don't just generate traffic — they bring in qualified B2B leads. AI-powered, conversion-driven, and performance-monitored."
    },
    de: {
      badge: "Google Ads",
      title: "Google Ads Agentur Mainz – Leads statt nur Klicks",
      subtitle: "Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const contactPath = isGerman ? "/kontakt" : "/en/contact";
  
  return (
    <section className="relative bg-hero-pattern pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none bg-hero-pattern" aria-hidden="true"></div>
      
      <div className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span>{t.badge}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6 leading-tight">
              {t.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-heading/80 mb-8">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroButton 
                variant="solid"
                label={isGerman ? "Kampagne starten" : "Launch Your Campaign"}
                onClick={handleOpenLeadForm}
              />
              
              <HeroButton 
                variant="outline"
                label={isGerman ? "Kostenlose Analyse anfordern" : "Request Free Audit"}
                href={contactPath}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroGoogleAds;
