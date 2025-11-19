import React from 'react';
import CTA from '@/components/CTA';

const InvestmentCTA = () => {
  return (
    <CTA 
      title="Welches Paket passt zu Ihnen?"
      subtitle="Lassen Sie uns in einem kostenlosen 30-Minuten-Gespräch besprechen, wo Sie gerade stehen und welcher Weg für Ihre Situation am meisten Sinn macht. Unverbindlich, keine Verkaufsgespräche."
      primaryCta="Kostenloses Erstgespräch vereinbaren"
      secondaryCta="Oder direkt Kontakt aufnehmen"
      secondaryCtaLink="/kontakt"
    />
  );
};

export default InvestmentCTA;
