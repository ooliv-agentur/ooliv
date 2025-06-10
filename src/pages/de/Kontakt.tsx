
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import ContactHero from '@/components/contact/ContactHero';
import ContactPersonalSection from '@/components/contact/ContactPersonalSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactMethodsSection from '@/components/contact/ContactMethodsSection';
import ConsultationRequestSectionDE from '@/components/contact/ConsultationRequestSectionDE';
import ContactBenefitsSection from '@/components/contact/ContactBenefitsSection';
import ContactSEOText from '@/components/contact/ContactSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout 
      seoText={<ContactSEOText />}
    >
      <Helmet>
        <title>Kontakt – ooliv Marketing Agentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv – Ihre Marketing Agentur Mainz. Persönliche Beratung, klare Kommunikation und individuelle Lösungen für Ihr Projekt." />
        <meta name="keywords" content="Marketing Agentur Mainz, Kontakt ooliv Mainz, Beratung Werbeagentur Mainz, Digitalagentur Kontakt Mainz, Marketing Beratung Mainz, Agentur Mainz Kontakt" />
        <meta name="focus-keyword" content="Marketing Agentur Mainz" />
      </Helmet>
      
      <ContactHero
        title="ooliv Werbeagentur"
        subtitle="Wir hören zu, verstehen Ihr Projekt und setzen es mit System um. Keine leeren Versprechen, sondern individuelle Lösungen, die funktionieren."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Jetzt anrufen",
          link: "tel:+4961316367801"
        }}
      />
      <ContactPersonalSection />
      <ContactInfoSection />
      <ContactMethodsSection />
      <ConsultationRequestSectionDE />
      <ContactBenefitsSection />
    </PageLayout>
  );
};

export default GermanContact;
