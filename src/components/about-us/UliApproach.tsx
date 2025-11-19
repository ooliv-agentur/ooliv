
import React from 'react';
import { Lightbulb, Target, Users, Rocket } from 'lucide-react';

const UliApproach = () => {
  const approaches = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategisches Denken",
      description: "Komplexe Business-Anforderungen werden in klare, umsetzbare Strategien übersetzt. Problem Reframing und holistische Systemarchitektur sind meine Stärken."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Klarheit & Effizienz",
      description: "Direkte Kommunikation ohne Marketing-Geschwätz. Strukturierte Prozesse, klare Entscheidungsgrundlagen und messbare Outcomes stehen im Fokus."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Leadership",
      description: "16+ Jahre Erfahrung in der Führung internationaler multidisziplinärer Teams. Klare Vision, strukturierte Delegation, effektive Koordination."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "AI-Enabled Innovation",
      description: "Strategische Integration von AI-Tools und Workflows für maximale Effizienz – nicht als Ersatz für Expertise, sondern als strategischer Beschleuniger."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Arbeitsweise & Philosophie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategische Klarheit, strukturiertes Denken und AI-enabled Workflows – kombiniert mit 16+ Jahren praktischer Erfahrung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {approach.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-primary/20 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Was mich auszeichnet
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ich bin kein Entwickler, kein Designer und kein Projektmanager im operativen Sinne. Ich bin <strong className="text-foreground">strategischer Berater</strong> mit tiefem technischen Verständnis und der Fähigkeit, komplexe digitale Ökosysteme zu orchestrieren.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meine Stärke liegt darin, <strong className="text-foreground">C-Level Stakeholder</strong> strategisch zu beraten, multidisziplinäre Teams zu führen und von der Vision bis zur messbaren Umsetzung <strong className="text-foreground">End-to-End Verantwortung</strong> zu übernehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliApproach;
