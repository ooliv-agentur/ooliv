
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WebDesignFAQ = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const faqItems = isGerman ? [
    {
      question: "Was kostet professionelles Webdesign in Mainz?",
      answer: "Die Kosten für professionelles Webdesign hängen vom Umfang Ihres Projekts ab. Typische B2B-Websites mit strategischer Planung, Content-Erstellung und SEO beginnen bei etwa 5.000€. Wir erstellen Ihnen gerne ein individuelles Angebot nach einem ersten Gespräch."
    },
    {
      question: "Wie sorgt ooliv für SEO-optimiertes Webdesign?",
      answer: "SEO ist von Anfang an Teil unseres Webdesign-Prozesses. Wir beginnen mit Keyword-Recherche, optimieren Struktur und Inhalte, sorgen für schnelle Ladezeiten und mobile Optimierung. Jede Website wird technisch sauber und Google-freundlich aufgebaut."
    },
    {
      question: "Arbeitet ihr mit WordPress oder ohne CMS?",
      answer: "Beides ist möglich. Für die meisten B2B-Websites setzen wir auf ein individuell konfiguriertes WordPress ohne vorgefertigte Themes. Für spezielle Anforderungen entwickeln wir auch statische Websites ohne CMS, die besonders schnell und sicher sind."
    },
    {
      question: "Wie lange dauert ein Webdesign-Projekt bei ooliv?",
      answer: "Von der ersten Planung bis zum Launch dauert ein typisches Webdesign-Projekt 6-10 Wochen. Der genaue Zeitrahmen hängt vom Umfang der Website und Ihrer internen Freigabeprozesse ab. Wir erstellen einen klaren Zeitplan als Teil unseres Angebots."
    },
    {
      question: "Könnt ihr bestehende Seiten verbessern?",
      answer: "Ja, wir übernehmen auch Redesigns und Optimierungsprojekte für bestehende Websites. Häufig beginnen wir mit einer Analyse der aktuellen Seite, um Schwachstellen und Optimierungspotenziale zu identifizieren."
    },
    {
      question: "Ist Responsive Design bei euch Standard?",
      answer: "Absolut. Alle unsere Websites sind von Grund auf für alle Geräte optimiert – vom Smartphone bis zum Desktop. Mobile-First ist für uns nicht nur ein Schlagwort, sondern Grundlage jedes Designs."
    },
    {
      question: "Wer erstellt die Inhalte für unsere neue Website?",
      answer: "Wir bieten professionelle Content-Erstellung als Teil unserer Webdesign-Projekte an. Unser Team entwickelt SEO-optimierte Texte, erstellt passende Bilder und organisiert bei Bedarf auch Fotoshootings oder Videoaufnahmen."
    },
    {
      question: "Gibt es langfristige Betreuung nach dem Launch?",
      answer: "Ja, wir bleiben auch nach dem Launch als Partner an Ihrer Seite. Von technischen Updates über Performance-Optimierungen bis hin zu Content-Erweiterungen – wir bieten verschiedene Support-Modelle für die kontinuierliche Betreuung Ihrer Website."
    }
  ] : [
    {
      question: "What's included in your webdesign service?",
      answer: "Our webdesign service is comprehensive, including strategy, wireframing, content planning, SEO optimization, responsive design, development, testing, and launch support. We focus on creating websites that not only look great but actively contribute to your business goals."
    },
    {
      question: "Do you work with WordPress or custom code?",
      answer: "We work with both. For content-driven B2B websites, we often use custom WordPress builds without prebuilt themes. For specialized projects requiring maximum performance, we can develop fully custom websites using pure HTML, CSS, and JavaScript."
    },
    {
      question: "Is SEO part of your webdesign offer?",
      answer: "SEO is integrated into every step of our process. From initial keyword research to technical optimization, content planning, and speed improvements – every website we build is designed to perform well in search engines."
    },
    {
      question: "Can you help with content creation?",
      answer: "Yes, content creation is a core part of our webdesign service. Our team develops SEO-optimized copy, creates suitable imagery, and can arrange professional photography or video production when needed."
    },
    {
      question: "How long does a typical webdesign project take?",
      answer: "A typical webdesign project takes 6-10 weeks from planning to launch. The exact timeframe depends on the scope of your website and your internal approval processes. We provide a clear timeline as part of our proposal."
    },
    {
      question: "Do you offer support after launch?",
      answer: "Yes, we stay with you as a partner after launch. From technical updates to performance optimizations and content additions – we offer various support models for ongoing website maintenance."
    },
    {
      question: "Is your webdesign mobile-friendly by default?",
      answer: "Absolutely. All our websites are built from the ground up to be fully responsive across all devices – from smartphones to desktops. Mobile-first isn't just a buzzword for us, it's the foundation of every design."
    },
    {
      question: "Can you improve our current website?",
      answer: "Yes, we also handle redesigns and optimization projects for existing websites. We typically start with an analysis of your current site to identify weaknesses and opportunities for improvement."
    }
  ];

  const translations = {
    en: {
      title: "Webdesign – Frequently Asked Questions"
    },
    de: {
      title: "Häufige Fragen zum Thema Webdesign Mainz"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
            {t.title}
          </h2>
        </Reveal>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <StaggerReveal className="w-full" stagger={0.08}>
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg shadow-sm overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-brand-heading text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-brand-text">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default WebDesignFAQ;
