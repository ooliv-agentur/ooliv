
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Budget rein, Anfragen raus – ohne Streuverluste"
      subtitle="Als Google Ads Agentur in Mainz entwickeln und optimieren wir Kampagnen, die qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
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

export default GoogleAdsHero;
