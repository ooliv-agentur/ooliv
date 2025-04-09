
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ImageIcon, Code } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechServices = () => {
  const { language } = useLanguage();
  
  const services = language === 'de' ? [
    {
      icon: <MessageSquare className="h-10 w-10 text-gray-700" />,
      title: "Text & Struktur mit ChatGPT",
      description: "Multilinguale Outlines, Messaging-Frameworks & Texte – redaktionell geprüft, SEO-orientiert."
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-gray-700" />,
      title: "Visuals & Motion mit Midjourney + Sora",
      description: "Individuelle Illustrationen & Video-Loops – markenspezifisch, skalierbar, visuell stark."
    },
    {
      icon: <Code className="h-10 w-10 text-gray-700" />,
      title: "Entwicklung mit KI-Tools",
      description: "Schnellere Prototypen, optimierter Code – unter Kontrolle unserer Entwickler:innen."
    }
  ] : [
    {
      icon: <MessageSquare className="h-10 w-10 text-gray-700" />,
      title: "Text & Structure with ChatGPT",
      description: "Multilingual outlines, messaging frameworks & content – editorially reviewed, SEO-focused."
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-gray-700" />,
      title: "Visuals & Motion with Midjourney + Sora",
      description: "Custom illustrations & video loops – brand-specific, scalable, visually compelling."
    },
    {
      icon: <Code className="h-10 w-10 text-gray-700" />,
      title: "Development with AI Tools",
      description: "Faster prototyping, optimized code – under our developers' control."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'de' 
              ? "So nutzen wir KI für messbare Ergebnisse" 
              : "How We Use AI for Measurable Results"}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTechServices;
