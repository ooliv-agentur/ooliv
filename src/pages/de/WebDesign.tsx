
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GermanWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
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
      
      {/* Final CTA Section */}
      <CTA 
        title="Sprechen wir über Ihr Webdesign-Projekt"
        subtitle="Lassen Sie uns gemeinsam eine Website entwickeln, die nicht nur gut aussieht, sondern auch sichtbar wird und konvertiert."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default GermanWebDesign;
