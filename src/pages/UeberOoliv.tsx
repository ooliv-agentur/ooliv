
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';
import DeutscherAboutSection from '@/components/de/DeutscherAboutSection';
import TeamSection from '@/components/TeamSection';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import BasecampSection from '@/components/de/BasecampSection';
import TechnologiesSection from '@/components/de/TechnologiesSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';
import TeamImpactSectionDE from '@/components/de/TeamImpactSectionDE';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const UeberOoliv = () => {
  const aboutFaqs = [
    {
      question: "Seit wann gibt es ooliv?",
      answer: "Ooliv wurde 2018 gegründet und hat sich seitdem auf B2B-Marketing mit Fokus auf Webdesign, Content und SEO spezialisiert."
    },
    {
      question: "Wo ist der Standort von ooliv?",
      answer: "Unser Hauptsitz ist in Karlsruhe, Baden-Württemberg. Wir arbeiten jedoch mit Kunden aus ganz Deutschland und international."
    },
    {
      question: "Mit welchen Branchen arbeitet ooliv vorwiegend?",
      answer: "Wir sind spezialisiert auf B2B-Unternehmen aus den Bereichen Technologie, Software, Fertigung und professionelle Dienstleistungen."
    },
    {
      question: "Wie groß ist das Team von ooliv?",
      answer: "Unser Team besteht aus über 10 Experten, darunter Strategen, Designer, Entwickler und Content-Spezialisten."
    },
    {
      question: "Was unterscheidet ooliv von anderen Marketing-Agenturen?",
      answer: "Unser Fokus auf B2B, unser strukturierter Prozess und unsere Kombination aus Strategie, Design und Technologie machen uns einzigartig."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Über ooliv | Unsere Marketing-Agentur</title>
        <meta name="description" content="Lernen Sie ooliv kennen - Ihre Agentur für Webdesign, Content und SEO mit Fokus auf B2B. Erfahren Sie mehr über unser Team und unsere Mission." />
        <meta name="keywords" content="marketing agentur, webdesign agentur, ooliv team, b2b marketing" />
      </Helmet>
      
      <PageHero 
        title="Über ooliv – Ihre B2B Marketing Agentur"
        subtitle="Wir sind ein Team von Marketing-Experten mit Fokus auf Strategie, Webdesign und Content für mittelständische B2B-Unternehmen."
        primaryCta={{
          text: "Kontakt aufnehmen",
          link: "/kontakt"
        }}
      />
      
      <DeutscherAboutSection />
      <TeamSection />
      <GermanSolutionSection />
      <ClientLogos />
      <BasecampSection />
      <TechnologiesSection />
      <TeamTeaserDE />
      <TeamImpactSectionDE />
      <FAQ customFaqs={aboutFaqs} />
      <CTA 
        title="Bereit für ein Gespräch?"
        subtitle="Lassen Sie uns über Ihr Projekt sprechen und herausfinden, wie wir Ihnen helfen können."
        primaryCta="Kontakt aufnehmen"
        secondaryCta="Mehr erfahren"
      />
    </PageLayout>
  );
};

export default UeberOoliv;
