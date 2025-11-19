
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieWhyUs from '@/components/strategy/StrategieWhyUs';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import ServiceRecommendation from '@/components/strategy/ServiceRecommendation';
import StrategieFAQ from '@/components/strategy/StrategieFAQ';
import RelatedServicesGrid from '@/components/strategy/RelatedServicesGrid';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';
import StickyCTA from '@/components/conversion/StickyCTA';

const GermanStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Strategie", url: "https://ooliv.de/strategie" }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="Digitale Strategie für B2B | Strategic Discovery, Roadmap & Umsetzung | ooliv"
        description="Strategische Analyse, Digital-Roadmap und Umsetzungsbegleitung für B2B-Unternehmen im DACH-Raum. Von der Discovery bis zum Go-Live. 16+ Jahre Expertise, 100+ erfolgreiche Projekte."
        canonicalUrl="https://ooliv.de/strategie"
        keywords="Digitale Strategie, Strategic Discovery, Strategieberatung B2B, Digital Roadmap, UX Strategie, Digitale Transformation, Umsetzungsbegleitung, DACH, ooliv"
        breadcrumbs={breadcrumbs}
      />

      <StrategieHero />
      <StrategieBenefits />
      <StrategieWhyUs />
      <StrategieProcess />
      <StrategieServices />
      <ServiceRecommendation />
      
      {/* Case Studies nach dieser Strategie */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformationen nach dieser Strategie
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reale Ergebnisse aus Strategic Discovery, UX Strategy und Implementation Leadership
            </p>
          </div>
        </div>
        <CaseStudiesSection />
      </div>
      
      <RelatedServicesGrid />
      <StrategieFAQ />
      
      <CTA 
        title="Digitale Transformation für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam eine End-to-End Digital Strategy entwickeln – von der Discovery bis zur messbaren Umsetzung."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Mehr erfahren"
        secondaryCtaLink="/kontakt"
        lightBackground={true}
      />
      
      <StickyCTA text="Kostenloses Erstgespräch" />
    </PageLayout>
  );
};

export default GermanStrategy;
