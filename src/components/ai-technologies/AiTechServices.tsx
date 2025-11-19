
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, TrendingUp, Brain, FileText, Users } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const services = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: isGerman ? "KI-Potenzial für Ihr Business finden" : "LLM Use Case Identification",
      description: isGerman 
        ? "Ich analysiere Ihre Prozesse und finde heraus, wo KI wirklich Sinn macht: Kundenservice-Chatbots, Content-Automation, smarte Workflows."
        : "Strategic identification of high-impact LLM use cases for content, research, customer support, and business intelligence."
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: isGerman ? "KI-Workflows entwickeln & implementieren" : "AI Workflow Strategy & Design",
      description: isGerman 
        ? "Ich entwickle konkrete KI-Lösungen für Ihre Prozesse – von automatisierten Antwort-Systemen bis zu intelligenten Content-Pipelines."
        : "End-to-end AI workflow design: from RAG pipelines to multi-agent systems and custom AI applications."
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: isGerman ? "Prozesse automatisieren & Zeit sparen" : "Automation & Efficiency Optimization",
      description: isGerman 
        ? "Ich identifiziere repetitive Aufgaben und automatisiere sie mit KI – damit Ihr Team sich auf wichtigere Dinge konzentrieren kann."
        : "Strategic automation of repetitive processes: content production, data enrichment, quality control."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: isGerman ? "Intelligente KI-Systeme aufbauen" : "RAG & Multi-Agent Strategy",
      description: isGerman 
        ? "Ich entwickle smarte KI-Systeme, die auf Ihre Daten zugreifen und komplexe Aufgaben lösen können – z.B. intelligente FAQs oder Research-Assistenten."
        : "Design of intelligent RAG systems and multi-agent workflows for complex business requirements."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: isGerman ? "Content-Produktion beschleunigen" : "AI-Driven Content & Research Pipelines",
      description: isGerman 
        ? "Ich setze KI-gestützte Content-Prozesse auf – von der Recherche über Entwürfe bis zur Verbreitung. Schneller, aber ohne Qualitätsverlust."
        : "Building strategic content pipelines: from AI-supported research to multi-channel content distribution."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: isGerman ? "Ihr Team für KI befähigen" : "Team Enablement & AI Training",
      description: isGerman 
        ? "Ich zeige Ihrem Team, wie sie KI effektiv nutzen: praktische Schulungen, Best Practices und konkrete Tool-Empfehlungen."
        : "Training and enablement of your teams for effective AI usage: prompt engineering, tool selection, best practices."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Wie ich KI für Sie nutzbar mache" : "Strategic AI Integration"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "Von der Identifikation sinnvoller Use Cases bis zur Implementierung – mit messbaren Effizienzgewinnen und echtem Business-Nutzen."
              : "LLM-based transformation for measurable efficiency gains and real business results"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
            {isGerman ? "Was Sie am Ende haben" : "Result"}
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {isGerman 
              ? "Konkrete KI-Lösungen, die Zeit und Kosten sparen: 40-60% weniger Aufwand bei Content-Produktion, automatisierte Workflows und skalierbare KI-Systeme für Ihr Business."
              : "Measurable efficiency gains through strategic AI integration: 40-60% time savings in content production, intelligent automation, and scalable AI workflows."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiTechServices;
