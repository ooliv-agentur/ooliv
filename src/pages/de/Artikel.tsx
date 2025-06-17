
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import ArticleOverview from '@/components/content/ArticleOverview';

const Artikel = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Artikel | ooliv - Ihre Werbeagentur</title>
        <meta 
          name="description" 
          content="Entdecken Sie unsere neuesten Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps für Ihr Business."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <ArticleOverview />
      </div>
    </PageLayout>
  );
};

export default Artikel;
