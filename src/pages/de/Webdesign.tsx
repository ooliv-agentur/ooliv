import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import SEOTextSection from '@/components/web-design/SEOTextSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<SEOTextSection />}
    >
      <Helmet>
        <title>Webdesign Mainz | Professionelle Websites die konvertieren</title>
        <meta name="description" content="Professionelles Webdesign aus Mainz: Moderne, responsive Websites die Ihre Zielgruppe begeistern und zu Kunden machen. Jetzt kostenlos beraten lassen!" />
        <meta name="keywords" content="Webdesign Mainz, Website erstellen Mainz, Responsive Webdesign, WordPress Webdesign Mainz, Professionelle Website Mainz, Webdesigner Mainz" />
        <meta name="focus-keyword" content="Webdesign Mainz" />
      </Helmet>
      
      <WebDesignHero />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignBenefits />
      <WebDesignCaseStudies />
      <WebDesignFAQ />
      <CTA 
        title="Starten Sie Ihr Webdesign-Projekt"
        subtitle="Lassen Sie uns gemeinsam eine Website erstellen, die Ihre Marke perfekt repräsentiert und Ihre Geschäftsziele erreicht."
        primaryCta="Webdesign-Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanWebDesign;
