
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const UeberOoliv = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Über ooliv | Werbeagentur Mainz für B2B-Unternehmen</title>
        <meta name="description" content="Wir sind ooliv, Ihre Werbeagentur aus Mainz – spezialisiert auf strategische Webdesigns und digitales Marketing für B2B-Unternehmen." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Über ooliv</h1>
        <p className="mb-4">Diese Seite wird bald mit vollständigem Inhalt verfügbar sein.</p>
      </div>
    </PageLayout>
  );
};

export default UeberOoliv;
