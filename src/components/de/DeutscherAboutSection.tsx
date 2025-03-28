
import React from 'react';

const DeutscherAboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Strategie trifft Umsetzung – direkt in Mainz.
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Wir sind eine spezialisierte Digitalagentur mit Sitz in Mainz. Seit 2008 entwickeln wir Websites, die auf den Punkt bringen, was Ihr Unternehmen ausmacht – strategisch durchdacht, inhaltlich stark und technologisch messbar.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mt-12 p-6 bg-brand-background/50 rounded-lg border border-gray-100">
            <p className="text-brand-text text-center">
              Kommunikation, Aufgaben und Dateien laufen bei uns über Basecamp – DSGVO-konform, transparent und effizient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeutscherAboutSection;
