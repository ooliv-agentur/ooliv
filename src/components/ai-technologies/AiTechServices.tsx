
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
      title: isGerman ? "LLM Use Case Identification" : "LLM Use Case Identification",
      description: isGerman 
        ? "Strategische Identifikation von High-Impact LLM Use Cases für Content, Research, Customer Support und Business Intelligence."
        : "Strategic identification of high-impact LLM use cases for content, research, customer support, and business intelligence."
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: isGerman ? "AI Workflow Strategy & Design" : "AI Workflow Strategy & Design",
      description: isGerman 
        ? "End-to-End AI Workflow Design: von RAG-Pipelines über Multi-Agent Systems bis zu Custom AI-Anwendungen."
        : "End-to-end AI workflow design: from RAG pipelines to multi-agent systems and custom AI applications."
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: isGerman ? "Automation & Efficiency Optimization" : "Automation & Efficiency Optimization",
      description: isGerman 
        ? "Strategische Automatisierung repetitiver Prozesse: Content-Production, Data Enrichment, Quality Control."
        : "Strategic automation of repetitive processes: content production, data enrichment, quality control."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: isGerman ? "RAG & Multi-Agent Strategy" : "RAG & Multi-Agent Strategy",
      description: isGerman 
        ? "Design intelligenter RAG-Systeme und Multi-Agent Workflows für komplexe Business-Anforderungen."
        : "Design of intelligent RAG systems and multi-agent workflows for complex business requirements."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: isGerman ? "AI-Driven Content & Research Pipelines" : "AI-Driven Content & Research Pipelines",
      description: isGerman 
        ? "Aufbau strategischer Content-Pipelines: von AI-gestützter Research bis zu Multi-Channel Content Distribution."
        : "Building strategic content pipelines: from AI-supported research to multi-channel content distribution."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: isGerman ? "Team Enablement & AI Training" : "Team Enablement & AI Training",
      description: isGerman 
        ? "Schulung und Enablement Ihrer Teams für effektive AI-Nutzung: Prompt Engineering, Tool Selection, Best Practices."
        : "Training and enablement of your teams for effective AI usage: prompt engineering, tool selection, best practices."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {isGerman ? "Strategische AI-Integration" : "Strategic AI Integration"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isGerman 
              ? "LLM-basierte Transformation für messbare Effizienzgewinne und echte Business-Ergebnisse"
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
            {isGerman ? "Ergebnis" : "Result"}
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {isGerman 
              ? "Messbare Effizienzgewinne durch strategische AI-Integration: 40-60% Zeitersparnis bei Content-Produktion, intelligente Automation und skalierbare AI-Workflows."
              : "Measurable efficiency gains through strategic AI integration: 40-60% time savings in content production, intelligent automation, and scalable AI workflows."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiTechServices;
