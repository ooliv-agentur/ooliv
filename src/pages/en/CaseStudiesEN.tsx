
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';

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
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl mb-12">Explore our work and success stories.</p>
        
        <CaseStudiesSection 
          customTitle="Real Results from Real Clients"
          customSubtitle="We deliver websites and strategies that make what's special about your business visible."
          customBodyText="See how we've helped companies achieve sustainable growth through clear positioning, strong content, SEO performance, and measurable UX optimization."
        />
      </div>
      
      <CTA 
        title="Ready to create your success story?"
        subtitle="Let's discuss how our team can help your business achieve its online goals."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Strategy Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishCaseStudies;
