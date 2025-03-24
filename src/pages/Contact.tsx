
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import ContactFAQ from '@/components/contact/ContactFAQ';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
        <ContactForm formType="contact" />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
    </PageLayout>
  );
};

export default Contact;
