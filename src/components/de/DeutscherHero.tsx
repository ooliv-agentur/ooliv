
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
        subtitle={
          <>
            Uli Schönleber und das ooliv-Team helfen Ihnen, digital besser zu werden – mit{' '}
            <Link to="/strategie" className="text-primary hover:underline font-medium">klaren Strategien</Link>,{' '}
            durchdachter <Link to="/webdesign" className="text-primary hover:underline font-medium">UX</Link> und{' '}
            <Link to="/ki-technologien" className="text-primary hover:underline font-medium">sinnvollen KI-Lösungen</Link>.{' '}
            Sie bekommen keine 300-seitigen Konzepte, sondern konkrete Maßnahmen. Basierend auf 16+ Jahren Erfahrung.
          </>
        }
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
