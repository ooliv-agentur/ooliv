
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import LatestContentDisplay from '@/components/content/LatestContentDisplay';

const LatestContent = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Neuester Artikel | ooliv - Ihre Werbeagentur</title>
        <meta 
          name="description" 
          content="Entdecken Sie unseren neuesten Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <LatestContentDisplay />
      </div>
    </PageLayout>
  );
};

export default LatestContent;
