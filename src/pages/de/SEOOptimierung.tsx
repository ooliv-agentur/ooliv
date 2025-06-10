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
        <title>SEO Agentur Mainz | Bessere Rankings & mehr Traffic</title>
        <meta name="description" content="SEO Optimierung aus Mainz: Verbessern Sie Ihre Google Rankings und erhalten Sie mehr qualifizierten Traffic für Ihr Unternehmen." />
        <meta name="keywords" content="SEO Mainz, SEO Agentur Mainz, Suchmaschinenoptimierung Mainz, Google Ranking verbessern Mainz, SEO Optimierung Mainz, Local SEO Mainz" />
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
