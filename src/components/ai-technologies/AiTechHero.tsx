
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
        ? "KI, die Ihrem Business wirklich hilft" 
        : "AI-Enabled Business Transformation"
      }
      subtitle={isGerman 
        ? "Ich finde heraus, wo KI in Ihrem Unternehmen echten Mehrwert bringt – von smarten Chatbots über Content-Automation bis zu effizienten Workflows. Keine Buzzwords, sondern konkrete Use Cases mit messbaren Ergebnissen." 
        : "Strategic AI integration for real business results. LLM use case identification, AI workflow strategy, and measurable efficiency gains through intelligent automation."
      }
      primaryCta={{
        text: isGerman ? "KI-Potenzial erkunden" : "Start AI Transformation",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "KI-Projekte ansehen" : "View AI Transformations",
        link: "/referenzen"
      }}
    />
  );
};

export default AiTechHero;
