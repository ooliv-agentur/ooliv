
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="SEO Agentur Mainz für nachhaltiges Wachstum"
      subtitle="SEO für nachhaltiges Wachstum: Mit einer fundierten Strategie, überzeugenden Inhalten und technischer Präzision steigern wir Ihre Sichtbarkeit und sorgen für mehr qualifizierte Anfragen."
      primaryCta={{
        text: "SEO-Strategie starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Referenzen ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default SEOHeroDE;
