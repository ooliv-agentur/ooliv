
import React from 'react';
import { Target, Brain, Layers, Users, TrendingUp, Zap } from 'lucide-react';

const UliCredentials = () => {
  const credentials = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Discovery & Advisory",
      description: "Strategic Discovery Frameworks für C-Level: Opportunity Mapping, Stakeholder Alignment, Value Hypothesis Validation und strategische Roadmap-Entwicklung."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Product & UX Strategy Framework",
      description: "Product Vision & Discovery, Outcome-based Roadmaps, UX Strategy, Information Architecture und Conversion-optimierte Customer Journeys."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Driven Business Transformation",
      description: "AI Strategy Consulting: LLM Integration, RAG-Systeme, AI-Workflows und ML Pipeline Design für messbare Business-Effizienzgewinne."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Implementation Leadership",
      description: "End-to-End Projektverantwortung: Multidisziplinäre Team-Koordination, Requirements Engineering und Quality Assurance bei komplexen Digitalprojekten."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Measurable Business Outcomes",
      description: "Track Record: +240% Conversion Rates, +180% Lead Quality, -45% Time-to-Decision durch datengetriebene KPI-Frameworks und Performance-Strategien."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Thought Leadership & Methodologie",
      description: "16+ Jahre Methodologie-Entwicklung, Strategic Frameworks und Best Practices für Digital Strategy, UX Excellence und AI Integration."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategic Advisory Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            16+ Jahre Track Record in Digital Strategy, Product & UX Leadership und AI-Transformation – mit nachweisbaren Business Outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-primary mb-4">
                {credential.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {credential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UliCredentials;
