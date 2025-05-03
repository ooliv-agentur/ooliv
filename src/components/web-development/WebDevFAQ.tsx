
import React from 'react';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';

interface FaqItem {
  question: string;
  answer: string;
}

interface WebDevFAQProps {
  customFaqs?: FaqItem[];
}

const WebDevFAQ = ({ customFaqs }: WebDevFAQProps) => {
  const { language } = useLanguage();
  
  const defaultFaqsDE = [
    {
      question: "Mit welchen Plattformen arbeitet ihr?",
      answer: "Wir entwickeln vollständig codierte Websites (ohne CMS) und maßgeschneiderte WordPress-Lösungen – je nachdem, was besser zu Ihrem Business passt."
    },
    {
      question: "Kann ooliv auch Shops entwickeln?",
      answer: "Ja – WooCommerce innerhalb von WordPress oder Shopify für gezielte B2B-Cases."
    },
    {
      question: "Ist Performance bei euch Standard?",
      answer: "Absolut. Unsere Seiten sind schnell, SEO-optimiert und laufen zuverlässig auf allen Geräten."
    },
    {
      question: "Gibt es Betreuung nach dem Launch?",
      answer: "Ja. Wir begleiten Sie weiter mit technischer Betreuung, Updates und Tracking."
    },
    {
      question: "Könnt ihr bestehende Websites verbessern?",
      answer: "Ja. Wir analysieren, ob Optimierung sinnvoll ist – oder ein Relaunch effizienter wäre."
    }
  ];
  
  const defaultFaqsEN = [
    {
      question: "Which platforms do you work with?",
      answer: "We develop fully coded websites (without CMS) and custom WordPress solutions - depending on what better suits your business."
    },
    {
      question: "Can ooliv develop e-commerce shops?",
      answer: "Yes - WooCommerce within WordPress or Shopify for targeted B2B cases."
    },
    {
      question: "Is performance a standard?",
      answer: "Absolutely. Our pages are fast, SEO-optimized and run reliably on all devices."
    },
    {
      question: "Is there support after launch?",
      answer: "Yes. We continue to support you with technical assistance, updates and tracking."
    },
    {
      question: "Can you improve existing websites?",
      answer: "Yes. We analyze whether optimization makes sense - or if a relaunch would be more efficient."
    }
  ];
  
  const faqs = customFaqs ? customFaqs : (language === 'de' ? defaultFaqsDE : defaultFaqsEN);
  
  return <FAQ customFaqs={faqs} />;
};

export default WebDevFAQ;
