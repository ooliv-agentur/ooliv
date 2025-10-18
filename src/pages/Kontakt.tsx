
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

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
    >
      <EnhancedSEOHead
        title="Kontakt | ooliv Digitalagentur"
        description="Kontakt ooliv – Direkt mit Inhaber sprechen. Persönliche Beratung für Webdesign, SEO & Online-Marketing. ☎ 06131-9027640. Termin buchen!"
        canonicalUrl="https://ooliv.de/kontakt"
        keywords="Kontakt, ooliv, Digitalagentur, Beratung, Webdesign, SEO"
      />

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
