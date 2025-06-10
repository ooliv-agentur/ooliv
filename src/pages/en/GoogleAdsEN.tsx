
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Google Ads Agency Mainz – More Leads</title>
        <meta name="description" content="With ooliv as your Google Ads agency in Mainz, you reach new customers. We optimize your campaigns for maximum results." />
        <meta name="keywords" content="Google Ads Agency Mainz, Google Ads Management, PPC Agency Mainz, Google Advertising Mainz, Paid Search Marketing" />
        <meta name="focus-keyword" content="Google Ads Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            Google Ads Agency Mainz – More Leads
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            With ooliv as your Google Ads agency in Mainz, you reach new customers. We optimize your campaigns for maximum results.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishGoogleAds;
