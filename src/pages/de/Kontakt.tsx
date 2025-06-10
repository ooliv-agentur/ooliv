import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import ContactHero from '@/components/contact/ContactHero';
import ContactMethodsSection from '@/components/contact/ContactMethodsSection';
import ContactPersonalSection from '@/components/contact/ContactPersonalSection';
import ContactBenefitsSection from '@/components/contact/ContactBenefitsSection';
import ConsultationRequestSectionDE from '@/components/contact/ConsultationRequestSectionDE';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactSEOText from '@/components/contact/ContactSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<ContactSEOText />}
    >
      <Helmet>
        <title>Kontakt | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv, Ihre Werbeagentur aus Mainz. Lassen Sie uns über Ihr nächstes Webprojekt sprechen - kostenlose Beratung inklusive." />
        <meta name="keywords" content="Kontakt Werbeagentur Mainz, ooliv Kontakt, Webdesign Beratung Mainz, Kostenlose Beratung Mainz, Marketing Agentur Kontakt Mainz" />
      </Helmet>
      
      <ContactHero />
      <ContactMethodsSection />
      <ContactPersonalSection />
      <ContactBenefitsSection />
      <ConsultationRequestSectionDE />
      <ContactInfoSection />
    </PageLayout>
  );
};

export default GermanContact;
