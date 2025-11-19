
import React from 'react';
import { Lightbulb, Search, MapPin, LineChart } from 'lucide-react';
import StaggerReveal from '@/components/animations/StaggerReveal';
import Reveal from '@/components/animations/Reveal';

const ProductStrategyFramework = () => {
  const frameworkAreas = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Product Vision & Strategy Definition",
      description: "Klare strategische Ausrichtung für langfristigen Produkterfolg",
      deliverables: [
        "Product Vision Statement",
        "Strategic Positioning",
        "North Star Metric",
        "Value Proposition Canvas"
      ]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Product Discovery & Validation",
      description: "Strukturierte Opportunity-Analyse und Validierung vor der Entwicklung",
      deliverables: [
        "Opportunity Solution Trees",
        "Assumption Mapping",
        "Validation Framework",
        "Customer Problem Statements"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Product Roadmap & Prioritization",
      description: "Outcome-basierte Roadmap mit klaren Priorisierungskriterien",
      deliverables: [
        "Outcome-based Roadmap",
        "RICE/ICE Scoring Models",
        "Feature Prioritization Matrix",
        "Release Planning Strategy"
      ]
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Product Metrics & KPI Framework",
      description: "Messbare Erfolgskriterien und datenbasierte Produktentscheidungen",
      deliverables: [
        "KPI Dashboard Strategy",
        "Metric Trees (Leading & Lagging)",
        "Success Criteria Definition",
        "Performance Tracking Framework"
      ]
    }
  ];

  const outcomes = [
    { value: "+65%", label: "Product-Market Fit Score" },
    { value: "-40%", label: "Time-to-Market Reduction" },
    { value: "+180%", label: "Feature Adoption Rate" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Product Strategy Framework
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Von der Produktvision zur strategischen Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ein strukturiertes Framework für strategische Produktführung: Von der Vision über Discovery und Priorisierung bis zu messbaren KPIs.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-16">
          {frameworkAreas.map((area, index) => (
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
              Messbare Erfolge durch Product Strategy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Strategisches Framework für nachhaltigen Produkterfolg
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Product Strategy Framework verbindet Vision mit Execution: Von der strategischen Positionierung über strukturierte Discovery bis zur outcome-basierten Roadmap. Das Ergebnis: Klare Priorisierung, validierte Features und messbare Business-Outcomes statt Feature-Factory.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductStrategyFramework;
