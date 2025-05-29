
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import SEOTextSection from '@/components/web-design/SEOTextSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanWebdesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Webdesign Mainz für B2B-Unternehmen mit Wachstumskurs</title>
        <meta 
          name="description" 
          content="Professionelles Webdesign aus Mainz für B2B-Unternehmen. Strategische Websites, die Leads generieren und bei Google gefunden werden. Jetzt Projekt starten!" 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <WebDesignHero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <WebDesignServices />
          <WebDesignProcess />
          <WebDesignBenefits />
          <WebDesignCaseStudies />
          <WebDesignFAQ />
          <CTA 
            title="Bereit für ein Webdesign, das Ihr Unternehmen voranbringt?"
            subtitle="Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Ziele erreicht."
            primaryCta="Projekt starten"
          />
        </div>
      </div>
      
      <SEOTextSection />
    </>
  );
};

export default GermanWebdesign;
