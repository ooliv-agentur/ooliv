
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AboutUsSEOText from '@/components/about-us/AboutUsSEOText';
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

  return (
    <PageLayout 
      className="overflow-x-hidden" 
      seoText={<AboutUsSEOText />}
    >
      <Helmet>
        <title>Über ooliv – Ihre Marketing Agentur Mainz</title>
        <meta name="description" content="Erfahren Sie mehr über ooliv – Ihre Marketing Agentur Mainz. Persönlich, erfahren und individuell. Gemeinsam gestalten wir Ihre digitale Zukunft." />
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
      <AboutUsFAQ />
      <AboutUsCTA />
    </PageLayout>
  );
};

export default GermanAboutUs;
