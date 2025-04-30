
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import HeroKontakt from '@/components/hero/HeroKontakt';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactMap from '@/components/ContactMap';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const Kontakt = () => {
  // Custom FAQ items for Contact page
  const contactFaqs = [
    {
      question: "Wie schnell antworten Sie auf Anfragen?",
      answer: "In der Regel innerhalb von 24 Stunden an Werktagen."
    },
    {
      question: "Bieten Sie unverbindliche Erstberatungen an?",
      answer: "Ja, wir bieten ein kostenloses 30-minütiges Strategiegespräch an."
    },
    {
      question: "Arbeiten Sie nur mit Kunden aus Mainz?",
      answer: "Nein, wir betreuen Kunden deutschlandweit und international."
    },
    {
      question: "Kann ich direkt mit einem bestimmten Teammitglied sprechen?",
      answer: "Ja, geben Sie einfach im Formular an, mit wem Sie sprechen möchten."
    },
    {
      question: "Wie läuft der Prozess nach meiner Anfrage ab?",
      answer: "Wir melden uns bei Ihnen zurück, vereinbaren ein erstes Gespräch und erstellen anschließend ein maßgeschneidertes Angebot."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Kontakt | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv – Ihre Werbeagentur aus Mainz. Wir freuen uns auf Ihre Anfrage für Webdesign, SEO oder Content Creation." />
      </Helmet>

      <HeroKontakt />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <ContactMap />
      
      <FAQ 
        customFaqs={contactFaqs}
        customTitle="Häufig gestellte Fragen zum Kontakt" 
      />
      
      <CTA 
        title="Lassen Sie uns über Ihr Projekt sprechen"
        subtitle="Vereinbaren Sie ein unverbindliches Gespräch mit unserem Team und erfahren Sie, wie wir Ihr Unternehmen unterstützen können."
        primaryCta="Formular ausfüllen"
        secondaryCta="Jetzt anrufen"
        secondaryCtaLink="tel:+4961316367801"
      />
    </PageLayout>
  );
};

export default Kontakt;
