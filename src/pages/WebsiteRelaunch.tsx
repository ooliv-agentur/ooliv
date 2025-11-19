import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import WebsiteRelaunchHero from '@/components/website-relaunch/WebsiteRelaunchHero';
import WebsiteRelaunchTiming from '@/components/website-relaunch/WebsiteRelaunchTiming';
import WebsiteRelaunchBenefits from '@/components/website-relaunch/WebsiteRelaunchBenefits';
import WebsiteRelaunchWhy from '@/components/website-relaunch/WebsiteRelaunchWhy';
import WebsiteRelaunchProcess from '@/components/website-relaunch/WebsiteRelaunchProcess';
import WebsiteRelaunchProof from '@/components/website-relaunch/WebsiteRelaunchProof';
import WebsiteRelaunchFAQ from '@/components/website-relaunch/WebsiteRelaunchFAQ';
import WebsiteRelaunchCTA from '@/components/website-relaunch/WebsiteRelaunchCTA';
import WebsiteRelaunchSEO from '@/components/website-relaunch/WebsiteRelaunchSEO';

const WebsiteRelaunch = () => {
  return (
    <PageLayout showBreadcrumbs={true}>
      <Helmet>
        <title>Website Relaunch Agentur | Professionelle Website erstellen lassen | ooliv</title>
        <meta 
          name="description" 
          content="Website Relaunch Agentur Mainz: Professionelle Website-Neugestaltung mit Strategie, Design und Technik. Kostenloses Relaunch-Konzept in 48h – messbar, strukturiert, modern." 
        />
        <meta name="keywords" content="Website Relaunch Agentur, Website erstellen lassen Agentur, professionelle Website erstellen lassen, Website-Neugestaltung, Webdesign Agentur Mainz" />
        <link rel="canonical" href="https://ooliv.de/website-relaunch" />
        <meta property="og:title" content="Website Relaunch Agentur | Professionelle Neugestaltung | ooliv" />
        <meta property="og:description" content="Ihr Website-Relaunch beginnt mit einem klaren Konzept. Kostenloses Relaunch-Konzept in 48h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ooliv.de/website-relaunch" />
      </Helmet>

      <WebsiteRelaunchHero />
      <WebsiteRelaunchTiming />
      <WebsiteRelaunchBenefits />
      <WebsiteRelaunchWhy />
      <WebsiteRelaunchProcess />
      <WebsiteRelaunchProof />
      <WebsiteRelaunchFAQ />
      <WebsiteRelaunchCTA />
      <WebsiteRelaunchSEO />
    </PageLayout>
  );
};

export default WebsiteRelaunch;
