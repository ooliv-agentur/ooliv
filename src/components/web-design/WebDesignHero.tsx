
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
      title: "Webdesign That Helps B2B Companies Grow",
      subtitle: "We design websites that improve your Google visibility, drive qualified leads, and align with your business goals. Our webdesign services are built on strategy – not on templates."
    },
    de: {
      title: "Webdesign Mainz für B2B-Unternehmen – mobiloptimiert, strategisch, individuell.",
      subtitle: "Wir gestalten Websites, die Ihr Unternehmen digital sichtbar machen, Leads generieren und Ihre Marke nachhaltig stärken – mobil und desktopfähig, vom Onepager bis zur SEO-optimierten Unternehmenswebsite."
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  
  return (
    <PageHero
      title={t.title}
      subtitle={t.subtitle}
      primaryCta={{
        text: isGerman ? 'Projekt starten' : 'Start Your Web Project',
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? 'Referenzen ansehen' : 'View Case Studies',
        link: isGerman ? "/referenzen" : "/en/case-studies"
      }}
    />
  );
};

export default WebDesignHero;
