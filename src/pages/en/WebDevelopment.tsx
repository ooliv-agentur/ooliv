
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishWebDevelopment = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Development | ooliv Advertising Agency Mainz</title>
        <meta name="description" content="Professional web development from our advertising agency in Mainz - ooliv develops scalable, secure websites with modern technology and SEO best practices." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Web Development</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
