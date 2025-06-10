
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
        ? "WordPress Agentur Mainz für skalierbare Unternehmenslösungen" 
        : "Web Development That Drives Business Growth"
      }
      subtitle={isGerman 
        ? "Maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis Custom Code." 
        : "Scalable, secure, and search-optimized websites – from custom WordPress to pure code."
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
