
import React from 'react';

const AboutUsDigitalServices = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
            Digital. Aber nicht nur.
          </h2>
          <p className="text-lg mb-12 text-muted-foreground leading-relaxed">
            Unsere Kernkompetenz ist digitale Strategie und Webentwicklung. Bei Bedarf unterstützen wir auch bei Branding und Offline-Materialien.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[
            'Conversion-optimierte Websites',
            'Markengerechte Logos und Icons',
            'Texte, Fotos und Videos für Web und Social Media',
            'Gedruckte Broschüren, Visitenkarten & mehr'
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm h-full flex items-center justify-center text-center border border-gray-100">
              <p className="text-base font-semibold text-foreground">{service}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm text-center border border-gray-100">
            <p className="text-lg text-foreground leading-relaxed">
              Wir nutzen KI-Tools wie <strong>ChatGPT</strong> und <strong>Midjourney</strong>, um unsere Arbeit zu erweitern – nicht zu ersetzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDigitalServices;
