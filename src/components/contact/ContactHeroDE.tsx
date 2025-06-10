
import React from 'react';
import PageHero from '@/components/PageHero';

const ContactHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Kontaktieren Sie ooliv direkt"
      subtitle="Ihre Digitalagentur für individuelle Websites, SEO und Marketinglösungen – persönlich und ohne Umwege."
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Jetzt anrufen",
        link: "tel:+4961316367801"
      }}
    />
  );
};

export default ContactHeroDE;
