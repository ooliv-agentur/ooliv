import React from 'react';
import PageHero from '@/components/PageHero';

const KostenlosesKonzeptHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { mode: 'prototype' } }));
  };

  return (
    <PageHero
      badge="Für Unternehmen mit bestehenden Websites."
      title="Ihre Website bringt keine Anfragen? Das ändern wir."
      subtitle="Kostenloses Website-Konzept in 48 h – mit klaren Empfehlungen zur Optimierung und Nutzerführung. Wir analysieren Ihre bestehende Website, identifizieren Schwachstellen und erstellen einen strukturierten Plan für mehr Anfragen und bessere Conversion – 100 % kostenlos und unverbindlich."
      primaryCta={{
        text: "Kostenloses Konzept sichern",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Mehr über ooliv erfahren",
        link: "/ueber-uns"
      }}
    />
  );
};

export default KostenlosesKonzeptHero;
