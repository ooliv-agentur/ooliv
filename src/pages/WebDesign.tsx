
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WebDesignSEOSection from '@/components/web-design/WebDesignSEOSection';

const WebDesign = () => {
  return (
    <>
      <PageLayout className="overflow-x-hidden">
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
      </PageLayout>
      
      {/* SEO Text Section placed after the PageLayout */}
      <WebDesignSEOSection />
    </>
  );
};

export default WebDesign;
