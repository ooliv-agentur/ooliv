
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOCtaDE from '@/components/seo/SEOCtaDE';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';
import { setHybridMinimalTheme, resetToColorfulTheme } from '@/styles/minimalTheme';

import GooglePartnerBadgeSEO from '@/components/seo/GooglePartnerBadgeSEO';
import GEOOptimizationSEO from '@/components/seo/GEOOptimizationSEO';
import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Link } from 'react-router-dom';
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';

const GermanSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "SEO Optimierung", url: "https://ooliv.de/seo-optimierung" }
  ];
  
  const seoFaqs = [
    {
      question: "Wie lange dauert es, bis SEO Ergebnisse bringt?",
      answer: "Erste Verbesserungen sehen Sie oft nach 4–8 Wochen. Wirklich nachhaltige Rankings und spürbar mehr Traffic brauchen meist 3–6 Monate. SEO ist ein Marathon, kein Sprint – aber die Ergebnisse halten langfristig."
    },
    {
      question: "Was kostet professionelle SEO-Beratung?",
      answer: "Eine einmalige SEO-Analyse mit Handlungsempfehlungen startet bei 2.500–5.000€. Laufende SEO-Betreuung liegt bei 1.500–4.000€/Monat – je nach Umfang und Wettbewerb. Sie erhalten transparente Preise vor Projektstart."
    },
    {
      question: "Was genau machen Sie bei SEO?",
      answer: "Drei Bereiche: 1) Technisches SEO (schnelle Website, sauberer Code). 2) Content-Optimierung (die richtigen Keywords, gute Texte). 3) Linkaufbau (Autorität durch Backlinks). Alles abgestimmt auf Ihre Ziele und Ihre Zielgruppe."
    },
    {
      question: "Brauche ich SEO, wenn ich bereits Google Ads schalte?",
      answer: "Ja – aus zwei Gründen: 1) SEO bringt langfristig kostenlosen Traffic, Google Ads kostet jeden Monat. 2) Gute Rankings sorgen für Vertrauen bei Ihrer Zielgruppe. Beide Kanäle ergänzen sich perfekt."
    },
    {
      question: "Können Sie auch lokales SEO für meine Region machen?",
      answer: "Ja, lokales SEO ist eine meiner Spezialitäten. Inklusive Google Business Profil-Optimierung, Eintragung in relevante Verzeichnisse und lokale Content-Strategie. So werden Sie in Ihrer Region besser gefunden."
    },
    {
      question: "Wie messen wir den Erfolg von SEO?",
      answer: "Mit klaren Kennzahlen: Rankings für wichtige Keywords, organischer Traffic-Anstieg, Anfragen über die Website. Sie bekommen regelmäßige Reports und sehen schwarz auf weiß, was SEO für Ihr Business bringt."
    }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="SEO Agentur – Strategische Suchmaschinenoptimierung | ooliv"
        description="ooliv Digitalagentur entwickelt SEO-Strategien für B2B-Unternehmen – messbare Lead-Generierung durch technisches SEO, Content und Rankings."
        canonicalUrl="https://ooliv.de/seo-optimierung"
        keywords="SEO Agentur, Suchmaschinenoptimierung, Google Rankings, B2B SEO, Technisches SEO"
        breadcrumbs={breadcrumbs}
      />
      
      <ServiceSchemaGenerator
        serviceName="Suchmaschinenoptimierung (SEO)"
        description="Professionelle SEO-Dienstleistungen für B2B-Unternehmen. Bessere Google-Rankings und mehr organische Sichtbarkeit."
        serviceType="SearchEngineOptimization"
        priceRange="€1500-€5000"
        offers={[
          {
            name: "SEO Basis-Audit",
            description: "Technische Analyse und erste Optimierungen",
            priceRange: "€1500-€2500"
          },
          {
            name: "Lokale SEO",
            description: "Google My Business und lokale Sichtbarkeit",
            priceRange: "€2000-€3500"
          },
          {
            name: "SEO-Komplettbetreuung",
            description: "Umfassende SEO-Strategie mit Content und Linkaufbau",
            priceRange: "€3000-€5000"
          }
        ]}
      />

      <SEOHeroDE />
      <SEOBenefitsDE />
      
      <GooglePartnerBadgeSEO />
      <GEOOptimizationSEO />
      
      <SEOServicesDE />
      <SEOApproachDE />
      
      {/* Budget-Signal SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <TurquoiseCard variant="soft">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Was kostet professionelle SEO & GEO-Betreuung?
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Unsere SEO & GEO-Pakete starten bei <span className="text-turquoise font-bold">€800/Monat</span> für laufende Optimierung inkl. Backlinkaufbau, Blog-Artikel und Presseartikel. 
              Initial-Audits und technische SEO-Setups beginnen bei <span className="text-turquoise font-bold">€2.500</span>.
            </p>
            <TurquoiseBadge variant="outline" size="sm">
              Für komplexe E-Commerce- oder Enterprise-Projekte erstellen wir individuelle Angebote
            </TurquoiseBadge>
          </TurquoiseCard>
        </div>
      </section>
      
      <SEOProcessDE />

      <p className="text-center text-sm text-medico-darkGreen mt-4">
        Mehr über <Link to="/" className="underline hover:no-underline">ooliv und unsere Arbeitsweise</Link>.
      </p>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={seoFaqs} 
        customTitle="Häufig gestellte Fragen zu SEO & Rankings"
      />
      
      <SEOCtaDE />
    </PageLayout>
  );
};

export default GermanSEO;
