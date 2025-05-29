
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
import WebDesignSEOTextEN from '@/components/web-design/WebDesignSEOTextEN';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Web Design Mainz – Strategic Design for Business Growth</title>
        <meta 
          name="description" 
          content="Professional web design from Mainz for B2B companies. Strategic websites that generate leads and rank well on Google. Start your project now!" 
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
            title="Ready for web design that drives your business forward?"
            subtitle="Let's work together to develop a website that achieves your goals."
            primaryCta="Start Your Project"
          />
        </div>
      </div>
      
      <WebDesignSEOTextEN />
    </>
  );
};

export default EnglishWebDesign;
