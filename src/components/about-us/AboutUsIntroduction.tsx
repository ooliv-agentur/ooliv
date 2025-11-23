
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Kein Agentur-Overhead. Keine Zwischenstellen.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Sie arbeiten bei ooliv direkt mit dem Gründer sowie einem spezialisierten Kernteam aus UX, Entwicklung, Content und AI-gestützten Prozessen. Keine Layer aus Sales, Junioren oder Zwischenpositionen — nur klare Kommunikation und schnelle Umsetzung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Direkte Zusammenarbeit mit dem CEO",
            "Senior-Strategie statt Junior-Ausführung",
            "Klarer Prozess statt Chaos",
            "Ehrliche Beratung ohne Upsells"
          ].map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-turquoise/5 transition-colors">
              <p className="text-text-primary font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
