import React from 'react';
import { Target, Users, Zap, LineChart } from 'lucide-react';

const MethodologyBenefits = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strukturierte Klarheit",
      description: "Jede Phase mit klaren Zielen, Aktivitäten und Deliverables – keine unklaren Prozesse oder Ad-hoc-Entscheidungen."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Stakeholder Alignment",
      description: "Kontinuierliche C-Level Kommunikation und strukturierte Entscheidungsprozesse für maximale Transparenz."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Messbare Outcomes",
      description: "KPI-basierte Erfolgsmessung in jeder Phase – von Strategic Discovery bis zur kontinuierlichen Optimization."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Risiko-Minimierung",
      description: "Validierte Konzepte vor teurer Umsetzung, strukturiertes Risk Management und iterative Optimierung."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Warum dieser Prozess?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strukturierte Führung reduziert Risiken, beschleunigt Time-to-Market und sichert messbare Business-Outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyBenefits;
