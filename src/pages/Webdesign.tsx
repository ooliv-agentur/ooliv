
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import SEOTextSection from '@/components/web-design/SEOTextSection';
import CTA from '@/components/CTA';

const Webdesign = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Webdesign Agentur | Professionelles Webdesign für Unternehmen</title>
        <meta name="description" content="Professionelles Webdesign für Ihr Unternehmen. Wir gestalten moderne, responsive Webseiten mit Fokus auf Conversion und Benutzerfreundlichkeit." />
        <meta name="keywords" content="webdesign, webseite gestalten, responsive webdesign, webdesign agentur" />
      </Helmet>
      
      <WebDesignHero />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignCaseStudies />
      <SEOTextSection />
      <WebDesignFAQ />
      <CTA 
        title="Bereit für professionelles Webdesign?"
        subtitle="Lassen Sie uns über Ihr Projekt sprechen."
        primaryCta="Projekt starten"
      />
    </PageLayout>
  );
};

export default Webdesign;
