
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import TrustIndicators from '@/components/hero/TrustIndicators';

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
      <TrustIndicators
        variant="bordered"
        metrics={[
          { icon: 'award', value: '16+', label: 'Jahre Erfahrung' },
          { icon: 'users', value: '100+', label: 'Zufriedene Kunden' },
          { icon: 'star', value: '4.9/5', label: 'Kundenzufriedenheit' },
        ]}
        testimonial={{
          quote: "ooliv hat unsere digitale Präsenz komplett transformiert. Die Strategie war klar, die Umsetzung präzise – und die Ergebnisse sprechen für sich.",
          author: "Michael Schmidt",
          role: "CEO, TechVision GmbH"
        }}
      />
    </div>
  );
};

export default DeutscherHero;
