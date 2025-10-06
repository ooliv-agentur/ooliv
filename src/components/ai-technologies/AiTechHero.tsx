
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
        ? "KI klingt kompliziert? Ist es nicht. Wir zeigen's." 
        : "AI Sounds Complicated? It's Not. We'll Show You."
      }
      subtitle={isGerman 
        ? "KI Agentur Mainz: Wir integrieren KI-Tools in Ihre Prozesse – für schnelleren Content, effizientere Abläufe und weniger manuelle Arbeit. Pragmatisch, nicht futuristisch." 
        : "AI agency Mainz: We integrate AI tools into your processes – for faster content, efficient workflows, and less manual work. Pragmatic, not futuristic."
      }
      primaryCta={{
        text: isGerman ? "KI-Potenzial prüfen" : "Check AI Potential",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "KI-Projekte ansehen" : "View AI Projects",
        link: "/referenzen"
      }}
    />
  );
};

export default AiTechHero;
