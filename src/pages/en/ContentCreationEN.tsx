
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Content Creation | ooliv</title>
        <meta name="description" content="Content creation services for businesses. We create engaging content that connects with your audience." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Content Creation</h1>
        <p className="mt-6 text-lg">Our content creation services are available in English.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishContentCreation;
