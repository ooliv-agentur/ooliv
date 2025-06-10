
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
    <PageLayout>
      <Helmet>
        <title>Contact – ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Contact ooliv – Your marketing agency in Mainz. Personal consultation, clear communication and individual solutions for your project." />
        <meta name="keywords" content="Contact Marketing Agency Mainz, ooliv Contact, Marketing Consultation Mainz, Digital Agency Contact" />
        <meta name="focus-keyword" content="Marketing Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            Contact – ooliv Marketing Agency Mainz
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Contact ooliv – Your marketing agency in Mainz. Personal consultation, clear communication and individual solutions for your project.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishContact;
