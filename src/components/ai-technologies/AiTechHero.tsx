
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
        ? "AI-Enabled Business Transformation" 
        : "AI-Enabled Business Transformation"
      }
      subtitle={isGerman 
        ? "Strategische AI-Integration für echte Business-Ergebnisse. LLM Use Case Identification, AI Workflow Strategy und messbare Effizienzgewinne durch intelligente Automation." 
        : "Strategic AI integration for real business results. LLM use case identification, AI workflow strategy, and measurable efficiency gains through intelligent automation."
      }
      primaryCta={{
        text: isGerman ? "AI-Transformation starten" : "Start AI Transformation",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "AI-Transformationen ansehen" : "View AI Transformations",
        link: "/referenzen"
      }}
    />
  );
};

export default AiTechHero;
