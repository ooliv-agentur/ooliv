
import React, { useState } from 'react';
import PageHero from '@/components/PageHero';

const DeutscherHero = () => {
  const [isDispatching, setIsDispatching] = useState(false);
  
  const handleOpenPrototypeForm = () => {
    if (isDispatching) {
      console.log('🚫 DeutscherHero: Already dispatching, ignoring click');
      return;
    }
    
    setIsDispatching(true);
    console.log('🚀 DeutscherHero: "Kostenloser Prototyp" button clicked');
    
    setTimeout(() => {
      const event = new CustomEvent('open-lead-form', { detail: { source: 'DeutscherHero', mode: 'prototype' } });
      window.dispatchEvent(event);
      console.log('📡 DeutscherHero: open-lead-form event dispatched with prototype mode');
      
      setTimeout(() => {
        setIsDispatching(false);
      }, 1000);
    }, 0);
  };

  const dynamicEndings = [
    "Mehr Anfragen durch bessere Website-Strategie",
    "Klare Roadmaps statt digitaler Unsicherheit",
    "KI-Integration, die Ihr Business wirklich voranbringt"
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="Digital-Berater, der Ihr Business wirklich voranbringt"
        subtitle="Ich helfe Ihnen, digital besser zu werden – mit klaren Strategien, durchdachter UX und sinnvollen KI-Lösungen. Sie bekommen keine 300-seitigen Konzepte, sondern konkrete Maßnahmen. Basierend auf 16+ Jahren Erfahrung."
        dynamicPrefix=""
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Mit ooliv durchstarten",
          link: "#",
          onClick: handleOpenPrototypeForm
        }}
        secondaryCta={{
          text: "Über Uli Schönleber",
          link: "/ueber-uns"
        }}
      />
    </div>
  );
};

export default DeutscherHero;
