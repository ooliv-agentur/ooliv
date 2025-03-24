
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDesign = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout>
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignCaseStudies />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default WebDesign;
