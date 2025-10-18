
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
      question: "Wie lange dauert es, bis SEO-Maßnahmen Ergebnisse zeigen?",
      answer: "Erste Effekte in wenigen Wochen, nachhaltige Ergebnisse meist ab 3 Monaten."
    },
    {
      question: "Was macht euren SEO-Ansatz besonders?",
      answer: "Strategie, Tech-Knowhow und Content – kombiniert in einem skalierbaren Prozess für messbare Ergebnisse."
    },
    {
      question: "Bietet ihr auch lokale SEO-Dienste an?",
      answer: "Ja – inkl. Google Business, Branchenverzeichnisse und gezielter lokaler Sichtbarkeit in Ihrer Region."
    },
    {
      question: "Ist Linkaufbau Teil eurer SEO-Leistungen?",
      answer: "Ja – wir koordinieren nachhaltige Backlink-Kampagnen inkl. Autoritätsaufbau."
    },
    {
      question: "Wie stellt ihr sicher, dass die technische SEO aktuell ist?",
      answer: "Durch strukturierte Audits, Core Web Vitals Checks und technische Umsetzung durch unser Team."
    },
    {
      question: "Warum sollte ich mit einer spezialisierten SEO Agentur arbeiten?",
      answer: "Weil fundierte Marktkenntnis, technisches Know-how und strategische SEO-Taktik einen entscheidenden Unterschied machen."
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
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-medico-darkGreen">
            Was kostet professionelle SEO-Betreuung?
          </h3>
          <p className="text-lg text-medico-darkGreen mb-4">
            Unsere SEO-Pakete starten bei <strong>€1.500/Monat</strong> für laufende Optimierung. 
            Initial-Audits und technische SEO-Setups beginnen bei <strong>€2.500</strong>.
          </p>
          <p className="text-sm text-medico-darkGreen/70">
            Für komplexe E-Commerce- oder Enterprise-Projekte erstellen wir individuelle Angebote.
          </p>
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
