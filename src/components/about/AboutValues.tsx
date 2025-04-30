
import React from 'react';
import { Shield, Users, TrendingUp, BarChart4 } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-brand-primary" />,
      title: "Vertrauen & Transparenz",
      description: "Klare Kommunikation, transparente Prozesse und messbare Ergebnisse sind die Grundlage unserer Zusammenarbeit."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      title: "Partnerschaftliche Zusammenarbeit",
      description: "Wir arbeiten nicht für Sie, sondern mit Ihnen – mit direkter Kommunikation auf allen Ebenen."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-primary" />,
      title: "Nachhaltiges Wachstum",
      description: "Wir entwickeln keine kurzfristigen Taktiken, sondern langfristige Strategien für kontinuierliches Wachstum."
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-brand-primary" />,
      title: "Datengetriebene Entscheidungen",
      description: "Jede Entscheidung basiert auf Daten und Analysen – nicht auf Vermutungen oder Trends."
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Unsere Werte</h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            Diese Grundsätze prägen unsere tägliche Arbeit und unsere Beziehungen zu Kunden, Partnern und untereinander.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-brand-primary/10 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">{value.title}</h3>
                <p className="text-brand-text">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
