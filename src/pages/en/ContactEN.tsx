
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Contact Us | ooliv</title>
        <meta name="description" content="Get in touch with our team to discuss your project." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-6 text-lg">Get in touch with our team to discuss your project.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishContact;
