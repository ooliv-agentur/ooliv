
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishThankYou = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Thank You | ooliv</title>
        <meta name="description" content="Thank you for contacting us. We'll be in touch soon." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="mt-6 text-lg">We've received your message and will be in touch soon.</p>
        
        <div className="mt-12">
          <a 
            href="/en" 
            className="px-6 py-3 bg-[#b1b497] hover:bg-[#9a9c83] text-white rounded-md transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishThankYou;
