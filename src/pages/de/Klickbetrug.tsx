
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import KlickbetrugHero from '@/components/klickbetrug/KlickbetrugHero';
import KlickbetrugIntroduction from '@/components/klickbetrug/KlickbetrugIntroduction';
import KlickbetrugProblem from '@/components/klickbetrug/KlickbetrugProblem';
import KlickbetrugSolution from '@/components/klickbetrug/KlickbetrugSolution';
import KlickbetrugFeatures from '@/components/klickbetrug/KlickbetrugFeatures';
import KlickbetrugTestimonial from '@/components/klickbetrug/KlickbetrugTestimonial';
import KlickbetrugCTA from '@/components/klickbetrug/KlickbetrugCTA';

const Klickbetrug = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Klickbetrug bei Google Ads stoppen – Automatischer Schutz vor Fake-Klicks</title>
        <meta name="description" content="Vermeiden Sie Fake-Klicks, Bots und unnützen Traffic. Unsere Lösung erkennt Klickbetrug in Echtzeit und schützt Ihr Google Ads Budget automatisch." />
        <meta name="keywords" content="Klickbetrug, Click Fraud, Google Ads Schutz, Fake Klicks, Bot Erkennung, Werbebudget schützen" />
        <link rel="canonical" href="https://ooliv.de/klickbetrug" />
      </Helmet>
      
      <KlickbetrugHero />
      <KlickbetrugIntroduction />
      <KlickbetrugProblem />
      <KlickbetrugSolution />
      <KlickbetrugFeatures />
      <KlickbetrugTestimonial />
      <KlickbetrugCTA />
    </PageLayout>
  );
};

export default Klickbetrug;
