import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, Target, Zap } from 'lucide-react';

const StrategicChallengesSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const challenges = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Ihre Website sieht gut aus – aber bringt keine Anfragen",
      description: "Schönes Design allein reicht nicht. Wenn Ihre Website nicht konvertiert, fehlt die strategische Grundlage: klare User Journeys, überzeugende Inhalte, messbare Conversion-Ziele. Mit 16+ Jahren Erfahrung entwickle ich die Strategie, die aus Besuchern Kunden macht."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Digitalisierung läuft – aber ohne erkennbare Richtung",
      description: "Viele Projekte gleichzeitig, aber kein roter Faden? Wenn Teams aneinander vorbeiarbeiten und Budget verpufft, brauchen Sie eine klare Digital-Strategie. Ich helfe Ihnen, Prioritäten zu setzen und alle auf ein Ziel auszurichten."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "KI-Potenzial ist da – aber wie konkret umsetzen?",
      description: "KI ist mehr als ChatGPT. Aber welche Use Cases machen für Ihr Business wirklich Sinn? Ich identifiziere die konkreten Anwendungsfälle, die Ihren Workflow verbessern und Ihren Kunden echten Mehrwert bringen – strategisch durchdacht, nicht blind dem Hype gefolgt."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategische Herausforderungen in der Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            B2B-Unternehmen stehen vor komplexen strategischen Challenges, die operational Tactics nicht lösen können.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Die Lösung: Strategie, die wirklich funktioniert
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Sie bekommen keine 300-seitigen Konzepte, die in der Schublade verschwinden. Sondern klare, umsetzbare Strategien mit konkreten Maßnahmen. Basierend auf 16+ Jahren Erfahrung in <a href="/strategie" className="text-primary hover:underline">Digital Strategy</a>, <a href="/produkt-ux-strategie" className="text-primary hover:underline">Product & UX</a> und <a href="/ki-technologien" className="text-primary hover:underline">KI-Integration</a> – mit messbaren Ergebnissen (+240% Conversion Rates, +180% Lead Quality).
          </p>
          <Button 
            onClick={handleStartProject}
            size="lg"
            className="text-lg px-8"
          >
            Kostenloses Strategiegespräch vereinbaren
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            30 Min. unverbindlich – wir besprechen Ihre Situation und ich zeige Ihnen konkrete Ansätze
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicChallengesSection;
