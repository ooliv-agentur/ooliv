
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHeroDE = () => {
  return (
    <PageHero
      badge="SEO-Optimierung"
      title="SEO Agentur Mainz"
      subtitle="Wir verwandeln Ihre Website in einen Wachstumstreiber. Strategiegetriebene SEO-Optimierung für bessere Rankings, qualifizierte Anfragen und nachhaltiges Business-Wachstum – in Mainz und darüber hinaus."
      primaryCta={{
        text: "SEO-Strategie starten",
        link: "/de/kontakt"
      }}
      secondaryCta={{
        text: "Kostenloses SEO-Audit anfordern",
        link: "/de/kontakt"
      }}
    />
  );
};

export default SEOHeroDE;
