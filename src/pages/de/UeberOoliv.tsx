
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import HeroUeber from '@/components/hero/HeroUeber';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import TeamProfiles from '@/components/about/TeamProfiles';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import WoWirArbeitenDE from '@/components/de/WoWirArbeitenDE';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';

const UeberOoliv = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Über ooliv | Werbeagentur für B2B Webdesign & SEO in Mainz</title>
        <meta name="description" content="Lernen Sie ooliv kennen – Ihre Agentur für Webdesign, SEO & Content in Mainz. Seit 2008 entwickeln wir maßgeschneiderte Weblösungen für B2B-Kunden." />
      </Helmet>

      <HeroUeber />
      <AboutStory />
      <AboutValues />
      <TeamProfiles />
      <AboutTimeline />
      <WoWirArbeitenDE />
      <AboutTestimonials />
      <ClientLogos />
      
      <CTA 
        title="Gemeinsam zum Erfolg"
        subtitle="Lassen Sie uns besprechen, wie wir Ihr Unternehmen mit strategischen Web- und Marketinglösungen unterstützen können."
        primaryCta="Projekt starten"
        secondaryCta="Team kennenlernen"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default UeberOoliv;
