import React from 'react';
import { FileText, Workflow, Target, Lightbulb } from 'lucide-react';

const StrategicFrameworksSection = () => {
  const frameworks = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Website-Strategie & Konzeption",
      description: "Ich analysiere Ihre Zielgruppe, entwickle die User Journey und erstelle ein durchdachtes Website-Konzept mit klarem Conversion-Fokus.",
      deliverable: "→ Strategisches Website-Konzept, Wireframes, Content-Strategie"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "UX-Optimierung & Conversion-Boost",
      description: "Ich identifiziere Conversion-Killer auf Ihrer Website und entwickle konkrete Verbesserungen für bessere User Experience und mehr Anfragen.",
      deliverable: "→ UX-Audit Report, Conversion-Optimierungsplan, A/B-Test Roadmap"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "KI-Integration für Ihr Business",
      description: "Ich finde heraus, wo KI in Ihrem Unternehmen wirklich Sinn macht – von Chatbots über Content-Automation bis zu smarten Workflows.",
      deliverable: "→ KI Use Case Analyse, Implementierungsplan, ROI-Kalkulation"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Digital-Strategie & Roadmap",
      description: "Ich entwickle Ihre digitale Gesamtstrategie – von der Vision über konkrete Maßnahmen bis zum messbaren Umsetzungsplan für die nächsten 6-12 Monate.",
      deliverable: "→ Digital Strategy Document, Priorisierte Roadmap, KPI-Framework"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Was Sie konkret bekommen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Keine abstrakten Strategien, sondern konkrete Ergebnisse. Bewährte Methoden aus 16+ Jahren Erfahrung – individuell auf Ihr Business zugeschnitten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((framework, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {framework.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{framework.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{framework.description}</p>
              <p className="text-xs font-semibold text-primary">{framework.deliverable}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Mehr über meine Arbeitsweise: <a href="/methodik" className="text-primary hover:underline font-semibold">Wie ich arbeite – von Discovery bis Umsetzung</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicFrameworksSection;
