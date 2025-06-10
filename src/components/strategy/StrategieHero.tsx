
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      isHomepage={true}
      title="Strategie & Konzept für digitale Erfolge"
      subtitle="Wir entwickeln individuelle Digitalstrategien inklusive Konzept und optimieren die User Experience Ihrer Website – für mehr Sichtbarkeit, mehr Leads und nachhaltigen Erfolg."
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
