
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishCaseStudies = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Case Studies | ooliv Advertising Agency Mainz</title>
        <meta name="description" content="See how ooliv advertising agency Mainz delivers measurable results for clients through web design, development, SEO and digital marketing." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Case Studies</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishCaseStudies;
