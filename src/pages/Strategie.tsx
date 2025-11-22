
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
        title="Digitalstrategie Mainz – Webkonzept & Planung | ooliv"
        description="Digitalstrategie Mainz – Ganzheitliche Webkonzepte für B2B. Von Analyse bis Umsetzung. ✓ Messbare Ziele ✓ ROI-fokussiert. Strategiegespräch!"
        canonicalUrl="https://ooliv.de/strategie"
        keywords="Webkonzept, Digitalstrategie, SEO Strategie, Marketing Konzept, ooliv Mainz"
        breadcrumbs={breadcrumbs}
      />

      <StrategieHero />
      <StrategieBenefits />
      <StrategieProcess />
      <StrategieServices />
      <StrategieFAQ />
      
      <CTA 
        title="Bereit für eine strategische Website?"
        subtitle="Lassen Sie uns gemeinsam eine digitale Strategie entwickeln, die Ihre Geschäftsziele erreicht."
        primaryCta="Strategiegespräch vereinbaren"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanStrategy;
