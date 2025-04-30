
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const Kontakt = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Kontakt | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Nehmen Sie Kontakt mit der Werbeagentur ooliv auf. Wir beraten Sie gerne zu Webdesign, SEO und Online-Marketing." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
        <p className="mb-4">Diese Seite wird bald mit vollständigem Inhalt verfügbar sein.</p>
      </div>
    </PageLayout>
  );
};

export default Kontakt;
