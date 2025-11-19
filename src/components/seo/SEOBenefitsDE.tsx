
import React from 'react';
import { BarChart2, Clock, FileText } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const SEOBenefitsDE = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">Was Sie von uns bekommen (statt leerer Versprechen)</h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              SEO ist kein Sprint. Aber mit der richtigen Strategie sehen Sie erste Verbesserungen schon nach 3 Monaten – und langfristig stabile Rankings.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-brand-accent">
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Qualifizierte Anfragen statt nur Traffic</h3>
            <p className="text-brand-text mb-4">
              Die richtigen Besucher zur richtigen Zeit.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-brand-accent">
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Messbare Ergebnisse in 3-6 Monaten</h3>
            <p className="text-brand-text mb-4">
              Strukturiert aufgebaut, kontinuierlich verbessert.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow bg-brand-accent">
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technisch sauber & zukunftssicher</h3>
            <p className="text-brand-text mb-4">
              Solide Basis für nachhaltiges Wachstum.
            </p>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default SEOBenefitsDE;
