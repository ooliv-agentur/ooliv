
import React from 'react';
import PageHero from '@/components/PageHero';
import TrustIndicators from '@/components/hero/TrustIndicators';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <>
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
      <TrustIndicators
        variant="minimal"
        metrics={[
          { icon: 'trending', value: '85%', label: 'Erfolgsquote' },
          { icon: 'award', value: '16+', label: 'Jahre Expertise' },
          { icon: 'users', value: '50+', label: 'Strategien entwickelt' },
        ]}
      />
    </>
  );
};

export default StrategieHero;
