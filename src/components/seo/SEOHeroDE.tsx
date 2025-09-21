
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Mehr Anfragen über Ihre Website – garantiert messbar"
      subtitle="Als SEO Agentur in Mainz steigern wir Ihre Sichtbarkeit mit fundierter Strategie, überzeugenden Inhalten und technischer Präzision – für nachhaltig mehr qualifizierte Anfragen."
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

export default SEOHeroDE;
