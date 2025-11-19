
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
import ThoughtLeadership from '@/components/about-us/ThoughtLeadership';
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
    "name": "Über Uli Schönleber & ooliv",
    "description": "Uli Schönleber - Digital Strategy Lead mit 16+ Jahren Track Record in Product & UX Strategy, AI Integration und Digital Transformation. Strategic Advisory mit messbaren Business Outcomes für B2B-Unternehmen.",
    "url": "https://ooliv.de/ueber-uns",
    "mainEntity": {
      "@type": "Person",
      "name": "Uli Schönleber",
      "jobTitle": "Digital Strategy Lead · AI-Driven Consultant · UX & Product Advisor",
      "worksFor": {
        "@type": "Organization",
        "name": "ooliv Digital Consultancy"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Kölner Design Akademie (KDA)"
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
        title="Uli Schönleber - Digital Strategy Lead | 16+ Jahre Track Record | ooliv"
        description="Digital Strategy Lead mit 16+ Jahren Track Record in Product & UX Strategy, AI Integration und Digital Transformation. Strategic Advisory mit messbaren Business Outcomes (+240% Conversion Rates)."
        canonicalUrl="https://ooliv.de/ueber-uns"
        structuredData={structuredData}
        keywords="Uli Schönleber, Digital Strategy Lead, Product & UX Strategy, Strategic Discovery, AI Integration, C-Level Advisory, Thought Leadership"
        breadcrumbs={[
          { name: "Home", url: "https://ooliv.de/" },
          { name: "Über Uli Schönleber", url: "https://ooliv.de/ueber-uns" }
        ]}
      />

      <UliProfileHero />
      <UliCredentials />
      <UliExperience />
      <UliEducationSkills />
      <UliApproach />
      <ThoughtLeadership />
      
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

      <AboutUsLocation />
      <AboutUsCTA />
    </PageLayout>
  );
};

export default GermanAboutUs;
