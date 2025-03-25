
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

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
      <WebDesignCaseStudies />
      <WebDesignFAQ />
      
      {/* Final CTA Section */}
      <CTA 
        title="Lassen Sie uns über Ihr Website-Projekt sprechen"
        subtitle="Wir helfen Ihnen, etwas Schnelleres, Intelligenteres und Effektiveres zu bauen als das, was Sie jetzt haben."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanWebDesign;
