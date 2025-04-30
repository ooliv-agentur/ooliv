
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const EnglishPrivacyPolicy = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | ooliv Advertising Agency Mainz</title>
        <meta name="description" content="Privacy policy and data protection information for ooliv advertising agency Mainz - how we handle and protect your personal information." />
      </Helmet>

      <div className="py-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-xl mb-4">This page is under construction and will be completed with full translations.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishPrivacyPolicy;
