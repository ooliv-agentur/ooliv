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
        <title>Webentwicklung Mainz | Schnelle & Sichere Websites</title>
        <meta name="description" content="Professionelle Webentwicklung aus Mainz: Moderne, sichere und schnelle Websites mit React, TypeScript und modernen Technologien." />
        <meta name="keywords" content="Webentwicklung Mainz, Website Programmierung Mainz, React Entwicklung Mainz, TypeScript Entwicklung, Webentwickler Mainz, Custom Website Development" />
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
