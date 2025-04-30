
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
import WebDesignSEOSection from '@/components/web-design/WebDesignSEOSection';

const GermanWebDesign = () => {
  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <Helmet>
          <title>Webdesign Mainz | UX-stark & individuell mit ooliv</title>
          <meta name="description" content="Webdesign für B2B-Marken in Mainz: modern, conversionstark und individuell. ooliv entwickelt Websites, die wirken – ohne Templates." />
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
          title="Sprechen wir über Ihr Webdesign-Projekt"
          subtitle="Lassen Sie uns gemeinsam eine Website entwickeln, die nicht nur gut aussieht, sondern auch sichtbar wird und konvertiert."
          primaryCta="Projekt starten"
          secondaryCta="Strategiegespräch vereinbaren"
          secondaryCtaLink="/kontakt"
        />
      </PageLayout>
      
      {/* SEO Text Section placed after the PageLayout */}
      <WebDesignSEOSection />
    </>
  );
};

export default GermanWebDesign;
