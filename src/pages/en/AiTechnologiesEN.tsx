
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>AI Agency Mainz – Future Technologies</title>
        <meta name="description" content="As an AI agency in Mainz, we use cutting-edge technologies for individual solutions. We increase your efficiency and competitiveness." />
        <meta name="keywords" content="AI Agency Mainz, Artificial Intelligence Mainz, AI Solutions, Machine Learning Mainz, AI Consulting" />
        <meta name="focus-keyword" content="AI Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            AI Agency Mainz – Future Technologies
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            As an AI agency in Mainz, we use cutting-edge technologies for individual solutions. We increase your efficiency and competitiveness.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishAiTechnologies;
