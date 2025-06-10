
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Google Ads Agentur Mainz – Leads statt nur Klicks"
      subtitle="Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
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
