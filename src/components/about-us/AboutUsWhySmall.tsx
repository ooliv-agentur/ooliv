
import React from 'react';

const AboutUsWhySmall = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Warum wir bewusst klein bleiben
          </h2>
          <div className="bg-medico-mint rounded-2xl p-6 shadow-sm mb-6 border border-gray-100">
            <p className="text-lg mb-6 text-medico-darkGreen leading-relaxed">
              Bei ooliv arbeitet jeder Kunde direkt mit dem Gründer und CEO zusammen. Im Hintergrund deckt unser kompaktes Team alle Bereiche von Strategie, Design, Content und Entwicklung ab.
            </p>
            <p className="text-lg mb-6 text-medico-darkGreen leading-relaxed">
              Diese Struktur bedeutet weniger Reibungsverluste, schnelleren Fortschritt und bessere Ergebnisse – geliefert von Menschen, die Ihre Website tatsächlich bauen.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <blockquote className="text-xl md:text-2xl font-bold text-medico-turquoise italic leading-tight">
                "Ein Ansprechpartner. Ein fokussiertes Team. Ein gemeinsames Ziel."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhySmall;
