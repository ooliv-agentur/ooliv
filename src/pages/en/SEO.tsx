
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishSEO = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>SEO Agency Mainz | Visibility for B2B with ooliv</title>
        <meta name="description" content="More visibility for your website: ooliv is your SEO agency in Mainz - advertising agency for onpage, content & strategy for sustainable rankings." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">SEO Optimization</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishSEO;
