
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import DeutscherHero from '@/components/de/DeutscherHero';
import Challenge from '@/components/Challenge';
import Solution from '@/components/Solution';
import TeamTeaser from '@/components/TeamTeaser';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import EnglishHero from '@/components/en/EnglishHero';

const EnglishIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Design Agency Mainz – High-Performance Websites | ooliv</title>
        <meta name="description" content="ooliv creates websites that rank better, convert more, and deliver measurable business success. SEO, webdesign and web development from Mainz." />
      </Helmet>

      <EnglishHero />
      <Challenge 
        title="Your Website Should Work for You—Not Against You."
        description="Many businesses struggle with websites that don't perform—whether they're outdated, too slow, or don't exist yet. A website that doesn't generate leads, build trust, or rank well on Google is a wasted opportunity."
      />
      <Solution />
      <TeamTeaser />
      <ClientLogos />
      <CTA 
        title="Let's build a website that drives your business forward."
        subtitle="Your website should be an engine for growth, not a limitation. Let's discuss your challenges and create a plan to turn your digital presence into a business advantage."
        primaryCta="Start Project"
        secondaryCta="See Our Work"
        secondaryCtaLink="/en/case-studies"
      />
    </PageLayout>
  );
};

export default EnglishIndex;
