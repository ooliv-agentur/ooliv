
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import ContactSEOText from '@/components/contact/ContactSEOText';
import ContactHero from '@/components/contact/ContactHero';
import ContactPersonalSection from '@/components/contact/ContactPersonalSection';
import ContactMethodsSection from '@/components/contact/ContactMethodsSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactBenefitsSection from '@/components/contact/ContactBenefitsSection';

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
        <title>Kontakt ooliv – Ihre Digitalagentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv – Ihre Digitalagentur aus Mainz für individuelles Webdesign, SEO und Online-Marketing. Persönlich, direkt, effizient. Jetzt Nachricht senden!" />
      </Helmet>

      <ContactHero />
      <ContactPersonalSection />
      <ContactMethodsSection />
      <ContactInfoSection />
      <ContactBenefitsSection />

      <FAQ 
        customTitle="Häufig gestellte Fragen zum Kontakt"
        customFaqs={[
          {
            question: "Spreche ich direkt mit jemandem?",
            answer: "Ja – zuerst mit Uli, unserem Gründer und CEO. Wir haben keine Projektmanager zwischengeschaltet."
          },
          {
            question: "Wie schnell bekomme ich eine Antwort?",
            answer: "In der Regel innerhalb weniger Stunden – oft sogar schneller. Wir wissen, dass Zeit im digitalen Bereich wertvoll ist."
          },
          {
            question: "Arbeitet ihr auch international?",
            answer: "Ja – wir betreuen Projekte aus ganz Europa. Regional erreichbar, aber ortsunabhängig umsetzbar. Unsere Kernkompetenz liegt in der digitalen Zusammenarbeit."
          },
          {
            question: "Was passiert nach meiner Anfrage?",
            answer: "Nach Ihrer Anfrage werden wir uns zeitnah bei Ihnen melden, um Ihre Anforderungen zu besprechen. Anschließend erhalten Sie ein maßgeschneidertes Angebot für Ihr Projekt."
          }
        ]}
        hideCTA={true}
      />
    </PageLayout>
  );
};

export default GermanContact;
