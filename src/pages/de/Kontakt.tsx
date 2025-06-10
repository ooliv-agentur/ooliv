
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactSEOText from '@/components/contact/ContactSEOText';
import ContactHeroDE from '@/components/contact/ContactHeroDE';
import ContactIntroductionDE from '@/components/contact/ContactIntroductionDE';
import ContactInfoSectionDE from '@/components/contact/ContactInfoSectionDE';
import ContactProjectSectionDE from '@/components/contact/ContactProjectSectionDE';
import ContactTrustSectionDE from '@/components/contact/ContactTrustSectionDE';
import ContactServicesSectionDE from '@/components/contact/ContactServicesSectionDE';
import ContactFAQSectionDE from '@/components/contact/ContactFAQSectionDE';
import CTA from '@/components/CTA';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<ContactSEOText />}
    >
      <Helmet>
        <title>Kontakt – ooliv Marketing Agentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv – Ihre Marketing Agentur Mainz. Persönliche Beratung, klare Kommunikation und individuelle Lösungen für Ihr Projekt." />
      </Helmet>

      <ContactHeroDE />
      <ContactIntroductionDE />
      <ContactInfoSectionDE />
      <ContactProjectSectionDE />
      <ContactTrustSectionDE />
      <ContactServicesSectionDE />
      <ContactFAQSectionDE />

      {/* Footer CTA Section - consistent with site CTA styling */}
      <CTA 
        title="Starten Sie jetzt Ihr digitales Projekt mit ooliv."
        subtitle=""
        primaryCta="Jetzt Projekt starten"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanContact;
