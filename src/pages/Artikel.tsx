
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleOverview from '@/components/content/ArticleOverview';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

const Artikel = () => {
  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Artikel | ooliv - Ihre Werbeagentur"
        description="Entdecken Sie unsere neuesten Artikel von BabyLoveGrowth.ai mit wertvollen Insights und Tipps für Ihr Business."
        canonicalUrl="https://ooliv.de/artikel"
        keywords="Artikel, Blog, Digitales Marketing, SEO, Webdesign, ooliv Werbeagentur"
      />
      
      <ArticleOverview />
    </PageLayout>
  );
};

export default Artikel;
