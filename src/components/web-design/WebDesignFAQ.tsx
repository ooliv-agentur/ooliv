
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';

const WebDesignFAQ = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const translations = {
    en: {
      title: "Frequently Asked Questions About Our Webdesign Services",
      faqs: [
        {
          question: "What's included in your webdesign service?",
          answer: "Our webdesign service includes strategy development, wireframing, visual design, development, SEO optimization, and post-launch support. We handle everything from concept to a fully functional website."
        },
        {
          question: "How long does a typical webdesign project take?",
          answer: "Most projects take 6-12 weeks depending on complexity. Simple websites can be completed faster, while complex custom solutions may take longer. We'll provide a detailed timeline during our initial consultation."
        },
        {
          question: "Do you provide ongoing maintenance after launch?",
          answer: "Yes, we offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and content management. We believe in long-term partnerships with our clients."
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Absolutely! We specialize in website redesigns and can improve your existing site's design, functionality, and performance while preserving valuable content and SEO rankings."
        },
        {
          question: "What makes your webdesign approach different?",
          answer: "We focus on strategy before design, ensuring every element serves your business goals. Our websites are built for performance, SEO, and conversion – not just aesthetics."
        }
      ]
    },
    de: {
      title: "Häufig gestellte Fragen zu unserem Webdesign-Service",
      faqs: [
        {
          question: "Was ist in Ihrem Webdesign-Service enthalten?",
          answer: "Unser Webdesign-Service umfasst Strategieentwicklung, Wireframing, visuelles Design, Entwicklung, SEO-Optimierung und Support nach dem Launch. Wir kümmern uns um alles vom Konzept bis zur vollständig funktionsfähigen Website."
        },
        {
          question: "Wie lange dauert ein typisches Webdesign-Projekt?",
          answer: "Die meisten Projekte dauern 6-12 Wochen, je nach Komplexität. Einfache Websites können schneller fertiggestellt werden, während komplexe maßgeschneiderte Lösungen länger dauern können. Wir erstellen einen detaillierten Zeitplan während unserer ersten Beratung."
        },
        {
          question: "Bieten Sie laufende Wartung nach dem Launch an?",
          answer: "Ja, wir bieten umfassende Wartungspakete einschließlich Updates, Sicherheitsüberwachung, Performance-Optimierung und Content-Management. Wir glauben an langfristige Partnerschaften mit unseren Kunden."
        },
        {
          question: "Können Sie meine bestehende Website redesignen?",
          answer: "Auf jeden Fall! Wir sind spezialisiert auf Website-Redesigns und können Design, Funktionalität und Performance Ihrer bestehenden Website verbessern, während wertvolle Inhalte und SEO-Rankings erhalten bleiben."
        },
        {
          question: "Was macht Ihren Webdesign-Ansatz anders?",
          answer: "Wir fokussieren uns auf Strategie vor Design und stellen sicher, dass jedes Element Ihren Geschäftszielen dient. Unsere Websites sind für Performance, SEO und Conversion gebaut – nicht nur für Ästhetik."
        }
      ]
    }
  };

  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24" style={{ backgroundColor: '#0A1E2C' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#FFFFFF' }}>
            {t.title}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden" style={{ backgroundColor: '#003347', border: '1px solid rgba(255, 229, 0, 0.2)' }}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-opacity-80 transition-colors duration-200"
                style={{ backgroundColor: 'transparent' }}
              >
                <span className="text-lg font-medium pr-4" style={{ color: '#FFFFFF' }}>
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" style={{ color: '#FFE500' }} />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: '#FFE500' }} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p style={{ color: '#F4F4F4' }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignFAQ;
