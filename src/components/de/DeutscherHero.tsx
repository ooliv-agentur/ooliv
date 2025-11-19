
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
    "Strategic Discovery → Product Strategy → AI Integration",
    "Von der Vision zur messbaren Umsetzung.",
    "16+ Jahre C-Level Digital Advisory"
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="Digitale Transformation mit Strategie, UX & AI"
        subtitle="16+ Jahre Erfahrung in der Transformation digitaler Ökosysteme für B2B-Unternehmen im DACH-Raum. Strategische Beratung auf C-Level – von der Vision bis zur messbaren Umsetzung."
        dynamicPrefix=""
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Strategiegespräch vereinbaren",
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
