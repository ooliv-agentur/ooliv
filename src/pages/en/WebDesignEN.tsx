
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
import WebDesignSEOTextEN from '@/components/web-design/WebDesignSEOTextEN';
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
          <title>Webdesign by ooliv – Custom Websites for Business Growth</title>
          <meta name="description" content="Discover tailor-made webdesign solutions by ooliv. Scalable WordPress websites, SEO strategies, and high-performance design for international businesses." />
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
      <WebDesignSEOTextEN />
    </>
  );
};

export default EnglishWebDesign;
