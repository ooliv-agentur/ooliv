
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const translations = {
    en: {
      title: "Pretty Website, No Leads? Time for Real Web Design.",
      subtitle: "Web design Mainz: We create websites that actually generate inquiries – strategically planned, mobile-optimized, and conversion-focused. Not just beautiful, but effective."
    },
    de: {
      title: "Schöne Website, keine Anfragen? Zeit für echtes Webdesign.",
      subtitle: "Webdesign Mainz: Wir gestalten Websites, die tatsächlich Anfragen generieren – strategisch geplant, mobiloptimiert, conversion-fokussiert. Nicht nur schön, sondern wirksam."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  
  return (
    <PageHero
      title={t.title}
      subtitle={t.subtitle}
      primaryCta={{
        text: isGerman ? 'Zeigt mir wirksames Design' : 'Show me effective design',
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? 'Design-Beispiele' : 'Design Examples',
        link: "/referenzen"
      }}
    />
  );
};

export default WebDesignHero;
