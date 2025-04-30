
import React from 'react';
import { Terminal, Send, LayoutGrid, ArrowUpRight } from 'lucide-react';

const WoWirArbeitenDE = () => {
  const workingMethods = [
    {
      icon: <Terminal className="h-8 w-8 text-brand-primary" />,
      title: "Remote-First",
      description: "Wir arbeiten seit 2018 mit einem verteilten Team – das macht uns flexibel, effizient und ermöglicht uns Zugang zu Top-Talenten, unabhängig vom Standort."
    },
    {
      icon: <Send className="h-8 w-8 text-brand-primary" />,
      title: "Direkte Kommunikation",
      description: "Keine Projektmanager als Vermittler – Sie kommunizieren immer direkt mit der Person, die für Ihr Projekt verantwortlich ist."
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-brand-primary" />,
      title: "Agile Methodik",
      description: "Flexibel, iterativ und transparent. Wir arbeiten in überschaubaren Sprints mit regelmäßigen Feedback-Schleifen."
    },
    {
      icon: <ArrowUpRight className="h-8 w-8 text-brand-primary" />,
      title: "Ergebnisorientiert",
      description: "Der Fokus liegt auf Ergebnissen, nicht auf Stunden. Wir messen unseren Erfolg an Ihren Geschäftszielen."
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Wie wir arbeiten</h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            Unsere Arbeitsweise ist auf maximale Effizienz und transparente Zusammenarbeit ausgerichtet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workingMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-brand-primary/10 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">{method.title}</h3>
                <p className="text-brand-text">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoWirArbeitenDE;
