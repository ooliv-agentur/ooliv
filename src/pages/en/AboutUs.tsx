
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishAboutUs = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>About ooliv | Advertising Agency Mainz</title>
        <meta name="description" content="Meet ooliv - your advertising agency in Mainz with over 16 years of experience building websites that convert, rank, and drive business growth." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About ooliv</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishAboutUs;
