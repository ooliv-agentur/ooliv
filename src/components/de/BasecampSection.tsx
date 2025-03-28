
import React from 'react';
import { Check } from 'lucide-react';

const BasecampSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Effiziente Projektsteuerung mit Basecamp
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto mb-10">
            Für alle Projekte nutzen wir Basecamp als zentrale Plattform. Hier laufen Kommunikation, Aufgaben und Dateien zusammen – DSGVO-konform, transparent und effizient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Gemeinsame Aufgabenlisten und Meilensteine</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Klar dokumentierte Feedback-Schleifen</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Zugriff für alle Projektbeteiligten</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Kein E-Mail-Chaos</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Asynchrone Kommunikation spart Zeit</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-brand-primary">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg text-brand-text">Alles an einem Ort: Inhalte, Dateien, Freigaben</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasecampSection;
