
import React from 'react';
import { Lightbulb, Target, Users, Rocket } from 'lucide-react';

const UliApproach = () => {
  const approaches = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Framework Thinking",
      description: "Strukturierte Frameworks für Strategic Discovery, Product Strategy und UX Transformation – von Opportunity Mapping bis zur messbaren Umsetzung. Problem Reframing und holistische Systemarchitektur."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Outcome-Focused Leadership",
      description: "Messbare Business Outcomes statt Output: KPI-Frameworks, datengetriebene Entscheidungen und kontinuierliche Performance-Optimierung. Track Record von +240% Conversion Improvements."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Thought Leadership & Methodologie",
      description: "16+ Jahre Entwicklung von Strategic Frameworks, Best Practices und Methodologies für Digital Strategy, Product Leadership und UX Excellence – dokumentiert und praxiserprobt."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "AI-Enabled Strategic Execution",
      description: "AI-Integration als strategischer Enabler: LLM-Workflows, RAG-Systeme und ML Pipelines für messbare Effizienzgewinne – strategisch eingesetzt, nicht als Selbstzweck."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategic Leadership Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Outcome-focused Frameworks, Thought Leadership und AI-enabled Strategic Execution – 16+ Jahre praxiserprobte Methodologie
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {approach.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-primary/20 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Digital Strategy Lead – nicht Agentur
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ich bin <strong className="text-foreground">Digital Strategy Lead</strong> – kein Entwickler, kein Designer, keine Agentur. Mein Fokus: <strong className="text-foreground">Strategic Discovery</strong>, <strong className="text-foreground">Product & UX Strategy</strong> und <strong className="text-foreground">Implementation Leadership</strong> für B2B-Transformationen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meine Kernkompetenz: <strong className="text-foreground">C-Level Advisory</strong> mit praxiserprobten Strategic Frameworks, <strong className="text-foreground">Thought Leadership</strong> durch 16+ Jahre Methodologie-Entwicklung und <strong className="text-foreground">messbare Business Outcomes</strong> statt reiner Projektabwicklung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliApproach;
