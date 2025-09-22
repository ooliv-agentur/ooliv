
import React from 'react';
import PageLayout from '@/components/PageLayout';
import KlickbetrugHero from '@/components/klickbetrug/KlickbetrugHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import KlickbetrugIntroduction from '@/components/klickbetrug/KlickbetrugIntroduction';
import KlickbetrugProcess from '@/components/klickbetrug/KlickbetrugProcess';
import KlickbetrugProblem from '@/components/klickbetrug/KlickbetrugProblem';
import KlickbetrugSolution from '@/components/klickbetrug/KlickbetrugSolution';
import KlickbetrugFeatures from '@/components/klickbetrug/KlickbetrugFeatures';
import KlickbetrugTestimonial from '@/components/klickbetrug/KlickbetrugTestimonial';
import KlickbetrugCTA from '@/components/klickbetrug/KlickbetrugCTA';
import KlickbetrugFAQ from '@/components/klickbetrug/KlickbetrugFAQ';


const Klickbetrug = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Klickbetrug Schutz", url: "https://ooliv.de/klickbetrug" }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Klickbetrug bei Google Ads stoppen – Automatischer Schutz vor Fake-Klicks"
        description="Klickbetrug bei Google Ads stoppen – vermeiden Sie Fake-Klicks, Bots und unnützen Traffic. Unsere Lösung erkennt Klickbetrug in Echtzeit und schützt Ihr Budget automatisch."
        canonicalUrl="https://ooliv.de/klickbetrug"
        keywords="Klickbetrug, Click Fraud, Google Ads Schutz, Fake Klicks, Bot Erkennung, Werbebudget schützen"
        breadcrumbs={breadcrumbs}
      />
      
      <KlickbetrugHero />
      <KlickbetrugIntroduction />
      <KlickbetrugProcess />
      <KlickbetrugProblem />
      <KlickbetrugSolution />
      <KlickbetrugFeatures />
      <KlickbetrugTestimonial />
      <KlickbetrugCTA />
      <KlickbetrugFAQ />
    </PageLayout>
  );
};

export default Klickbetrug;
