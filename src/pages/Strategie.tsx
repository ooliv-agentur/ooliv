
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import StrategieFAQ from '@/components/strategy/StrategieFAQ';

import CTA from '@/components/CTA';

const GermanStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Strategie", url: "https://ooliv.de/strategie" }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="Digital Strategy & Transformation | C-Level Advisory | ooliv"
        description="End-to-End Digital Strategy für B2B-Unternehmen: Strategic Discovery, UX Strategy, AI Integration und C-Level Advisory mit 16+ Jahren Erfahrung."
        canonicalUrl="https://ooliv.de/strategie"
        keywords="Digital Strategy, Digital Transformation, C-Level Advisory, Strategic Consulting, UX Strategy"
        breadcrumbs={breadcrumbs}
      />

      <StrategieHero />
      <StrategieBenefits />
      <StrategieProcess />
      <StrategieServices />
      <StrategieFAQ />
      
      <CTA 
        title="Digitale Transformation für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam eine End-to-End Digital Strategy entwickeln – von der Discovery bis zur messbaren Umsetzung."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Mehr erfahren"
        secondaryCtaLink="/kontakt"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanStrategy;
