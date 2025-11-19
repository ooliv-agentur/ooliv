
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Digital Strategy & Transformation"
      subtitle="End-to-End Digital Strategy für B2B-Unternehmen. Von der Strategic Discovery über UX-Strategie bis zur messbaren Umsetzung – C-Level Advisory mit 16+ Jahren Erfahrung."
      primaryCta={{
        text: "Strategiegespräch vereinbaren",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Transformationen ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default StrategieHero;
