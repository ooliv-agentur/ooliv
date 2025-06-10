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
        <title>Digitale Strategie | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Entwickeln Sie mit ooliv eine maßgeschneiderte digitale Strategie für Ihr Unternehmen. Strategieberatung für nachhaltigen Online-Erfolg." />
        <meta name="keywords" content="Digitale Strategie Mainz, Strategieberatung Mainz, Online Marketing Strategie, Digital Marketing Beratung Mainz, Unternehmensstrategie Digital" />
      </Helmet>
      
      <StrategieHero />
    </PageLayout>
  );
};

export default Strategie;
