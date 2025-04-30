
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishLegalNotice = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Legal Notice | ooliv Advertising Agency Mainz</title>
        <meta name="description" content="Legal notice and site information for ooliv advertising agency Mainz - contact details, legal representation and regulatory information." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Legal Notice</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishLegalNotice;
