
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ArticleOverview from '@/components/content/ArticleOverview';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

const Artikel = () => {
  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Blog & Artikel | ooliv Digitalagentur"
        description="Marketing-Insights, SEO-Tipps & Webdesign-Trends – Expertenwissen von ooliv. Praktische Anleitungen für erfolgreiches B2B-Marketing."
        canonicalUrl="https://ooliv.de/artikel"
        keywords="Artikel, Blog, Digitales Marketing, SEO, Webdesign, B2B Content"
      />
      
      <ArticleOverview />
    </PageLayout>
  );
};

export default Artikel;
