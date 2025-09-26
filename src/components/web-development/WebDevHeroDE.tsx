
import React from 'react';
import PageHero from '@/components/PageHero';

const WebDevHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title="Schnelle Websites, die Google liebt – und Ihre Kunden auch"
      subtitle="Als WordPress Agentur in Mainz entwickeln wir maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis individueller Programmierung für wachsende Unternehmen."
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

export default WebDevHeroDE;
