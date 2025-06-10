
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      isHomepage={true}
      title="Strategie & Webkonzept für Ihren digitalen Erfolg"
      subtitle="Wir entwickeln individuelle Digitalstrategien mit einem klaren Webkonzept, das messbare Ergebnisse liefert – für mehr Sichtbarkeit, mehr Leads und eine nachhaltige digitale Präsenz."
      primaryCta={{
        text: "Strategiegespräch vereinbaren",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Mehr über unsere Leistungen",
        link: "/webdesign"
      }}
    />
  );
};

export default StrategieHero;
