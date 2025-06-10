import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

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

      {/* Strategy page content will be implemented later */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-8 text-brand-heading">Webkonzept & Strategie</h1>
          <p className="text-lg text-brand-text">
            Diese Seite wird in Kürze mit vollständigen Inhalten verfügbar sein.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanStrategy;
