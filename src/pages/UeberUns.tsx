
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

import AboutUsHero from '@/components/about-us/AboutUsHero';
import AboutUsIntroduction from '@/components/about-us/AboutUsIntroduction';
import AboutUsStory from '@/components/about-us/AboutUsStory';
import UliSection from '@/components/about-us/UliSection';
import OurApproach from '@/components/about-us/OurApproach';
import TeamSection from '@/components/TeamSection';
import WhySmallTeam from '@/components/about-us/WhySmallTeam';
import TargetIndustries from '@/components/about-us/TargetIndustries';
import AboutUsFAQNew from '@/components/about-us/AboutUsFAQNew';
import AboutUsCTANew from '@/components/about-us/AboutUsCTANew';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über ooliv",
    "description": "Über ooliv - Ihre Marketing Agentur Mainz. Erfahren Sie mehr über unser Team, unsere Geschichte und unsere Mission.",
    "url": "https://ooliv.de/ueber-uns",
    "mainEntity": {
      "@type": "Organization",
      "name": "ooliv Werbeagentur",
      "foundingDate": "2009",
      "description": "Marketing Agentur aus Mainz für individuelle, strategische und messbare digitale Lösungen",
      "numberOfEmployees": "10",
      "knowsAbout": ["Webdesign", "SEO", "Google Ads", "Content Marketing", "KI-Technologien"]
    }
  };

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="Über ooliv – Digitale Agentur für Strategie, UX & AI seit 2008"
        description="Lernen Sie das Team hinter ooliv kennen – spezialisiert auf Strategie, UX, Webentwicklung, SEO und AI-gestützte Workflows. Seniorgeführt. Ehrlich. Effizient."
        canonicalUrl="https://ooliv.de/ueber-uns"
        structuredData={structuredData}
        keywords="Über ooliv, Digitalagentur, Team, Strategie, UX, AI-Workflows"
        breadcrumbs={[
          { name: "Home", url: "https://ooliv.de/" },
          { name: "Über uns", url: "https://ooliv.de/ueber-uns" }
        ]}
      />

      <AboutUsHero />
      <AboutUsIntroduction />
      <AboutUsStory />
      <UliSection />
      <OurApproach />
      
      <div id="team">
        <TeamSection />
      </div>

      <WhySmallTeam />
      <TargetIndustries />
      <AboutUsFAQNew />
      <AboutUsCTANew />
    </PageLayout>
  );
};

export default GermanAboutUs;
