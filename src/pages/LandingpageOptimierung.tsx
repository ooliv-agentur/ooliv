import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import LandingpageOptimierungHero from '@/components/landingpage-optimierung/LandingpageOptimierungHero';
import LandingpageOptimierungProblem from '@/components/landingpage-optimierung/LandingpageOptimierungProblem';
import LandingpageOptimierungBenefits from '@/components/landingpage-optimierung/LandingpageOptimierungBenefits';
import LandingpageOptimierungWhy from '@/components/landingpage-optimierung/LandingpageOptimierungWhy';
import LandingpageOptimierungProcess from '@/components/landingpage-optimierung/LandingpageOptimierungProcess';
import LandingpageOptimierungProof from '@/components/landingpage-optimierung/LandingpageOptimierungProof';
import LandingpageOptimierungFAQ from '@/components/landingpage-optimierung/LandingpageOptimierungFAQ';
import LandingpageOptimierungCTA from '@/components/landingpage-optimierung/LandingpageOptimierungCTA';
import LandingpageOptimierungSEO from '@/components/landingpage-optimierung/LandingpageOptimierungSEO';

const LandingpageOptimierung = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Landingpage Optimierung | Conversion Rate steigern | ooliv</title>
        <meta 
          name="description" 
          content="Landingpage optimieren: Kostenloses Conversion-Konzept in 48h. Mehr Leads durch strukturierte UX-Analyse und klare Optimierungsempfehlungen." 
        />
        <meta name="keywords" content="landingpage optimierung, conversion optimierung website, mehr leads über website, conversion rate steigern, landingpage agentur mainz" />
        <link rel="canonical" href="https://ooliv.de/landingpage-optimierung" />
        <meta property="og:title" content="Landingpage Optimierung | Mehr Leads durch Conversion | ooliv" />
        <meta property="og:description" content="Ihre Landingpage bringt keine Leads? Das ändern wir. Kostenloses Conversion-Konzept in 48h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ooliv.de/landingpage-optimierung" />
      </Helmet>

      <LandingpageOptimierungHero />
      <LandingpageOptimierungProblem />
      <LandingpageOptimierungBenefits />
      <LandingpageOptimierungWhy />
      <LandingpageOptimierungProcess />
      <LandingpageOptimierungProof />
      <LandingpageOptimierungFAQ />
      <LandingpageOptimierungCTA />
      <LandingpageOptimierungSEO />
    </PageLayout>
  );
};

export default LandingpageOptimierung;
