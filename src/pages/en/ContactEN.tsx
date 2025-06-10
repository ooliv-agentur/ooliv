
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactCta from '@/components/contact/ContactCta';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactSEOTextEN from '@/components/contact/ContactSEOTextEN';

const EnglishContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const contactFaqs = [
    {
      question: "What's the best way to get in touch?",
      answer: "You can reach us via email at info@ooliv.de, call us at +49 (0) 6131 63 67 801, or use our contact form. For urgent matters, phone calls often get the quickest response during business hours."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your project needs, goals, and how we can help. This allows us to understand your requirements and provide you with a tailored proposal."
    },
    {
      question: "What information should I prepare for our consultation?",
      answer: "Please prepare information about your business goals, target audience, current website (if any), timeline, budget range, and any specific requirements or challenges you're facing. This helps us provide more targeted advice."
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours on business days. For urgent matters, calling us directly often provides the fastest response during our office hours."
    },
    {
      question: "Can we meet in person in Mainz?",
      answer: "Absolutely! We're happy to meet in person at our office in Mainz or at your location. We also offer video consultations for clients who prefer remote meetings or are located outside the Mainz area."
    }
  ];

  return (
    <PageLayout seoText={<ContactSEOTextEN />}>
      <Helmet>
        <title>Contact – ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Contact ooliv – Your marketing agency in Mainz. Personal consultation, clear communication and individual solutions for your project." />
        <meta name="keywords" content="Contact Marketing Agency Mainz, ooliv Contact, Marketing Consultation Mainz, Digital Agency Contact" />
        <meta name="focus-keyword" content="Marketing Agency Mainz" />
      </Helmet>
      
      <PageHero
        title="Contact – ooliv Marketing Agency Mainz"
        subtitle="Contact ooliv – Your marketing agency in Mainz. Personal consultation, clear communication and individual solutions for your project."
        primaryCta={{
          text: "Start Your Project",
          link: "#",
          onClick: (e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-lead-form'));
          }
        }}
        secondaryCta={{
          text: "Call Now",
          link: "tel:+4961316367801"
        }}
      />
      <ContactInfo />
      <ContactCta />
      
      <FAQ 
        customFaqs={contactFaqs}
        customTitle="Frequently Asked Questions About Getting Started"
        customCtaText="Ready to get started? Contact us"
      />
      
      <CTA 
        title="Ready to start your project?"
        subtitle="Let's discuss how we can help you achieve your digital marketing goals."
        primaryCta="Contact Us Now"
        secondaryCta="Schedule a Call"
      />
    </PageLayout>
  );
};

export default EnglishContact;
