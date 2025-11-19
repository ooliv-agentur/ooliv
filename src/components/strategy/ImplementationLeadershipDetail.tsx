import React from 'react';
import { Users, FileCheck, Target, TrendingUp } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const ImplementationLeadershipDetail = () => {
  const leadershipAreas = [
    {
      icon: Users,
      title: "Multidisciplinary Team Coordination",
      description: "Führung internationaler Teams (Design, Development, Content) mit klaren Ownership-Strukturen und Collaboration Frameworks.",
      activities: [
        "Team Setup & Kick-off Workshops",
        "Sprint Planning & Agile Ceremonies",
        "Cross-functional Alignment Meetings",
        "Stakeholder Updates & Executive Reviews"
      ]
    },
    {
      icon: FileCheck,
      title: "Requirements Engineering & Quality Assurance",
      description: "Strukturierte Requirements Definition mit Acceptance Criteria, Testing Strategy und Quality Gates.",
      activities: [
        "Epic & User Story Definition",
        "Technical Requirements Documentation",
        "QA Strategy & Testing Frameworks",
        "Code Reviews & Performance Audits"
      ]
    },
    {
      icon: Target,
      title: "Risk Management & Problem Solving",
      description: "Proaktive Risk Identification, Mitigation Planning und schnelles Problem-Solving bei Blockern oder technischen Challenges.",
      activities: [
        "Risk Assessment & RAID Logs",
        "Technical Spike Planning",
        "Blocker Resolution & Escalation",
        "Dependency Management"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization & Continuous Improvement",
      description: "Post-Launch Monitoring, Performance Analytics und iterative Optimization für kontinuierliche Verbesserung.",
      activities: [
        "KPI Tracking & Analytics Setup",
        "Performance Monitoring & Alerts",
        "A/B Testing & Experiments",
        "Retrospectives & Process Optimization"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Phase 04
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Implementation Leadership: Von der Strategie zur erfolgreichen Umsetzung
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Die beste Strategie ist wertlos ohne erfolgreiche Umsetzung. Als Implementation Leader koordiniere ich internationale Teams, sichere Qualität und garantiere messbare Business Outcomes – vom ersten Sprint bis zum Launch und darüber hinaus.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-12">
          {leadershipAreas.map((area, index) => {
            const IconComponent = area.icon;
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
                    <h3 className="text-xl font-bold text-foreground mb-2">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Activities</h4>
                  <ul className="space-y-2">
                    {area.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </StaggerReveal>

        <div className="bg-background rounded-xl p-8 border border-border mb-12">
          <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
            Implementation Leadership in der Praxis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Team Coordination</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Führung verteilter Teams (Designer, Frontend/Backend Developers, Content Specialists)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Agile Ceremonies: Sprint Planning, Daily Standups, Retrospectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Cross-functional Alignment zwischen Technical & Business Stakeholders</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Quality & Performance</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Code Reviews & Architecture Decisions für skalierbare Lösungen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Performance Audits & Core Web Vitals Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Testing Strategy (Unit, Integration, E2E) & Quality Gates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ergebnis: Erfolgreiche Digital Transformation
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Von der Strategie zur Umsetzung – Sie erhalten koordinierte Implementation Leadership mit klaren Milestones, Quality Assurance und messbaren Business Outcomes. On-time, on-budget, mit nachhaltigen Ergebnissen.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Team Coordination
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Quality Assurance
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Performance Optimization
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground">
              Risk Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationLeadershipDetail;
