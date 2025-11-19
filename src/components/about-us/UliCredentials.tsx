
import React from 'react';
import { Target, Brain, Layers, Users, TrendingUp, Zap } from 'lucide-react';

const UliCredentials = () => {
  const credentials = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Digital Strategy & Advisory",
      description: "End-to-end Strategic Consulting für C-Level Stakeholder – von Opportunity Mapping bis zur messbaren Umsetzung."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Enabled Transformation",
      description: "Strategische Integration von LLMs, RAG-Systemen und AI-Workflows für messbare Effizienzgewinne."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Product & UX Leadership",
      description: "Product Vision, Roadmap Creation, UX Strategy und multidisziplinäre Team-Führung bei komplexen Projekten."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "International Team Leadership",
      description: "16+ Jahre Erfahrung in der Führung internationaler multidisziplinärer Teams bei digitalen Transformationsprojekten."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Data-Driven Decision Making",
      description: "KPI Frameworks, Performance Analytics und datenbasierte Strategien für messbare Business-Outcomes."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Requirements Engineering",
      description: "Strukturierte Anforderungsanalyse, Stakeholder-Alignment und klare Spezifikationen für komplexe Systeme."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Kernkompetenzen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            16+ Jahre strategische Digitalberatung an der Schnittstelle von Business-Strategie, UX-Denken und AI-Integration
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
