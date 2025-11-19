
import React from 'react';
import { MessageCircle, BarChart3, TestTube, Users } from 'lucide-react';
import StaggerReveal from '@/components/animations/StaggerReveal';
import Reveal from '@/components/animations/Reveal';

const UserResearchMethodology = () => {
  const researchMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Qualitative Research & User Interviews",
      description: "Tiefgehendes Verständnis von Nutzerbedürfnissen, Motivationen und Pain Points",
      deliverables: [
        "Interview Guides & Scripts",
        "User Insights Report",
        "Jobs-to-be-Done Framework",
        "Behavioral Pattern Analysis"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Quantitative Research & Analytics",
      description: "Datenbasierte Validierung durch Surveys, Analytics und statistische Auswertung",
      deliverables: [
        "Survey Design & Execution",
        "Statistical Analysis",
        "Behavioral Data Insights",
        "Segmentation Analysis"
      ]
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Usability Testing & Validation",
      description: "Systematisches Testing für validierte User Experience und Interaction Design",
      deliverables: [
        "Usability Test Protocols",
        "Task Success Metrics",
        "Heuristic Evaluation",
        "Recommendation Report"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Persona Development & Segmentation",
      description: "Evidenzbasierte Personas für zielgerichtetes Produkt- und UX-Design",
      deliverables: [
        "Behavioral Personas",
        "User Segmentation Model",
        "Empathy Maps",
        "Customer Journey per Persona"
      ]
    }
  ];

  const researchOutcomes = [
    { value: "500+", label: "User Interviews durchgeführt" },
    { value: "95%", label: "Confidence Level in Research" },
    { value: "+85%", label: "Design Validation Rate" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              User Research Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Evidenzbasierte UX-Forschung für strategische Produktentscheidungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Strukturierte Research-Methodik kombiniert qualitative und quantitative Forschung für datenbasierte UX- und Produktentscheidungen.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-16">
          {researchMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <div className="text-primary mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {method.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {method.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground mb-3">Deliverables:</p>
                {method.deliverables.map((deliverable, idx) => (
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
              Research Excellence in Zahlen
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {researchOutcomes.map((outcome, index) => (
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
              Von User Insights zu strategischen Produktentscheidungen
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              User Research Methodology verbindet qualitative Tiefe mit quantitativer Validierung: Von User Interviews über Analytics bis zu systematischem Testing. Das Ergebnis: Evidenzbasierte Produktentscheidungen statt Annahmen, validiertes Design statt Bauchgefühl.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default UserResearchMethodology;
