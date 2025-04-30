
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
        link: "#"
      }}
      secondaryCta={{
        text: "Kostenloses SEO-Audit anfordern",
        link: "/kontakt"  // Updated to direct link to contact page
      }}
    />
  );
};

export default SEOHeroDE;

