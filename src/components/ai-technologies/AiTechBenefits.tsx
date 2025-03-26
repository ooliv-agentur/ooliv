
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechBenefits = () => {
  const { language } = useLanguage();
  
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
          <h2 className="text-3xl font-bold mb-4">
            {language === 'de' ? "Warum KI bei ooliv?" : "Why AI at ooliv?"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {language === 'de' 
                        ? "Nicht künstlich. Sondern intelligent eingesetzt." 
                        : "Not Artificial. Just Intelligent."}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'de'
                        ? "Wir integrieren KI-Tools gezielt, um Qualität, Geschwindigkeit und Kreativität zu steigern – immer unter menschlicher Kontrolle. KI unterstützt unseren Prozess, aber Menschen behalten das Steuer."
                        : "We integrate AI tools to boost quality, speed, and creativity—always under expert control. AI supports our process, but people stay in charge."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {language === 'de'
              ? "Kreativität, Qualität und Business-Ziele stehen an erster Stelle. Wir nutzen KI da, wo sie hilft – und setzen auf Menschen, wenn es zählt."
              : "Creativity, quality, and business goals come first. We use AI where it helps—and go full human when it matters."}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">
                {language === 'de' 
                  ? "Keine Auslagerung von Kreativprozessen" 
                  : "We never outsource creativity"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">
                {language === 'de' 
                  ? "Alle Kundendaten bleiben geschützt" 
                  : "All client data is protected"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">
                {language === 'de' 
                  ? "Volle Transparenz bei KI-Einsatz" 
                  : "Full transparency in AI usage"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTechBenefits;
