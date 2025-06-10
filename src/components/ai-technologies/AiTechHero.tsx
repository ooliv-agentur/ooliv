
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
        ? "KI Agentur Mainz – Effizienz durch intelligente Technologie" 
        : "AI Agency Mainz – Efficiency Through Intelligent Technology"
      }
      subtitle={isGerman 
        ? "Wir integrieren KI-Tools strategisch in Ihre Workflows – für schnelleren Content, bessere Prozesse und messbaren Mehrwert." 
        : "We strategically integrate AI tools into your workflows – for faster content, better processes, and measurable value."
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
