
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import CTA from '@/components/CTA';

const GermanStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Webkonzept – Strategie für Ihre Website</title>
        <meta name="description" content="Durchdachtes Webkonzept von ooliv: Strategie und Struktur für erfolgreiche Websites. Wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen." />
      </Helmet>

      <StrategieHero />
      <StrategieBenefits />
      <StrategieProcess />
      <StrategieServices />
      
      {/* Footer CTA Section */}
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
