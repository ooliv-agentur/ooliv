
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';
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
      answer: "SEO ist von Anfang an Teil unseres Webdesign-Prozesses. Wir beginnen mit Suchbegriff-Analyse, optimieren Struktur und Inhalte, sorgen für schnelle Ladezeiten und mobile Optimierung. Jede Website wird technisch sauber und Google-freundlich aufgebaut."
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
      title: "Webdesign – Frequently Asked Questions",
      subtitle: "Find answers to the most common questions about our webdesign services.",
      ctaTitle: "Have more questions?",
      ctaButton: "Contact us for more details"
    },
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihre neue Website.",
      ctaTitle: "Haben Sie noch weitere Fragen?",
      ctaButton: "Weitere Fragen? Sprechen Sie mit uns"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              {t.subtitle}
            </p>
          </div>
        </Reveal>
        
        <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-medico-turquoise/20">
          <Accordion type="single" collapsible className="w-full">
            <StaggerReveal className="space-y-4" stagger={0.08}>
              {faqItems.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </StaggerReveal>
          </Accordion>
        </div>
        
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="bg-medico-turquoise/5 rounded-2xl p-8 border border-medico-turquoise/20">
              <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
                {t.ctaTitle}
              </h3>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-turquoise hover:text-white hover:border-medico-turquoise font-medium px-8 py-3 transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
                Weitere Fragen? Sprechen Sie mit uns
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WebDesignFAQ;
