
import React from 'react';
import { motion } from "framer-motion";
import { LineChart, Clock, Lightbulb } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechBenefits = () => {
  const { language } = useLanguage();
  
  // Content based on language
  const content = {
    en: {
      title: "How We Use AI Strategically at ooliv",
      subtitle: "Our AI tools increase speed, precision, and scalability—without giving up creativity or control. We use AI where it creates measurable benefits—and rely on humans when it matters.",
      cards: [
        {
          icon: <LineChart className="h-10 w-10 text-brand-primary" />,
          title: "Strategically Integrated—Not Automated",
          description: "AI supports our workflows—but we make the decisions."
        },
        {
          icon: <Clock className="h-10 w-10 text-brand-primary" />,
          title: "Faster Results",
          description: "AI helps us deliver research, variations, and initial drafts much faster—without compromising quality."
        },
        {
          icon: <Lightbulb className="h-10 w-10 text-brand-primary" />,
          title: "Creativity Remains Human",
          description: "Ideas, concepts, and storytelling always come from real minds."
        }
      ]
    },
    de: {
      title: "So setzen wir KI bei ooliv strategisch ein",
      subtitle: "Unsere KI-Tools steigern Tempo, Präzision und Skalierbarkeit – ohne Kreativität oder Kontrolle aus der Hand zu geben. Wir nutzen KI dort, wo sie messbare Vorteile schafft – und vertrauen auf Menschen, wenn es zählt.",
      cards: [
        {
          icon: <LineChart className="h-10 w-10 text-brand-primary" />,
          title: "Strategisch integriert – nicht automatisiert",
          description: "KI unterstützt unsere Workflows – aber Entscheidungen treffen wir."
        },
        {
          icon: <Clock className="h-10 w-10 text-brand-primary" />,
          title: "Schneller zum Ergebnis",
          description: "KI hilft uns, Recherche, Varianten und erste Entwürfe deutlich schneller zu liefern – ohne Kompromisse bei der Qualität."
        },
        {
          icon: <Lightbulb className="h-10 w-10 text-brand-primary" />,
          title: "Kreativität bleibt menschlich",
          description: "Ideen, Konzepte und Storytelling kommen immer aus echten Köpfen."
        }
      ]
    }
  };
  
  const currentContent = language === 'de' ? content.de : content.en;
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-brand-heading">
            {currentContent.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentContent.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-700 flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTechBenefits;
