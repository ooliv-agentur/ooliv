
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Digital-Strategie, die wirklich funktioniert"
      subtitle="Sie bekommen klare Strategien mit konkreten Maßnahmen – keine 300-seitigen Konzepte, die in der Schublade verstauben. Von der Analyse über die Strategie bis zur Umsetzung. Basierend auf 16+ Jahren Erfahrung."
      primaryCta={{
        text: "Kostenloses Strategiegespräch",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Erfolgreiche Projekte ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default StrategieHero;
