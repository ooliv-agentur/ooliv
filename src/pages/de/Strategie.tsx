
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';

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
    </PageLayout>
  );
};

export default GermanStrategy;
