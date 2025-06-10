
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHeroDE from '@/components/web-development/WebDevHeroDE';
import WebDevServicesDE from '@/components/web-development/WebDevServicesDE';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';
import WebDevBenefitsDE from '@/components/web-development/WebDevBenefitsDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import WebDevSEOText from '@/components/web-development/WebDevSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<WebDevSEOText />}
    >
      <Helmet>
        <title>WordPress Agentur Mainz – Technisch stark</title>
        <meta name="description" content="Ihre WordPress Agentur in Mainz: Moderne Webentwicklung, technisch ausgereift und individuell. Wir realisieren Ihre digitale Vision zuverlässig." />
        <meta name="keywords" content="WordPress Agentur Mainz, Webentwicklung Mainz, CMS Entwicklung Mainz, React Development, JavaScript Agentur Mainz, Custom WordPress Mainz" />
        <meta name="focus-keyword" content="WordPress Agentur Mainz" />
      </Helmet>
      
      <WebDevHeroDE />
      <WebDevServicesDE />
      <WebDevProcessNewDE />
      <WebDevBenefitsDE />
      <WebDevCmsVsStaticDE />
      <WebDevCaseStudies />
      <WebDevCTA />
    </PageLayout>
  );
};

export default GermanWebDevelopment;
