
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import StrategieHero from '@/components/strategy/StrategieHero';
import { useLanguage } from '@/contexts/LanguageContext';

const Strategie = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Webkonzept – Strategie für Ihre Website</title>
        <meta name="description" content="Durchdachtes Webkonzept von ooliv: Strategie und Struktur für erfolgreiche Websites. Wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen." />
        <meta name="keywords" content="Webkonzept, Digitale Strategie Mainz, Strategieberatung Mainz, Online Marketing Strategie, Digital Marketing Beratung Mainz, Unternehmensstrategie Digital" />
        <meta name="focus-keyword" content="Webkonzept" />
      </Helmet>
      
      <StrategieHero />
    </PageLayout>
  );
};

export default Strategie;
