
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title={isGerman 
        ? "Weniger Aufwand, bessere Ergebnisse – mit KI-Power" 
        : "Less Effort, Better Results – With AI Power"
      }
      subtitle={isGerman 
        ? "Als KI Agentur in Mainz integrieren wir intelligente Technologien strategisch in Ihre Workflows – für schnelleren Content, bessere Prozesse und messbaren Mehrwert durch Effizienz." 
        : "As AI agency in Mainz, we strategically integrate intelligent technologies into your workflows – for faster content, better processes, and measurable value through efficiency."
      }
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Über ooliv",
        link: "/ueber-uns"
      }}
    />
  );
};

export default AiTechHero;
