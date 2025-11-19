
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import StrategieBenefits from '@/components/strategy/StrategieBenefits';
import StrategieWhyUs from '@/components/strategy/StrategieWhyUs';
import StrategieProcess from '@/components/strategy/StrategieProcess';
import StrategieServices from '@/components/strategy/StrategieServices';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
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

  const strategieTestimonials = [
    {
      quote: "Uli hat unsere digitale Strategie von Grund auf neu gedacht. Nach dem Strategy Workshop wussten wir endlich, wo wir ansetzen müssen. Lead-Qualität +180% in 6 Monaten.",
      author: "Michael Klaiber",
      role: "Geschäftsführer",
      company: "KLAIBER Steuerberatung",
      industry: "Steuerberatung"
    },
    {
      quote: "Die Strategic Discovery war ein Gamechanger. Wir haben verstanden, warum unsere bisherige Strategie nicht funktioniert hat – und eine klare Roadmap bekommen, die wirklich umsetzbar ist.",
      author: "Dr. Stefan Wagner",
      role: "CEO",
      company: "IconPro GmbH",
      industry: "KI-Software"
    },
    {
      quote: "Endlich jemand, der nicht nur berät, sondern auch Verantwortung für die Umsetzung übernimmt. Die Transformation hat funktioniert – messbar bessere Conversion-Rates und qualifiziertere Anfragen.",
      author: "Thomas Müller",
      role: "Geschäftsführer",
      company: "COBUS GmbH",
      industry: "Industrieservice"
    }
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
      <TestimonialsSection testimonials={strategieTestimonials} />
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
