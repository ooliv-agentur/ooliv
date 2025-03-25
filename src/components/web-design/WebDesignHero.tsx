
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      badge: "Strategic Web Design for Business Growth",
      title: "Webdesign Services That Deliver Results",
      subtitle: "We build websites that attract the right visitors, convert leads, and help you grow. Every design is strategically aligned with your business goals."
    },
    de: {
      badge: "Webdesign für nachhaltiges Unternehmenswachstum",
      title: "Webdesign, das messbare Ergebnisse liefert",
      subtitle: "Wir entwickeln Websites, die gezielt neue Kunden gewinnen, starke Marken aufbauen und Ihre Unternehmensziele unterstützen – ohne Templates, ohne Umwege."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const caseStudiesPath = isGerman ? "/de/case-studies" : "/case-studies";
  const contactPath = isGerman ? "/de/kontakt" : "/contact";
  
  return (
    <div className="relative">
      <PageHero
        badge={t.badge}
        title={t.title}
        subtitle={t.subtitle}
        primaryCta={{
          text: isGerman ? "Projekt starten" : "Start Your Web Project",
          link: contactPath
        }}
        secondaryCta={{
          text: isGerman ? "Fallstudien ansehen" : "View Case Studies",
          link: caseStudiesPath
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDesignHero;
