
import React, { useState } from 'react';
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

  // State for controlling the form modal
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'audit' | 'call' | 'work'>('call');

  // Function to open the form with a specific type
  const openFormWithType = (type: 'audit' | 'call' | 'work') => {
    setFormType(type);
    setShowForm(true);
  };

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
            {/* Pass the required props to ContactForm */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h2>
              <p className="mb-4">Füllen Sie das Formular aus, um ein Gespräch zu vereinbaren.</p>
              <button
                onClick={() => openFormWithType('call')}
                className="w-full bg-brand-primary text-white px-4 py-2 rounded hover:bg-brand-primary/80 transition-colors mb-4"
              >
                Kontaktformular öffnen
              </button>
              <p className="text-sm text-gray-500">
                Oder schreiben Sie uns direkt an <a href="mailto:info@ooliv.de" className="text-brand-primary hover:underline">info@ooliv.de</a>
              </p>
            </div>
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

      {/* Modal ContactForm with the required props */}
      <ContactForm
        open={showForm}
        onOpenChange={setShowForm}
        formType={formType}
      />
    </PageLayout>
  );
};

export default Kontakt;
