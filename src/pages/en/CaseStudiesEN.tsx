
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
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Case Studies | ooliv</title>
        <meta name="description" content="Explore our case studies to see how we've helped businesses achieve their goals." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-6 text-lg">Explore our work and success stories.</p>
      </div>
    </PageLayout>
  );
};

export default EnglishCaseStudies;
