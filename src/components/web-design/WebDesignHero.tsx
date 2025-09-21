
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const translations = {
    en: {
      title: "Websites That Sell – Not Just Look Good",
      subtitle: "Our webdesign services in Mainz help B2B companies improve Google visibility, drive qualified leads, and align with business goals. Strategy-driven design – not templates."
    },
    de: {
      title: "Websites, die verkaufen – nicht nur gut aussehen",
      subtitle: "Unser Webdesign in Mainz macht Ihr Unternehmen digital sichtbar, generiert Leads und stärkt Ihre Marke nachhaltig – mobiloptimiert, strategisch und individuell vom Onepager bis zur SEO-optimierten Unternehmenswebsite."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  
  return (
    <PageHero
      title={t.title}
      subtitle={t.subtitle}
      primaryCta={{
        text: 'Projekt starten',
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: 'Über ooliv',
        link: "/ueber-uns"
      }}
    />
  );
};

export default WebDesignHero;
