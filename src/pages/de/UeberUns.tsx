
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import AboutUsHero from '@/components/about-us/AboutUsHero';
import AboutUsIntroduction from '@/components/about-us/AboutUsIntroduction';
import AboutUsStory from '@/components/about-us/AboutUsStory';
import AboutUsWhySmall from '@/components/about-us/AboutUsWhySmall';
import AboutUsTargetBusinesses from '@/components/about-us/AboutUsTargetBusinesses';
import AboutUsIndividual from '@/components/about-us/AboutUsIndividual';
import AboutUsDigitalPartner from '@/components/about-us/AboutUsDigitalPartner';
import AboutUsTeamCapabilities from '@/components/about-us/AboutUsTeamCapabilities';
import AboutUsLocation from '@/components/about-us/AboutUsLocation';
import AboutUsDigitalServices from '@/components/about-us/AboutUsDigitalServices';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import AboutUsCTA from '@/components/about-us/AboutUsCTA';
import AboutUsSEOText from '@/components/about-us/AboutUsSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<AboutUsSEOText />}
    >
      <Helmet>
        <title>Über ooliv – Ihre Marketing Agentur Mainz</title>
        <meta name="description" content="Erfahren Sie mehr über ooliv – Ihre Marketing Agentur Mainz. Persönlich, erfahren und individuell. Gemeinsam gestalten wir Ihre digitale Zukunft." />
        <meta name="keywords" content="Marketing Agentur Mainz, Über ooliv Mainz, Werbeagentur Team Mainz, Digitalagentur Geschichte Mainz, Webdesign Agentur Mainz, Marketing Experten Mainz" />
        <meta name="focus-keyword" content="Marketing Agentur Mainz" />
      </Helmet>
      
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
      <AboutUsCTA />
    </PageLayout>
  );
};

export default GermanAboutUs;
