
import React from 'react';

const AISolutionDE = () => {
  return (
    <section className="py-16 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Unsere KI-Lösungen für Ihren Erfolg</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Wir helfen Ihnen, die transformative Kraft der künstlichen Intelligenz für Ihr Unternehmen zu nutzen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-heading mb-3">KI-Strategieberatung</h3>
              <p className="text-brand-text">
                Wir analysieren Ihre Geschäftsprozesse und entwickeln eine maßgeschneiderte KI-Strategie, die Ihre Unternehmensziele unterstützt.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-heading mb-3">KI-Prototyp-Entwicklung</h3>
              <p className="text-brand-text">
                Wir entwickeln funktionsfähige Prototypen, um den Wert von KI für Ihr Unternehmen zu demonstrieren und zu validieren.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-heading mb-3">KI-Implementierung</h3>
              <p className="text-brand-text">
                Wir integrieren KI-Lösungen in Ihre bestehende IT-Infrastruktur und stellen sicher, dass sie reibungslos funktionieren.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-heading mb-3">KI-Training und Support</h3>
              <p className="text-brand-text">
                Wir schulen Ihre Mitarbeiter und bieten laufenden Support, um den langfristigen Erfolg Ihrer KI-Lösungen zu gewährleisten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionDE;
