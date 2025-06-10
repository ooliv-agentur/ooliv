
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Strategie & Webkonzept für Ihren digitalen Erfolg"
      subtitle="Wir entwickeln individuelle Digitalstrategien mit einem klaren Webkonzept, das messbare Ergebnisse liefert – für mehr Sichtbarkeit, mehr Leads und eine nachhaltige digitale Präsenz."
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

export default StrategieHero;
