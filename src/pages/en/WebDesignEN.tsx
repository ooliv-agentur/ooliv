
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Web Design Mainz – Individual & Successful</title>
        <meta name="description" content="Creative web design in Mainz – individually tailored to your goals. We design websites that inspire and deliver measurable results." />
        <meta name="keywords" content="Web Design Mainz, Creative Website Design, Custom Web Design, Professional Web Design Agency Mainz, Responsive Web Design" />
        <meta name="focus-keyword" content="Web Design Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            Web Design Mainz – Individual & Successful
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Creative web design in Mainz – individually tailored to your goals. We design websites that inspire and deliver measurable results.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishWebDesign;
