import React from 'react';
import { Search, Target, TrendingUp, Users } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const StrategicDiscoveryDetail = () => {
  const discoveryPhases = [
    {
      icon: Search,
      title: "Stakeholder Alignment & Discovery Workshops",
      description: "Strukturierte Interviews mit C-Level und Key Stakeholders zur Identifikation strategischer Ziele, Herausforderungen und Opportunities.",
      deliverables: [
        "Stakeholder Map & Alignment Matrix",
        "Strategic Goals & Success Criteria",
        "Pain Points & Opportunity Assessment"
      ]
    },
    {
      icon: Target,
      title: "Competitive Analysis & Market Positioning",
      description: "Tiefgehende Analyse des Wettbewerbsumfelds, Markttrends und Best Practices zur Definition Ihrer strategischen Positionierung.",
      deliverables: [
        "Competitive Landscape Report",
        "Market Opportunity Analysis",
        "Differentiation Strategy"
      ]
    },
    {
      icon: TrendingUp,
      title: "Value Hypothesis & Business Case",
      description: "Entwicklung validierter Value Hypotheses mit ROI-Modellen und klarem Business Case für strategische Initiativen.",
      deliverables: [
        "Value Hypothesis Framework",
        "ROI & Impact Projection",
        "Investment & Resource Planning"
      ]
    },
    {
      icon: Users,
      title: "Strategic Roadmap Development",
      description: "Priority-basierte Roadmap mit Milestones, Dependencies und klaren Ownership-Strukturen für die Umsetzungsphase.",
      deliverables: [
        "Strategic Roadmap (12-24 Monate)",
        "Phase Gates & Milestones",
        "Risk Mitigation Strategy"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Phase 01
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Strategic Discovery: Fundament für digitale Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bevor wir implementieren, schaffen wir strategische Klarheit. Strategic Discovery ist der strukturierte Prozess zur Identifikation von Opportunities, Validierung von Hypothesen und Entwicklung datenbasierter Strategien.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-12">
          {discoveryPhases.map((phase, index) => {
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

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ergebnis der Strategic Discovery
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ein validiertes Strategic Framework mit klaren Opportunities, priorisierten Initiativen und messbaren Success Criteria – die Grundlage für erfolgreiche digitale Transformation mit ROI-Fokus.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Strategic Roadmap
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Business Case & ROI Model
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Stakeholder Alignment
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Value Hypothesis Framework
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicDiscoveryDetail;
