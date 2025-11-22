
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

import AboutUsHero from '@/components/about-us/AboutUsHero';
import AboutUsIntroduction from '@/components/about-us/AboutUsIntroduction';
import AboutUsStory from '@/components/about-us/AboutUsStory';
import AboutUsWhySmall from '@/components/about-us/AboutUsWhySmall';
import AboutUsDigitalPartner from '@/components/about-us/AboutUsDigitalPartner';
import AboutUsIndividual from '@/components/about-us/AboutUsIndividual';
import AboutUsTeamCapabilities from '@/components/about-us/AboutUsTeamCapabilities';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import AboutUsDigitalServices from '@/components/about-us/AboutUsDigitalServices';
import AboutUsTargetBusinesses from '@/components/about-us/AboutUsTargetBusinesses';
import AboutUsLocation from '@/components/about-us/AboutUsLocation';
import AboutUsFAQ from '@/components/about-us/AboutUsFAQ';
import AboutUsCTA from '@/components/about-us/AboutUsCTA';

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
        title="Über uns | ooliv Werbeagentur Mainz"
        description="Werbeagentur Mainz seit 2008 – Inhabergeführt, persönlich, ehrlich. Team kennenlernen & erfahren, wie wir B2B-Unternehmen zum Erfolg verhelfen."
        canonicalUrl="https://ooliv.de/ueber-uns"
        structuredData={structuredData}
        keywords="Über ooliv, Werbeagentur Mainz, Team, Unternehmen, Digital Marketing"
        breadcrumbs={[
          { name: "Home", url: "https://ooliv.de/" },
          { name: "Über uns", url: "https://ooliv.de/ueber-uns" }
        ]}
      />

      <AboutUsHero />
      <AboutUsIntroduction />
      <AboutUsStory />
      <AboutUsWhySmall />
      <AboutUsDigitalPartner />
      <AboutUsIndividual />
      <AboutUsTeamCapabilities />
      
      <div id="team">
        <TeamSection />
      </div>

      <AboutCompactFAQ />
      <AboutUsDigitalServices />
      <AboutUsTargetBusinesses />
      <AboutUsLocation />
      <AboutUsFAQ />
      <AboutUsCTA />
    </PageLayout>
  );
};

export default GermanAboutUs;
