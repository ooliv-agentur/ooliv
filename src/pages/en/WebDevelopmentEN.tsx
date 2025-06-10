
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>WordPress Agency Mainz – Technically Strong</title>
        <meta name="description" content="Your WordPress agency in Mainz: Modern web development, technically sophisticated and individual. We implement your digital vision reliably." />
        <meta name="keywords" content="WordPress Agency Mainz, Web Development Mainz, Custom WordPress Development, Professional WordPress Developers, Technical Web Solutions" />
        <meta name="focus-keyword" content="WordPress Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            WordPress Agency Mainz – Technically Strong
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Your WordPress agency in Mainz: Modern web development, technically sophisticated and individual. We implement your digital vision reliably.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
