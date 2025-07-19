
import React, { useState } from 'react';
import PageHero from '@/components/PageHero';

const DeutscherHero = () => {
  const [isDispatching, setIsDispatching] = useState(false);
  
  const handleOpenLeadForm = () => {
    if (isDispatching) {
      console.log('🚫 DeutscherHero: Already dispatching, ignoring click');
      return;
    }
    
    setIsDispatching(true);
    console.log('🚀 DeutscherHero: "Projekt starten" button clicked');
    
    setTimeout(() => {
      const event = new CustomEvent('open-lead-form', { detail: { source: 'DeutscherHero' } });
      window.dispatchEvent(event);
      console.log('📡 DeutscherHero: open-lead-form event dispatched');
      
      setTimeout(() => {
        setIsDispatching(false);
      }, 1000);
    }, 0);
  };

  const dynamicEndings = [
    "online sichtbar zu werden.",
    "mehr Leads zu generieren.",
    "mit ihrer Website zu überzeugen."
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="ooliv – Ihre Werbeagentur in Mainz für digitales Marketing"
        subtitle="Wir entwickeln Websites für B2B-Unternehmen in Mainz, die messbar mehr Leads generieren und Vertrauen schaffen. Keine Templates, keine Buzzwords – nur Strategie, Design und Performance aus einer Hand. Seit 2008 in Mainz verwurzelt."
        dynamicPrefix="Wir helfen Mainzer Unternehmen,"
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Über ooliv",
          link: "/ueber-uns"
        }}
      />
    </div>
  );
};

export default DeutscherHero;
