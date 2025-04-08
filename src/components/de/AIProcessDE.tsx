
import React from 'react';

const AIProcessDE = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Unser KI-Implementierungsprozess</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Ein strukturierter Ansatz für erfolgreiche KI-Projekte, der Transparenz und messbare Ergebnisse gewährleistet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-primary text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">Analyse</h3>
            <p className="text-brand-text">
              Wir analysieren Ihre Geschäftsprozesse und identifizieren Potenziale für KI-Anwendungen.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-primary text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">Konzeption</h3>
            <p className="text-brand-text">
              Wir entwickeln ein Konzept für Ihre KI-Lösung und definieren klare Ziele und Erfolgskriterien.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-primary text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">Entwicklung</h3>
            <p className="text-brand-text">
              Wir entwickeln und testen Ihre KI-Lösung mit einem iterativen Ansatz für optimale Qualität.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-primary text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">Integration</h3>
            <p className="text-brand-text">
              Wir integrieren die KI-Lösung in Ihre bestehende IT-Infrastruktur und schulen Ihre Mitarbeiter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProcessDE;
