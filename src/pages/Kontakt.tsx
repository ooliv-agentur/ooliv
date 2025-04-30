
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ConsultationRequestSectionDE from "@/components/contact/ConsultationRequestSectionDE";
import FAQ from "@/components/FAQ";

const Kontakt = () => {
  // FAQ items specific to the contact page
  const contactFaqs = [
    {
      question: "Wie läuft der erste Kontakt ab?",
      answer: "Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden. Wir vereinbaren ein kurzes Gespräch, um Ihre Bedürfnisse kennenzulernen und zu klären, ob wir die passende Agentur für Sie sind."
    },
    {
      question: "Arbeitet ooliv nur mit Unternehmen aus Deutschland?",
      answer: "Nein, wir arbeiten mit Unternehmen weltweit. Ein Großteil unserer Kunden kommt aus Deutschland, Österreich und der Schweiz, aber wir betreuen auch Kunden aus den USA und anderen europäischen Ländern."
    },
    {
      question: "Was sind die typischen Budgets für Projekte?",
      answer: "Unsere Webprojekte beginnen typischerweise bei 5.000€ für kleinere Seiten und können je nach Umfang und Komplexität bis zu 25.000€ und mehr betragen. Content- und SEO-Pakete starten bei etwa 2.000€ monatlich."
    },
    {
      question: "Wie lange dauert ein typisches Webprojekt?",
      answer: "Die meisten Website-Projekte dauern zwischen 6 und 12 Wochen von der ersten Strategie bis zum Launch. Komplexere Projekte mit umfangreicher Content-Erstellung oder speziellen Funktionen können länger dauern."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Kontakt | ooliv Marketing Agentur</title>
        <meta name="description" content="Kontaktieren Sie ooliv für Ihre Webdesign-, Content- und SEO-Projekte. Wir freuen uns, von Ihnen zu hören und Ihr Projekt zu besprechen." />
        <meta name="keywords" content="kontakt, beratung, webdesign anfrage, marketingagentur kontakt" />
      </Helmet>

      <PageHero 
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht. Schreiben Sie uns oder vereinbaren Sie direkt einen Beratungstermin."
      />
      
      <ConsultationRequestSectionDE />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Schreiben Sie uns</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <FAQ 
        customFaqs={contactFaqs}
        customTitle="Häufige Fragen zur Zusammenarbeit"
      />
    </PageLayout>
  );
};

export default Kontakt;
