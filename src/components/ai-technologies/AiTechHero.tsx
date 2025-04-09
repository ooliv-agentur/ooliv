
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechHero = () => {
  const { language } = useLanguage();
  
  // Content based on language
  const content = {
    en: {
      badge: "AI Technologies",
      title: "AI Agency in Mainz — Smarter Web Projects with ooliv",
      subtitle: "We use AI to accelerate design, content, and development workflows — without replacing human expertise. Every project combines the speed of AI with the precision of strategy."
    },
    de: {
      badge: "KI-Technologien",
      title: "KI Agentur in Mainz für Webdesign, Content und Strategie",
      subtitle: "Wir kombinieren die Geschwindigkeit von KI mit menschlicher Expertise – für Websites, die schneller live gehen und besser performen."
    }
  };
  
  const currentContent = language === 'de' ? content.de : content.en;
  
  return (
    <PageHero
      badge={currentContent.badge}
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      primaryCta={{
        text: language === 'de' ? "Projekt starten" : "Start Your Project",
        link: language === 'de' ? "/kontakt" : "/en/contact"
      }}
      secondaryCta={{
        text: language === 'de' ? "Referenzen ansehen" : "View Case Studies", 
        link: language === 'de' ? "/case-studies" : "/en/case-studies"  // Updated link
      }}
    />
  );
};

export default AiTechHero;
