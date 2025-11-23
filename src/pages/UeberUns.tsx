import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

import AboutUsHero from '@/components/about-us/AboutUsHero';
import AboutUsIntroduction from '@/components/about-us/AboutUsIntroduction';
import AboutUsStory from '@/components/about-us/AboutUsStory';
import UliSection from '@/components/about-us/UliSection';
import OurApproach from '@/components/about-us/OurApproach';
import TeamSection from '@/components/TeamSection';
import WhySmallTeam from '@/components/about-us/WhySmallTeam';
import HybridApproach from '@/components/about-us/HybridApproach';
import TargetIndustries from '@/components/about-us/TargetIndustries';
import AboutUsFAQNew from '@/components/about-us/AboutUsFAQNew';
import AboutUsCTANew from '@/components/about-us/AboutUsCTANew';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ooliv Werbeagentur",
    "foundingDate": "2008",
    "description": "Digitalagentur aus Mainz für Strategie, UX, Webdesign, SEO und AI-Workflows. Persönlich geführt, senior-level.",
    "url": "https://ooliv.de",
    "logo": "https://ooliv.de/lovable-uploads/ooliv-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mainzer Straße",
      "addressLocality": "Mainz",
      "addressRegion": "Rheinland-Pfalz",
      "addressCountry": "DE"
    },
    "numberOfEmployees": "10",
    "knowsAbout": [
      "Digitale Strategie",
      "UX Design",
      "Webdesign",
      "Webentwicklung",
      "SEO",
      "AI-Workflows",
      "Content Strategie",
      "Digitale Transformation"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/ooliv"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Uli Schönleber",
    "jobTitle": "CEO & Gründer",
    "worksFor": {
      "@type": "Organization",
      "name": "ooliv Werbeagentur"
    },
    "description": "Verantwortlich für digitale Strategie, Positionierung, Informationsarchitektur und AI-gestützte Entscheidungsprozesse bei ooliv.",
    "url": "https://ooliv.de/ueber-uns"
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über ooliv",
    "description": "Lernen Sie ooliv kennen – die Digitalagentur aus Mainz für Strategie, UX, Webdesign, SEO und AI-Workflows.",
    "url": "https://ooliv.de/ueber-uns",
    "mainEntity": organizationSchema
  };

  const structuredData = [organizationSchema, personSchema, aboutPageSchema];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Über uns | Digitalagentur aus Mainz | ooliv"
        description="Lernen Sie ooliv kennen – die Digitalagentur aus Mainz für Strategie, UX, Webdesign, SEO und AI-Workflows. Persönlich geführt, senior-level, 200+ Digitalprojekte."
        canonicalUrl="https://ooliv.de/ueber-uns"
        structuredData={structuredData}
        keywords="digitalagentur mainz, digitalagentur team, über uns digitalagentur, digitale strategie agentur, webdesign agentur mainz, digitalagentur experten, ux team, webentwicklung team, ai workflows team, digitalagentur philosophie, digitale projekte, digitale transformation, webdesign ux kompetenz, ganzheitliche digitale lösungen, hybrides team, digitalagentur mainz team, senior digitalagentur, strategische digitalagentur, ux design agentur mainz, ai agentur mainz, webentwicklung mainz"
        breadcrumbs={[
          { name: "Home", url: "https://ooliv.de/" },
          { name: "Über uns", url: "https://ooliv.de/ueber-uns" }
        ]}
      />

      {/* Hero */}
      <Section id="hero" spacing="large">
        <Container>
          <AboutUsHero />
        </Container>
      </Section>
      
      {/* Introduction */}
      <Section id="intro" background="light" spacing="large">
        <Container>
          <AboutUsIntroduction />
        </Container>
      </Section>
      
      {/* Story */}
      <Section id="story" spacing="large">
        <Container>
          <AboutUsStory />
        </Container>
      </Section>
      
      {/* Uli Section */}
      <Section id="uli" background="light" spacing="large">
        <Container>
          <UliSection />
        </Container>
      </Section>
      
      {/* Approach */}
      <Section id="approach" spacing="large">
        <Container>
          <OurApproach />
        </Container>
      </Section>
      
      {/* Team */}
      <Section id="team" background="light" spacing="large">
        <Container>
          <TeamSection />
        </Container>
      </Section>

      {/* Why Small Team */}
      <Section id="why-small" spacing="large">
        <Container>
          <WhySmallTeam />
        </Container>
      </Section>
      
      {/* Hybrid Approach */}
      <Section id="hybrid-approach" background="light" spacing="large">
        <Container>
          <HybridApproach />
        </Container>
      </Section>
      
      {/* Industries */}
      <Section id="industries" spacing="large">
        <Container>
          <TargetIndustries />
        </Container>
      </Section>
      
      {/* FAQ */}
      <Section id="faq" background="light" spacing="large">
        <Container>
          <AboutUsFAQNew />
        </Container>
      </Section>
      
      {/* CTA */}
      <Section id="cta" background="dark" spacing="large">
        <Container>
          <AboutUsCTANew />
        </Container>
      </Section>
    </PageLayout>
  );
};

export default GermanAboutUs;
