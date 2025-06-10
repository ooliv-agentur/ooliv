
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import SEOCtaDE from '@/components/seo/SEOCtaDE';
import SEOTextSectionDE from '@/components/seo/SEOTextSectionDE';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<SEOTextSectionDE />}
    >
      <Helmet>
        <title>SEO Agentur Mainz – Sichtbar im Netz</title>
        <meta name="description" content="Als SEO Agentur in Mainz sorgen wir für Top-Rankings. ooliv steigert Ihre Online-Präsenz mit maßgeschneiderter Suchmaschinenoptimierung." />
        <meta name="keywords" content="SEO Agentur Mainz, Suchmaschinenoptimierung Mainz, SEO Beratung Mainz, Google Ranking Mainz, Local SEO Mainz, SEO Optimierung Mainz" />
        <meta name="focus-keyword" content="SEO Agentur Mainz" />
      </Helmet>
      
      <SEOHeroDE />
      <SEOServicesDE />
      <SEOProcessDE />
      <SEOBenefitsDE />
      <SEOApproachDE />
      <SEOCaseStudies />
      <SEOCtaDE />
    </PageLayout>
  );
};

export default GermanSEO;
