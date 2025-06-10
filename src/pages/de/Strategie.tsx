
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import StrategieFAQ from '@/components/strategy/StrategieFAQ';
import StrategieSEOText from '@/components/strategy/StrategieSEOText';
import CTA from '@/components/CTA';

const GermanStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<StrategieSEOText />}
    >
      <Helmet>
        <title>Webkonzept & Strategie für Ihren Erfolg – ooliv Mainz</title>
        <meta name="description" content="Wir entwickeln individuelle Digitalstrategien mit Webkonzepten, die messbare Ergebnisse liefern – für mehr Sichtbarkeit, mehr Leads und eine starke Marke." />
      </Helmet>

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
