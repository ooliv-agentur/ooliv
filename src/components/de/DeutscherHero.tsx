
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        title="ooliv – Digital-Beratung, die Ihr Business voranbringt"
        subtitle="Digital-Beratung, die wirklich umsetzt. Klare Strategien, durchdachte Lösungen, messbare Ergebnisse – ohne Buzzwords und Konzepte, die in der Schublade landen."
        dynamicPrefix="Sie bekommen:"
        dynamicSubheadlines={dynamicEndings}
        benefitsVariant="pattern"
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
