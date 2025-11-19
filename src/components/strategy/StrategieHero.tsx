
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Digital-Strategie mit ooliv – keine Konzepte, die verstauben"
      subtitle="Uli Schönleber und das ooliv-Team entwickeln klare Strategien mit konkreten Maßnahmen – keine 300-seitigen Konzepte, die in der Schublade landen. Von der Analyse über die Strategie bis zur Umsetzung. Basierend auf 16+ Jahren Erfahrung."
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
