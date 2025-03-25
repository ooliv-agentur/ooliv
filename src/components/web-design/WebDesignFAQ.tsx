
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignFAQ = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const faqItems = isGerman ? [
    {
      question: "Wie läuft ein typisches Projekt ab?",
      answer: "Wir beginnen mit Struktur. Planung der Seiten und Erstellung zielgerichteter Inhalte ist immer der erste Schritt."
    },
    {
      question: "Arbeitet ihr mit Templates?",
      answer: "Niemals. Jedes Design wird individuell auf Ihre Ziele und Marke zugeschnitten."
    },
    {
      question: "Ist SEO inklusive?",
      answer: "Ja. Wir optimieren Inhalte, Struktur und Performance von Anfang an."
    },
    {
      question: "Arbeitet ihr mit WordPress?",
      answer: "Ja – es ist unsere meistgenutzte Plattform für individuelle B2B-Websites."
    },
    {
      question: "Was ist mit komplexeren Websites?",
      answer: "Wir entwickeln auch maßgeschneiderte Websites mit HTML, CSS und JavaScript – für vollständige Kontrolle ohne CMS."
    },
    {
      question: "Könnt ihr die Inhalte für uns erstellen?",
      answer: "Absolut. Unser Team kümmert sich um Texte, Visuals und sogar Videos. Siehe unsere /content-erstellung Seite."
    },
    {
      question: "Wie lange dauert ein Website-Projekt?",
      answer: "In der Regel 6–10 Wochen. Den genauen Zeitplan definieren wir in unserer Projektplanung."
    },
    {
      question: "Könnt ihr unsere bestehende Website verbessern statt neu zu starten?",
      answer: "Ja – wir übernehmen auch Redesigns und Optimierungsprojekte."
    }
  ] : [
    {
      question: "What's the first step in a web design project?",
      answer: "Structure. We start by planning your pages and writing smart, goal-driven content."
    },
    {
      question: "Do you use ready-made templates?",
      answer: "Never. Every design is tailored to your goals and brand."
    },
    {
      question: "Is SEO included?",
      answer: "Yes. We optimize your content, structure, and performance from the start."
    },
    {
      question: "Do you work with WordPress?",
      answer: "Yes — it's our most-used platform for custom B2B sites."
    },
    {
      question: "What about complex sites?",
      answer: "We also build custom websites using HTML, CSS, and JavaScript — for full control, no CMS needed."
    },
    {
      question: "Can you create the content for us?",
      answer: "Absolutely. Our team handles copy, visuals, and even video. See our /content-creation page."
    },
    {
      question: "How long does a website project take?",
      answer: "Usually 6–10 weeks. We define the timing in our project roadmap."
    },
    {
      question: "Can you improve our current website instead of starting over?",
      answer: "Yes — we also handle redesigns and optimization projects."
    }
  ];

  const translations = {
    en: {
      title: "Web Design — Questions People Ask Us"
    },
    de: {
      title: "Webdesign – Häufige Fragen"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          {t.title}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <Collapsible key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-100">
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left">
                  <h3 className="text-lg font-medium text-brand-heading">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-brand-primary flex-shrink-0 transition-transform duration-200 ease-out" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="p-6 pt-4">
                <p className="text-brand-text">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignFAQ;
