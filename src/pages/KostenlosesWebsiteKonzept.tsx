import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import KostenlosesKonzeptHero from '@/components/kostenloses-konzept/KostenlosesKonzeptHero';
import KostenlosesKonzeptBenefits from '@/components/kostenloses-konzept/KostenlosesKonzeptBenefits';
import KostenlosesKonzeptWhy from '@/components/kostenloses-konzept/KostenlosesKonzeptWhy';
import KostenlosesKonzeptSteps from '@/components/kostenloses-konzept/KostenlosesKonzeptSteps';
import KostenlosesKonzeptProof from '@/components/kostenloses-konzept/KostenlosesKonzeptProof';
import KostenlosesKonzeptFAQ from '@/components/kostenloses-konzept/KostenlosesKonzeptFAQ';
import KostenlosesKonzeptCTA from '@/components/kostenloses-konzept/KostenlosesKonzeptCTA';
import KostenlosesKonzeptSEO from '@/components/kostenloses-konzept/KostenlosesKonzeptSEO';

const KostenlosesWebsiteKonzept = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Kostenloses Website-Konzept in 48h | Website optimieren lassen | ooliv</title>
        <meta 
          name="description" 
          content="Ihre Website bringt keine Anfragen? Holen Sie sich jetzt Ihr kostenloses Website-Konzept mit klaren Optimierungs-Empfehlungen – in nur 48 Stunden. Unverbindlich & professionell." 
        />
        <meta name="keywords" content="Website optimieren lassen, Website überarbeiten lassen, kostenloses Website-Konzept, Website-Analyse, Conversion-Optimierung, Webdesign Mainz" />
        <link rel="canonical" href="https://ooliv.de/kostenloses-website-konzept" />
        <meta property="og:title" content="Kostenloses Website-Konzept in 48h | ooliv" />
        <meta property="og:description" content="Ihre Website bringt keine Anfragen? Kostenloses Konzept mit klaren Handlungsempfehlungen zur Optimierung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ooliv.de/kostenloses-website-konzept" />
      </Helmet>

      <KostenlosesKonzeptHero />
      <KostenlosesKonzeptBenefits />
      <KostenlosesKonzeptWhy />
      <KostenlosesKonzeptSteps />
      <KostenlosesKonzeptProof />
      <KostenlosesKonzeptFAQ />
      <KostenlosesKonzeptCTA />
      <KostenlosesKonzeptSEO />
    </PageLayout>
  );
};

export default KostenlosesWebsiteKonzept;
