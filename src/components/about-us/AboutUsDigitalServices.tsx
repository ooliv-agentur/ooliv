
import React from 'react';

const AboutUsDigitalServices = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Digital. Aber nicht nur.
          </h2>
          <p className="text-lg mb-12 text-medico-darkGreen leading-relaxed">
            Unsere Kernkompetenz ist digitale Strategie und Webentwicklung – aber unsere Arbeit hört nicht am Bildschirm auf.
            Wir unterstützen Kunden auch bei visuellem Branding, Offline-Materialien und Content in verschiedenen Formaten.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {[
            'Conversion-optimierte Websites',
            'Markengerechte Logos und Icons',
            'Texte, Fotos und Videos für Web und Social Media',
            'Gedruckte Broschüren, Visitenkarten & mehr'
          ].map((service, index) => (
            <div key={index} className="bg-medico-mint rounded-2xl p-6 shadow-sm h-full flex items-center justify-center text-center border border-gray-100">
              <p className="text-base font-semibold text-medico-darkGreen">{service}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-medico-mint rounded-2xl p-6 shadow-sm text-center border border-gray-100">
            <p className="text-lg text-medico-darkGreen leading-relaxed">
              Wir beherrschen KI-Tools wie <strong>ChatGPT</strong>, <strong>Midjourney</strong> und <strong>Sora</strong>, um unsere menschliche Kreativität zu erweitern – nicht zu ersetzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDigitalServices;
