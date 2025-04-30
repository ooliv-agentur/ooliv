
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishContact = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Contact ooliv | Advertising Agency Mainz</title>
        <meta name="description" content="Get in touch with ooliv advertising agency Mainz - let's discuss your project and how we can help you achieve measurable digital success." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishContact;
