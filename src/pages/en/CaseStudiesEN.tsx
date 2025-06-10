
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishCaseStudies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Marketing Mainz – Successful Projects</title>
        <meta name="description" content="Discover our successful marketing projects in Mainz. Case studies from ooliv show strategies that work and inspire." />
        <meta name="keywords" content="Marketing Mainz, Case Studies Mainz, Successful Projects, Marketing Portfolio, Digital Marketing Results" />
        <meta name="focus-keyword" content="Marketing Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            Marketing Mainz – Successful Projects
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Discover our successful marketing projects in Mainz. Case studies from ooliv show strategies that work and inspire.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishCaseStudies;
