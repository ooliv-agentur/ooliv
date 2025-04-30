
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import WebDevHeroDE from '@/components/web-development/WebDevHeroDE';
import WebDevProcessDE from '@/components/web-development/WebDevProcessDE';
import WebDevServicesDE from '@/components/web-development/WebDevServicesDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import WebDevBenefitsDE from '@/components/web-development/WebDevBenefitsDE';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';

const Webentwicklung = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Webentwicklung | Maßgeschneiderte Entwicklung für Ihre Website</title>
        <meta name="description" content="Professionelle Webentwicklung für Unternehmen. Wir entwickeln maßgeschneiderte, technisch ausgereifte Websites mit modernen Technologien." />
        <meta name="keywords" content="webentwicklung, web development, website programmierung, wordpress entwicklung" />
      </Helmet>
      
      <WebDevHeroDE />
      <WebDevServicesDE />
      <WebDevProcessDE />
      <WebDevCmsVsStaticDE />
      <WebDevProcessNewDE />
      <WebDevBenefitsDE />
      <WebDevCaseStudies />
      <WebDevFAQ />
      <WebDevCTA />
    </PageLayout>
  );
};

export default Webentwicklung;
