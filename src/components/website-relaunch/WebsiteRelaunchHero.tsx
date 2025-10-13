import React from 'react';
import PageHero from '@/components/PageHero';

const WebsiteRelaunchHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Ihr Website-Relaunch beginnt mit einem klaren Konzept."
      subtitle="Professionelle Website-Neugestaltung – mit Strategie, Design und Technik aus einer Hand. Wir entwickeln ganzheitliche Relaunch-Konzepte für Unternehmen, die ihren digitalen Auftritt neu denken – inklusive Analyse, Strukturplanung und visueller Umsetzungsempfehlung."
      primaryCta={{
        text: "Kostenloses Relaunch-Konzept anfordern →",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Beispiele ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default WebsiteRelaunchHero;
