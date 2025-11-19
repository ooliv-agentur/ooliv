
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

import UliProfileHero from '@/components/about-us/UliProfileHero';
import UliCredentials from '@/components/about-us/UliCredentials';
import UliExperience from '@/components/about-us/UliExperience';
import UliEducationSkills from '@/components/about-us/UliEducationSkills';
import UliApproach from '@/components/about-us/UliApproach';
import HowWeWorkSection from '@/components/de/HowWeWorkSection';
import ThoughtLeadership from '@/components/about-us/ThoughtLeadership';
import TrackRecordSection from '@/components/de/TrackRecordSection';
import TeamSection from '@/components/TeamSection';
import AboutUsLocation from '@/components/about-us/AboutUsLocation';
import AboutUsCTA from '@/components/about-us/AboutUsCTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über uns - Team & Expertise | ooliv",
    "description": "Lernen Sie das Team hinter ooliv kennen. Digitale Strategie-Expertise mit 16+ Jahren Track Record. Persönliche Beratung, professionelle Umsetzung, messbare Ergebnisse.",
    "url": "https://ooliv.de/ueber-uns",
    "mainEntity": {
      "@type": "Organization",
      "name": "ooliv Digital Consultancy",
      "url": "https://ooliv.de",
      "founder": {
        "@type": "Person",
        "name": "Uli Schönleber",
        "jobTitle": "Digital Strategy Lead · AI-Driven Consultant · UX & Product Advisor",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Kölner Design Akademie (KDA)"
        }
      },
      "knowsAbout": [
        "Digital Strategy",
        "Product & UX Strategy",
        "AI Integration",
        "Strategic Discovery",
        "Implementation Leadership",
        "C-Level Advisory",
        "Business Transformation",
        "Thought Leadership"
      ]
    }
  };

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="Über uns - Team & Expertise | ooliv Digital Consultancy"
        description="Lernen Sie Uli Schönleber und das ooliv-Team kennen: 16+ Jahre Expertise in digitaler Strategie, Webdesign & KI-Integration. Persönliche Beratung mit messbaren Ergebnissen (+240% Conversion Rates)."
        canonicalUrl="https://ooliv.de/ueber-uns"
        structuredData={structuredData}
        keywords="ooliv Team, Digital Strategy, Uli Schönleber, Product & UX Strategy, Strategic Discovery, AI Integration, C-Level Advisory, Digitalagentur Mainz"
        breadcrumbs={[
          { name: "Home", url: "https://ooliv.de/" },
          { name: "Über uns", url: "https://ooliv.de/ueber-uns" }
        ]}
      />

      <UliProfileHero />
      <UliCredentials />
      <UliExperience />
      <UliEducationSkills />
      <UliApproach />
      <HowWeWorkSection />
      <ThoughtLeadership />
      <TrackRecordSection />
      
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformationen mit messbaren Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Track Record: +240% Conversion Rates, +180% Lead Quality, -45% Time-to-Decision
            </p>
          </div>
          <CaseStudiesSection />
        </div>
      </section>

      <TeamSection />
      <AboutUsLocation />
      <AboutUsCTA />
    </PageLayout>
  );
};

export default GermanAboutUs;
