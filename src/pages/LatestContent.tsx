
import React from 'react';
import PageLayout from '@/components/PageLayout';
import LatestContentDisplay from '@/components/content/LatestContentDisplay';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

const LatestContent = () => {
  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Neuester Artikel | ooliv - Ihre Werbeagentur"
        description="Entdecken Sie unseren neuesten Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps."
        canonicalUrl="https://ooliv.de/neuester-artikel"
      />
      <meta name="robots" content="noindex, follow" />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <LatestContentDisplay />
      </div>
    </PageLayout>
  );
};

export default LatestContent;
