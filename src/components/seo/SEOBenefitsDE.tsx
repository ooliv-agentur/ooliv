
import React from 'react';
import { BarChart2, Clock, FileText, ShieldAlert } from 'lucide-react';
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

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: '#EAF8F4' }}>
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Sie bekommen: Qualifizierte Anfragen, nicht nur Traffic</h3>
            <p className="text-brand-text mb-4">
              Ihre Website zieht die richtigen Besucher an – Menschen, die tatsächlich kaufen wollen. Durch Suchintentions-Optimierung und conversion-fokussierte Inhalte.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: '#EAF8F4' }}>
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Sie bekommen: Transparente Timelines</h3>
            <p className="text-brand-text mb-4">
              Quick Wins nach 1-2 Monaten, erste Rankings nach 3 Monaten, stabiler ROI nach 6-12 Monaten. Ehrlich und planbar.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: '#EAF8F4' }}>
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Sie bekommen: Saubere Inhaltsstruktur</h3>
            <p className="text-brand-text mb-4">
              Ihre Seiten werden logisch aufgebaut, nutzerfreundlich strukturiert und für Suchmaschinen optimiert – keine keyword-stuffing, sondern echte Mehrwerte.
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: '#EAF8F4' }}>
            <div className="mb-4 text-brand-primary">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Sie bekommen: Technische Perfektion</h3>
            <p className="text-brand-text mb-4">
              Schnelle Ladezeiten, saubere Indexierung, optimale Core Web Vitals – damit Google Ihre Website liebt (und Ihre Besucher auch).
            </p>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default SEOBenefitsDE;
