
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      badge={isGerman 
        ? "Webentwicklung" 
        : "Web Development"
      }
      title={isGerman 
        ? "Schnelle Websites, die Google liebt – und Ihre Kunden auch" 
        : "Websites That Drive Business Growth – Not Just Look Good"
      }
      subtitle={isGerman 
        ? "Als WordPress Agentur in Mainz entwickeln wir maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis Custom Code für skalierbare Unternehmenslösungen." 
        : "Web development in Mainz: Scalable, secure, and search-optimized websites – from custom WordPress to pure code that drives real business results."
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

export default WebDevHero;
