
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      badge: "Strategic Web Design for Business Growth",
      title: "Webdesign That Helps B2B Companies Grow",
      subtitle: "We design websites that improve your Google visibility, drive qualified leads, and align with your business goals. Our webdesign services are built on strategy – not on templates."
    },
    de: {
      badge: "Strategisches Webdesign für Unternehmenswachstum",
      title: "Webdesign Mainz für B2B-Unternehmen mit Wachstumskurs",
      subtitle: "Wir entwickeln maßgeschneiderte Websites, die Ihre Sichtbarkeit in Google stärken, mehr Leads generieren und Ihre Marke digital positionieren. Unser Webdesign für Unternehmen aus Mainz und darüber hinaus basiert auf Strategie, nicht auf Templates."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const linkPath = isGerman ? "/kontakt" : "/en/contact";
  
  return (
    <PageHero
      badge={t.badge}
      title={t.title}
      subtitle={t.subtitle}
      primaryCta={{
        text: isGerman ? "Projekt starten" : "Start Your Web Project",
        link: linkPath
      }}
    />
  );
};

export default WebDesignHero;
