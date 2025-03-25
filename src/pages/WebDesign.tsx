
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignProcess />
      <WebDesignCaseStudies />
      <WebDesignFAQ />
      
      {/* Final CTA Section */}
      <CTA 
        title="Let's Talk About Your Website Project"
        subtitle="We'll help you build something faster, smarter, and more effective than what you have now."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Strategy Call"
      />
    </PageLayout>
  );
};

export default WebDesign;
