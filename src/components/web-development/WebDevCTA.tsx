
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CTA from '@/components/CTA';

const WebDevCTA = () => {
  const { language } = useLanguage();
  
  const title = language === 'de' 
    ? "Bereit für eine Website, die wirklich performt?"
    : "Ready for a website that actually performs?";
    
  const subtitle = language === 'de'
    ? "Wir entwickeln Websites, die schnell laden, gut ranken und Anfragen generieren – technisch solide, ohne Schnickschnack."
    : "We develop websites that load fast, rank well and generate inquiries – technically solid, no frills.";
    
  const primaryCta = language === 'de' ? "Website-Projekt starten" : "Start Website Project";
  const secondaryCta = language === 'de' ? "Erstgespräch buchen" : "Book Initial Call";
  const secondaryCtaLink = language === 'de' ? "/kontakt" : "/en/contact";

  return (
    <CTA 
      title={title}
      subtitle={subtitle}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
      secondaryCtaLink={secondaryCtaLink}
    />
  );
};

export default WebDevCTA;
