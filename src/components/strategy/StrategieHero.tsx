
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Digital-Strategie mit ooliv – keine Konzepte, die verstauben"
      subtitle="Digital-Strategien, die Sie wirklich umsetzen können. Von der Analyse bis zur konkreten Maßnahme – ohne Berater-Blabla. Messbare Ergebnisse statt 300-seitiger PDFs."
      benefitsVariant="none"
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
