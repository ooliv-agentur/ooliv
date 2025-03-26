
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGenerationDE from '@/components/google-ads/GoogleAdsLeadGenerationDE';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "Wie unterscheidet sich ooliv von anderen Google Ads Agenturen?",
      answer: "Wir verbinden Google Ads mit Ihrer Gesamtstrategie. Während andere Agenturen nur Klicks verkaufen, optimieren wir den gesamten Funnel: von Suchbegriffen über Landing Pages bis zur Conversion-Optimierung."
    },
    {
      question: "Brauchen wir Google Ads, wenn wir bereits gut bei SEO sind?",
      answer: "Absolut. SEO und Google Ads ergänzen sich perfekt – SEO für langfristigen organischen Aufbau, Google Ads für sofortige Präsenz, Kampagnentests und spezifische Aktionen."
    },
    {
      question: "Was sind typische Budgets für erfolgreiche Google Ads Kampagnen?",
      answer: "Für nachhaltige B2B-Leads beginnen wir typischerweise bei 1.500 €/Monat Werbebudget (zzgl. Management). Der ROI ist dank unserer datengetriebenen Optimierung in der Regel sehr gut."
    },
    {
      question: "Wie lange dauert es, bis eine Google Ads Kampagne funktioniert?",
      answer: "Die erste Optimierungsphase dauert ca. 4-6 Wochen. In dieser Zeit sammeln und analysieren wir Daten, verbessern Anzeigen und Zielseiten, und steigern die Performance kontinuierlich."
    },
    {
      question: "Hilft ihr auch bei der Erstellung von Zielseiten und Conversion-Tracking?",
      answer: "Unbedingt! Eine erfolgreiche Google Ads Strategie braucht maßgeschneiderte Landing Pages und präzises Tracking – beides ist Teil unseres umfassenden Angebots."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <GoogleAdsHero />
      <GoogleAdsLeadGenerationDE />
      
      {/* Add the global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ customFaqs={googleAdsFaqs} />
      
      <CTA 
        title="Lassen Sie uns Ihre Google Ads optimieren"
        subtitle="Mit unserer datengesteuerten Herangehensweise können wir Ihren ROI deutlich verbessern und mehr qualifizierte Leads generieren."
        primaryCta="Kostenlose Kampagnenanalyse"
        secondaryCta="Strategiegespräch buchen"
      />
    </PageLayout>
  );
};

export default GermanGoogleAds;
