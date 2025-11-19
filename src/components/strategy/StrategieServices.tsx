
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const StrategieServices = () => {
  const services = [
    {
      title: "Strategic Discovery & Opportunity Mapping",
      features: [
        "Stakeholder Interviews & Alignment",
        "Opportunity Map & Value Hypotheses",
        "Competitive Analysis & Market Positioning",
        "Strategic Roadmap Development"
      ]
    },
    {
      title: "Digital Roadmap & KPI Frameworks",
      features: [
        "Priority-basierte Roadmaps",
        "KPI Definition & Tracking Strategy",
        "Budget & Resource Planning",
        "Timeline & Milestone Definition"
      ]
    },
    {
      title: "UX Strategy & Customer Journey Design",
      features: [
        "Customer Journey Mapping",
        "Information Architecture",
        "Conversion Strategy & Funnel Optimization",
        "Decision-Making UX Design"
      ]
    },
    {
      title: "AI-Enabled Workflow Integration",
      features: [
        "LLM Use Case Identification",
        "Automation & Efficiency Strategy",
        "AI-Driven Content Pipelines",
        "Team Enablement & Training"
      ]
    },
    {
      title: "C-Level Advisory & Decision Support",
      features: [
        "Strategic Consulting on C-Level",
        "Business Case Development",
        "Risk Assessment & Mitigation",
        "Executive Reporting & Reviews"
      ]
    },
    {
      title: "Implementation Leadership",
      features: [
        "Multidisciplinary Team Coordination",
        "Requirements Engineering",
        "Quality Assurance Strategy",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              End-to-End Digital Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategische Führung von der Discovery bis zur messbaren Umsetzung – mit 16+ Jahren Erfahrung in digitaler Transformation
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ergebnis
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Klare strategische Roadmaps mit messbaren Outcomes, validierte Konzepte und strukturierte Umsetzung durch internationale Teams – von der Vision zum Business-Impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategieServices;
