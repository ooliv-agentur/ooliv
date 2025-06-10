
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>SEO Agency Mainz – Visible Online</title>
        <meta name="description" content="As an SEO agency in Mainz, we ensure top rankings. ooliv increases your online presence with customized search engine optimization." />
        <meta name="keywords" content="SEO Agency Mainz, Search Engine Optimization Mainz, SEO Consulting Mainz, Google Ranking Mainz, Local SEO Mainz" />
        <meta name="focus-keyword" content="SEO Agency Mainz" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading mb-6">
            SEO Agency Mainz – Visible Online
          </h1>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            As an SEO agency in Mainz, we ensure top rankings. ooliv increases your online presence with customized search engine optimization.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishSEO;
