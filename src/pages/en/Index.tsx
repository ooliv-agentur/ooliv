
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishIndex = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>ooliv - Advertising Agency Mainz | Websites for Growth</title>
        <meta name="description" content="Advertising agency Mainz for measurable results – ooliv creates websites that rank higher, convert better, and drive business success." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">English Homepage</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishIndex;
