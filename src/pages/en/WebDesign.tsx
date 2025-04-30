
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHeroEN';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefitsEN';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirstEN';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptionsEN';
import WebDesignProcess from '@/components/web-design/WebDesignProcessEN';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQEN';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const EnglishWebDesign = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Design Mainz | UX-focused & Bespoke with ooliv</title>
        <meta name="description" content="Web design for B2B brands in Mainz: modern, conversion-focused and bespoke. ooliv advertising agency Mainz develops websites that perform – without templates." />
      </Helmet>

      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignProcess />
      
      {/* Full Case Studies Section with global titles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <WebDesignFAQ />
      
      {/* Final CTA Section - translated to English */}
      <CTA 
        title="Let's Talk About Your Web Design Project"
        subtitle="Let's develop a website together that doesn't just look good, but also becomes visible and converts."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Strategy Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishWebDesign;
