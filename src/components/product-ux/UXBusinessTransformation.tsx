
import React from 'react';
import { Compass, Layers, TrendingUp, Palette } from 'lucide-react';
import StaggerReveal from '@/components/animations/StaggerReveal';
import Reveal from '@/components/animations/Reveal';

const UXBusinessTransformation = () => {
  const transformationAreas = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Customer Experience Strategy",
      description: "Ganzheitliche CX-Vision für konsistente User Experience über alle Touchpoints",
      deliverables: [
        "CX Vision & Principles",
        "Experience Blueprint",
        "Service Design Framework",
        "Touchpoint Strategy"
      ]
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Information Architecture & Navigation",
      description: "Strukturierte IA für intuitive Navigation und optimale Content-Findability",
      deliverables: [
        "IA Strategy & Taxonomy",
        "Navigation Design System",
        "Content Hierarchy",
        "Search & Filter Optimization"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Conversion & Funnel Optimization",
      description: "CRO-Strategie für messbare Business-Outcomes und Lead-Generierung",
      deliverables: [
        "Conversion Strategy & Framework",
        "Funnel Analysis & Optimization",
        "A/B Testing Roadmap",
        "Lead Quality Improvement"
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design System & Scalability",
      description: "Skalierbare Design Systems für konsistente UX und effiziente Entwicklung",
      deliverables: [
        "Design System Strategy",
        "Component Library",
        "UX Guidelines & Patterns",
        "Accessibility Standards"
      ]
    }
  ];

  const businessImpact = [
    { value: "+240%", label: "Conversion Rate Improvement" },
    { value: "+180%", label: "Lead Quality Increase" },
    { value: "-45%", label: "Time-to-Decision Reduction" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              UX-Driven Business Transformation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Von UX-Excellence zu messbarem Business Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              UX-Transformation verbindet Customer Experience Strategy mit Conversion-Optimierung und skalierbaren Design Systems für nachhaltigen Business Value.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-16">
          {transformationAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <div className="text-primary mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {area.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {area.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground mb-3">Deliverables:</p>
                {area.deliverables.map((deliverable, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Business Impact durch UX-Transformation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {businessImpact.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {impact.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {impact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              UX als strategischer Business Enabler
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UX-driven Business Transformation geht über schönes Design hinaus: Von ganzheitlicher CX-Strategie über strukturierte Information Architecture bis zu messbarer Conversion-Optimierung. Das Ergebnis: UX-Excellence mit direktem Business Impact – höhere Conversions, bessere Lead-Qualität und nachhaltig skalierbare Design Systems.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default UXBusinessTransformation;
