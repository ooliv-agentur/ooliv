import React from 'react';
import { Users, Map, Lightbulb, LineChart } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const UXStrategyDetail = () => {
  const uxPhases = [
    {
      icon: Users,
      title: "User Research & Persona Development",
      description: "Qualitative und quantitative Research zur Identifikation von User Needs, Pain Points und Motivations.",
      deliverables: [
        "User Research Report",
        "Persona Framework (Behavioral + Jobs-to-be-Done)",
        "User Needs & Pain Points Matrix"
      ]
    },
    {
      icon: Map,
      title: "Customer Journey Mapping",
      description: "End-to-End Journey Mapping mit Touchpoint Analysis, Emotion Mapping und Opportunity Identification.",
      deliverables: [
        "Customer Journey Maps",
        "Touchpoint & Channel Strategy",
        "Moment-of-Truth Analysis"
      ]
    },
    {
      icon: Lightbulb,
      title: "Information Architecture & UX Concept",
      description: "Strukturierte IA-Entwicklung mit Card Sorting, Tree Testing und Prototyping für optimale Nutzerführung.",
      deliverables: [
        "Information Architecture",
        "Wireframes & User Flows",
        "Interactive Prototypes"
      ]
    },
    {
      icon: LineChart,
      title: "Conversion Strategy & Optimization",
      description: "Decision-Making UX Design mit klaren CTAs, Funnel Optimization und Conversion-fokussierter Content-Strategie.",
      deliverables: [
        "Conversion Funnel Strategy",
        "CTA & Persuasion Framework",
        "A/B Testing Roadmap"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Phase 02
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              UX & Product Strategy: Von User Research zu Business Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              UX Strategy ist mehr als Design – es ist die strategische Übersetzung von User Needs in Business Value. Durch strukturierte Research, Journey Mapping und Conversion-fokussierte Konzepte schaffen wir messbare Outcomes.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-12">
          {uxPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Deliverables</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </StaggerReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-muted/30 p-6 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">+180%</div>
            <div className="text-sm text-muted-foreground">Lead Quality Improvement</div>
          </div>
          <div className="bg-muted/30 p-6 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">+240%</div>
            <div className="text-sm text-muted-foreground">Conversion Rate Increase</div>
          </div>
          <div className="bg-muted/30 p-6 rounded-xl border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">-45%</div>
            <div className="text-sm text-muted-foreground">Time-to-Decision Reduction</div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            UX Strategy Outcomes
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Von User Research bis zur Conversion Optimization – Sie erhalten eine durchdachte UX-Strategie mit validiertem IA-Konzept, optimierten User Flows und messbaren Business Outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UXStrategyDetail;
