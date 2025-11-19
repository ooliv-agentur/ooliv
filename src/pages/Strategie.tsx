
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategicDiscoveryDetail from '@/components/strategy/StrategicDiscoveryDetail';
import UXStrategyDetail from '@/components/strategy/UXStrategyDetail';
import ImplementationLeadershipDetail from '@/components/strategy/ImplementationLeadershipDetail';
import StrategieServices from '@/components/strategy/StrategieServices';
import StrategieFAQ from '@/components/strategy/StrategieFAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';

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
        title="Digital Strategy & Transformation | Uli Schönleber"
        description="Strategic Discovery, UX & Product Strategy, AI Integration und Implementation Leadership – End-to-End Digital Strategy für B2B mit 16+ Jahren Erfahrung und messbaren Outcomes."
        canonicalUrl="https://ooliv.de/strategie"
        keywords="Digital Strategy, Digital Transformation, C-Level Advisory, Strategic Consulting, UX Strategy"
        breadcrumbs={breadcrumbs}
      />

      <StrategieHero />
      <StrategieBenefits />
      <StrategieProcess />
      <StrategicDiscoveryDetail />
      <UXStrategyDetail />
      <ImplementationLeadershipDetail />
      <StrategieServices />
      
      {/* Case Studies nach dieser Strategie */}
      <div className="bg-white">
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
      
      <StrategieFAQ />
      
      <CTA 
        title="Digitale Transformation für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam eine End-to-End Digital Strategy entwickeln – von der Discovery bis zur messbaren Umsetzung."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Mehr erfahren"
        secondaryCtaLink="/kontakt"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanStrategy;
