
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const WebDesign = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignProcess />
      
      {/* Full Case Studies Section with all 5 cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            Web Design Success Stories
          </h2>
          <CaseStudiesSection showAll={true} showCta={true} />
        </div>
      </section>
      
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
