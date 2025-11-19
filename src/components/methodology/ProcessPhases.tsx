import React from 'react';
import { Search, Lightbulb, Zap, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const ProcessPhases = () => {
  const phases = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Phase 1: Strategic Discovery",
      duration: "2-4 Wochen",
      description: "Stakeholder Alignment, Opportunity Mapping und strategische Fundament-Entwicklung für die gesamte Transformation.",
      activities: [
        "Stakeholder Interviews & C-Level Alignment",
        "Competitive Analysis & Market Positioning",
        "Opportunity Map & Value Hypotheses",
        "Problem Framing & Strategic Goals Definition",
        "Budget & Timeline Framework",
        "Risk Assessment & Mitigation Strategy"
      ],
      deliverables: [
        "Strategic Discovery Report",
        "Opportunity Map",
        "Stakeholder Alignment Documentation",
        "Initial Roadmap Draft"
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Phase 2: UX & Product Strategy",
      duration: "2-3 Wochen",
      description: "Customer Journey Design, Information Architecture und strategische UX-Konzeption für nutzerzentrierte Lösungen.",
      activities: [
        "Customer Journey Mapping",
        "Information Architecture Development",
        "Wireframing & Conceptual Prototyping",
        "Requirements Engineering",
        "Conversion Strategy & Funnel Design",
        "Content Strategy & Messaging Framework"
      ],
      deliverables: [
        "UX Strategy Document",
        "Customer Journey Maps",
        "Wireframes & Prototypes",
        "Requirements Specification",
        "IA & Content Strategy"
      ]
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Phase 3: AI Integration Strategy",
      duration: "1-2 Wochen",
      description: "LLM Use Case Identification, AI Workflow Design und strategische Integration von AI-Technologien für Effizienzgewinne.",
      activities: [
        "LLM Use Case Identification",
        "AI Workflow Strategy & Design",
        "Automation Opportunity Mapping",
        "RAG & Multi-Agent Architecture",
        "AI-Driven Content Pipeline Design",
        "Team Enablement Planning"
      ],
      deliverables: [
        "AI Integration Strategy",
        "LLM Use Case Documentation",
        "Workflow Architecture",
        "Automation Roadmap",
        "Team Training Plan"
      ]
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Phase 4: Implementation Leadership",
      duration: "4-12 Wochen",
      description: "Multidisciplinary Team Coordination, Agile Development und strukturierte Umsetzung mit kontinuierlicher Quality Assurance.",
      activities: [
        "International Team Coordination",
        "Agile Sprint Planning & Execution",
        "Technical Direction & Architecture Reviews",
        "Quality Assurance & Testing Strategy",
        "Stakeholder Communication & Reporting",
        "Risk Management & Issue Resolution"
      ],
      deliverables: [
        "Implemented Solution",
        "Technical Documentation",
        "Quality Assurance Reports",
        "Sprint Reviews & Demos",
        "Deployment Strategy"
      ]
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Phase 5: Optimization & Scaling",
      duration: "Kontinuierlich",
      description: "Performance Monitoring, datenbasierte Optimierung und kontinuierliche Verbesserung für nachhaltige Business-Outcomes.",
      activities: [
        "Performance Analytics & KPI Tracking",
        "A/B Testing & Conversion Optimization",
        "User Feedback Integration",
        "Iterative Improvements",
        "Scaling Strategy Development",
        "Quarterly Business Reviews"
      ],
      deliverables: [
        "Performance Reports",
        "Optimization Recommendations",
        "A/B Test Results",
        "Quarterly Business Reviews",
        "Continuous Improvement Roadmap"
      ]
    }
  ];

  return (
    <section id="process-phases" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Detaillierter Prozess-Überblick
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jede Phase mit klaren Aktivitäten, Deliverables und messbaren Outcomes
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 md:p-12 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Icon & Meta */}
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4">
                    {phase.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {phase.title}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                    {phase.duration}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/4">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-foreground">
                        Key Activities
                      </h4>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start text-muted-foreground"
                          >
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-foreground">
                        Deliverables
                      </h4>
                      <div className="space-y-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div 
                            key={idx}
                            className="bg-primary/5 rounded-lg p-3 border border-primary/20"
                          >
                            <p className="text-sm font-semibold text-foreground">
                              {deliverable}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPhases;
