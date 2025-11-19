import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Rocket, RefreshCw } from 'lucide-react';

const EngagementModelsTeaser = () => {
  const models = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Strategie-Paket",
      investment: "€15k–25k",
      duration: "4–6 Wochen",
      description: "Sie bekommen Klarheit und einen konkreten Plan. Perfekt, wenn Sie wissen wollen, wo Sie digital stehen und was zu tun ist.",
      deliverables: ["Strategie-Report (30-50 Seiten)", "Konkrete Maßnahmen-Roadmap", "Priorisierte To-Do Liste"],
      outcomes: ["Klare Richtung statt Unsicherheit", "Durchschnittlich +60% Conversion Rate", "Weniger Risiko, bessere Entscheidungen"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Komplett-Transformation",
      investment: "€40k–80k",
      duration: "3–6 Monate",
      description: "Von der Strategie bis zur fertigen Umsetzung. Sie bekommen nicht nur einen Plan, sondern das fertige Ergebnis – inkl. neuem Website-Konzept, UX-Design und technischer Umsetzung.",
      deliverables: ["Komplettes Strategie-Paket", "UX-Konzept & Design", "Technische Umsetzung", "Launch & Optimierung"],
      outcomes: ["Fertige Lösung, nicht nur Theorie", "Durchschnittlich +140% Conversion Rate", "Schnellerer Go-Live durch klaren Prozess"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Laufende Beratung",
      investment: "€8k–15k/Monat",
      duration: "12+ Monate",
      description: "Ich bleibe an Ihrer Seite – als strategischer Sparringspartner für alle digitalen Themen. Regelmäßige Calls, schnelle Rückmeldungen, kontinuierliche Optimierung.",
      deliverables: ["8-15h Beratung/Monat", "Wöchentliche Strategy Calls", "Laufende Optimierung", "KI & Innovation Support"],
      outcomes: ["Immer jemanden für strategische Fragen", "Langfristige Partnerschaft", "Kontinuierliche Verbesserung"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            So können wir zusammenarbeiten
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drei Möglichkeiten – je nachdem, wo Sie gerade stehen und was Sie brauchen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-muted/30 p-8 rounded-lg border border-border hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                {model.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{model.title}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">{model.investment}</span>
                <span className="text-sm text-muted-foreground">· {model.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
              
              <div className="mb-4 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-foreground mb-2">Was Sie bekommen:</p>
                <div className="space-y-1">
                  {model.deliverables.map((deliverable, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground mb-2">Ergebnisse:</p>
                {model.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/investition">
            <Button size="lg" className="text-lg px-8">
              Alle Details & Preise ansehen
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            Oder direkt kostenloses Erstgespräch vereinbaren – ich berate Sie, welches Modell zu Ihrer Situation passt
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsTeaser;
