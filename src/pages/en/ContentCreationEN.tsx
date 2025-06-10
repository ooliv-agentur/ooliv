
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
    <PageLayout>
      <Helmet>
        <title>Content Agency Mainz – Texts that Work</title>
        <meta name="description" content="ooliv – Your content agency in Mainz. We create compelling texts that reach your target audience and strengthen your brand." />
        <meta name="keywords" content="Content Agency Mainz, Content Creation Mainz, Professional Copywriting, Content Marketing Mainz, SEO Content Writing" />
        <meta name="focus-keyword" content="Content Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            Content Agency Mainz – Texts that Work
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            ooliv – Your content agency in Mainz. We create compelling texts that reach your target audience and strengthen your brand.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishContentCreation;
