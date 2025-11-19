
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
          icon: <LineChart className="h-8 w-8 text-accent-primary" />,
          title: "Strategically Integrated—Not Automated",
          description: "AI supports our workflows—but we make the decisions."
        },
        {
          icon: <Clock className="h-8 w-8 text-accent-primary" />,
          title: "Faster Results",
          description: "AI helps us deliver research, variations, and initial drafts much faster—without compromising quality."
        },
        {
          icon: <Lightbulb className="h-8 w-8 text-accent-primary" />,
          title: "Creativity Remains Human",
          description: "Ideas, concepts, and storytelling always come from real minds."
        }
      ]
    },
    de: {
      title: "So nutzen wir KI (ohne den Hype)",
      subtitle: "KI macht uns schneller und präziser – aber wir behalten die Kontrolle. Wir nutzen KI dort, wo es Sinn macht – und verlassen uns auf Menschen, wenn Kreativität und Strategie gefragt sind.",
      cards: [
        {
          icon: <LineChart className="h-8 w-8 text-accent-primary" />,
          title: "KI unterstützt, Sie entscheiden",
          description: "Wir nutzen KI für Recherchen und erste Entwürfe – die Strategie und finale Qualität kommen von unserem Team. Sie bekommen echte Expertise, keine AI-Massenware."
        },
        {
          icon: <Clock className="h-8 w-8 text-accent-primary" />,
          title: "Schneller zu Ergebnissen",
          description: "KI hilft uns, Entwürfe und Varianten schneller zu liefern – ohne Qualitätsverlust. Sie sparen Zeit, ohne Abstriche zu machen."
        },
        {
          icon: <Lightbulb className="h-8 w-8 text-accent-primary" />,
          title: "Kreativität bleibt menschlich",
          description: "Die wirklich guten Ideen kommen aus Köpfen, nicht aus Prompts. Sie bekommen echte Kreativität und Strategie – KI ist nur das Werkzeug."
        }
      ]
    }
  };
  
  const currentContent = language === 'de' ? content.de : content.en;
  
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            {currentContent.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
              <div className="h-full flex flex-col p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">
                  {card.title}
                </h3>
                <p className="text-gray-700 flex-grow text-center leading-relaxed">
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
