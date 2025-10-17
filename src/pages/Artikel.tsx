
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleOverview from '@/components/content/ArticleOverview';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

const Artikel = () => {
  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Blog & Artikel | ooliv Werbeagentur Mainz"
        description="Marketing-Insights, SEO-Tipps & Webdesign-Trends – Expertenwissen von ooliv Mainz. Praktische Anleitungen für erfolgreiches B2B-Marketing."
        canonicalUrl="https://ooliv.de/artikel"
        keywords="Artikel, Blog, Digitales Marketing, SEO, Webdesign, ooliv Werbeagentur"
      />
      
      <ArticleOverview />
    </PageLayout>
  );
};

export default Artikel;
