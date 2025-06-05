
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      badge={isGerman ? "Content-Erstellung" : "Content Creation"}
      title={isGerman 
        ? "Content-Erstellung für B2B-Unternehmen mit Strategie" 
        : "Content Creation for B2B Companies with Strategy"
      }
      subtitle={isGerman 
        ? "Wir entwickeln strategische B2B-Inhalte: Website-Texte, Landing Pages & SEO-Content mit Plan – klar, durchdacht, wirkungsvoll." 
        : "We create strategic B2B content: website copy, landing pages & SEO content with a plan – clear, thoughtful, powerful."
      }
      primaryCta={{
        text: isGerman ? "Content-Projekt starten" : "Start Content Project",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "Referenzen ansehen" : "View Case Studies",
        link: isGerman ? "/referenzen" : "/en/case-studies"
      }}
    />
  );
};

export default ContentHero;
