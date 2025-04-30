
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishLegalNotice = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Legal Notice | ooliv</title>
        <meta name="description" content="Legal information about ooliv." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Legal Notice</h1>
        <div className="mt-6 text-lg prose max-w-none">
          <p>Legal information about ooliv.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishLegalNotice;
