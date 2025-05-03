
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CTA from '@/components/CTA';

const WebDevCTA = () => {
  const { language } = useLanguage();
  
  const title = language === 'de' 
    ? "Lassen Sie uns Ihr Webentwicklungs-Projekt besprechen"
    : "Let's discuss your web development project";
    
  const subtitle = language === 'de'
    ? "Wir entwickeln eine skalierbare, sichere Website, die perfekt zu Ihren Geschäftszielen passt."
    : "We develop a scalable, secure website that perfectly matches your business goals.";
    
  const primaryCta = language === 'de' ? "Projekt starten" : "Start Project";
  const secondaryCta = language === 'de' ? "Strategiegespräch vereinbaren" : "Schedule Strategy Call";
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
