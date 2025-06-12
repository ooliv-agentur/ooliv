
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import KlickbetrugHero from '@/components/klickbetrug/KlickbetrugHero';
import KlickbetrugExplanation from '@/components/klickbetrug/KlickbetrugExplanation';
import KlickbetrugProblems from '@/components/klickbetrug/KlickbetrugProblems';
import KlickbetrugSolution from '@/components/klickbetrug/KlickbetrugSolution';
import KlickbetrugFeatures from '@/components/klickbetrug/KlickbetrugFeatures';
import KlickbetrugTestimonial from '@/components/klickbetrug/KlickbetrugTestimonial';
import KlickbetrugCTA from '@/components/klickbetrug/KlickbetrugCTA';

const Klickbetrug = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Klickbetrug bei Google Ads stoppen – Automatischer Schutz vor Fake-Klicks</title>
        <meta name="description" content="Vermeiden Sie Fake-Klicks, Bots und unnützen Traffic. Unsere Lösung erkennt Klickbetrug in Echtzeit und schützt Ihr Google Ads Budget automatisch." />
      </Helmet>

      <KlickbetrugHero />
      <KlickbetrugExplanation />
      <KlickbetrugProblems />
      <KlickbetrugSolution />
      <KlickbetrugFeatures />
      <KlickbetrugTestimonial />
      <KlickbetrugCTA />
    </PageLayout>
  );
};

export default Klickbetrug;
