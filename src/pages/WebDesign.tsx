
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Strategic Web Design for Business Growth | ooliv</title>
        <meta name="description" content="We design websites that improve your Google visibility, drive qualified leads, and align with your business goals. Our webdesign services are built on strategy – not templates." />
      </Helmet>
      
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignProcess />
      
      {/* Full Case Studies Section with all 5 cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <WebDesignFAQ />
      
      {/* Final CTA Section - removed footerNote to prevent duplication */}
      <CTA 
        title="Let's Talk About Your Webdesign Project"
        subtitle="We'll help you build something faster, smarter, and more strategic than what you have today."
        primaryCta="Start Your Web Project"
        secondaryCta="Book a Strategy Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default WebDesign;
