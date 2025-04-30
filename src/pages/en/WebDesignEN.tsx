
import React, { useEffect } from 'react';
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
import SEOTextSection from '@/components/web-design/SEOTextSection';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <Helmet>
          <title>Strategic Web Design Mainz for B2B Companies</title>
          <meta name="description" content="Web Design Mainz – no templates, but tailor-made solutions. For more leads, visibility and digital brand strength." />
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
        
        {/* Final CTA Section - removed footerNote to prevent duplication */}
        <CTA 
          title="Let's talk about your web design project"
          subtitle="Let's develop a website together that not only looks good but also becomes visible and converts."
          primaryCta="Start Project"
          secondaryCta="Schedule Strategy Talk"
          secondaryCtaLink="/en/contact"
        />
      </PageLayout>
      
      {/* SEO Text Section moved outside PageLayout to appear after footer */}
      <SEOTextSection />
    </>
  );
};

export default EnglishWebDesign;
