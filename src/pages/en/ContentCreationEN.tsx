
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import CTA from '@/components/CTA';

const EnglishContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Content Creation | ooliv</title>
        <meta name="description" content="Content creation services for businesses. We create engaging content that connects with your audience." />
      </Helmet>
      
      <ContentHero />
      <ContentServices />
      <ContentBenefits />
      <ContentExpertInsight />
      <ContentProcess />
      <ContentCaseStudies />
      <CTA 
        title="Ready to transform your content strategy?"
        subtitle="Let's discuss how our team can help your business achieve its content goals."
        primaryCta="Start Your Content Project"
        secondaryCta="View Case Studies"
        secondaryCtaLink="/en/case-studies"
      />
    </PageLayout>
  );
};

export default EnglishContentCreation;
