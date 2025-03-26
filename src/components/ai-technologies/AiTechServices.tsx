
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Image, Video, Layout } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechServices = () => {
  const { language } = useLanguage();
  
  const services = language === 'de' ? [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Content-Erstellung mit ChatGPT",
      description: "Wir nutzen ChatGPT für Content-Outlines, mehrsprachige Texte und Messaging-Frameworks – immer überarbeitet von unserem Redaktionsteam.",
      features: [
        "Strukturierte SEO-Outlines",
        "Mehrsprachige Content-Entwürfe",
        "Messaging-Frameworks",
        "Menschlich überprüft und verfeinert"
      ]
    },
    {
      icon: <Image className="h-10 w-10 text-purple-500" />,
      title: "Visuals mit Midjourney",
      description: "Midjourney hilft uns, beeindruckende, markenspezifische Bilder und Illustrationen zu erstellen – ohne Stockfotos.",
      features: [
        "Individuelle Hero-Visuals",
        "Markenspezifische Illustrationen",
        "Einzigartige Bilder für Schlüsselbereiche",
        "Konsistent mit Ihrer Markenidentität"
      ]
    },
    {
      icon: <Video className="h-10 w-10 text-red-500" />,
      title: "Motion & Video mit Sora",
      description: "Von Erklärvideos bis hin zu Hintergrundloops ermöglicht uns Sora, dynamische Videoinhalte zu generieren – schnell, markenkonform und ansprechend.",
      features: [
        "Hero-Animationen & Loops",
        "Erklärvideos",
        "Dynamisches visuelles Storytelling",
        "Perfekt für Landing Pages"
      ]
    },
    {
      icon: <Layout className="h-10 w-10 text-green-500" />,
      title: "KI in der Webentwicklung",
      description: "Wir nutzen KI-gestützte Tools, um UI-Komponenten zu generieren, Layouts zu testen und die Entwicklung zu beschleunigen – mit menschlicher Kontrolle und strategischem Anspruch.",
      features: [
        "Schnelle Prototypen",
        "Komponenten-Erstellung",
        "Code-Optimierung",
        "Qualitätssicherung durch unsere Entwickler:innen"
      ]
    }
  ] : [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Content Creation with ChatGPT",
      description: "We use ChatGPT to create content outlines, multilingual drafts, and messaging frameworks — always refined by our editorial team.",
      features: [
        "Structured SEO outlines",
        "Multilingual content drafts",
        "Messaging frameworks",
        "Always human-reviewed and refined"
      ]
    },
    {
      icon: <Image className="h-10 w-10 text-purple-500" />,
      title: "Visuals with Midjourney",
      description: "Midjourney helps us create stunning, brand-specific images and illustrations — no stock photos needed.",
      features: [
        "Custom hero visuals",
        "Brand-specific illustrations",
        "Unique imagery for key sections",
        "Consistent with your brand identity"
      ]
    },
    {
      icon: <Video className="h-10 w-10 text-red-500" />,
      title: "Motion & Video with Sora",
      description: "From explainer videos to background loops, Sora allows us to generate dynamic video content — fast, branded, and engaging.",
      features: [
        "Hero animations & loops",
        "Explainer videos",
        "Dynamic visual storytelling",
        "Perfect for landing pages"
      ]
    },
    {
      icon: <Layout className="h-10 w-10 text-green-500" />,
      title: "AI in Development",
      description: "We use AI-assisted tools to generate UI components, test layouts, and speed up frontend development — while keeping everything strategic and human-checked.",
      features: [
        "Faster prototyping",
        "Component generation",
        "Code optimization",
        "Quality-assured by developers"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'de' 
              ? "Wie wir KI für bessere Ergebnisse nutzen" 
              : "How We Use AI to Accelerate Results"}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
