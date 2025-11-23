import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const HybridApproach = () => {
  const serviceLinks = [
    { label: "Digitale Transformation", url: "/digitale-transformation-strategie" },
    { label: "UX-Konzeption", url: "/ux-konzeption" },
    { label: "Webdesign & Entwicklung", url: "/webdesign-entwicklung" },
    { label: "SEO & Performance", url: "/seo-performance" },
    { label: "AI-Workflows", url: "/ai-workflows" },
    { label: "Referenzen", url: "/referenzen" },
    { label: "Kontakt", url: "/kontakt" }
  ];

  return (
    <section className={getSectionClasses('large', 'mint')}>
      <div className={getContainerClasses('default')}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 text-center">
            Unser hybrider Ansatz: Strategie + UX + Entwicklung + AI
          </h2>
          
          <p className="text-lg text-brand-text mb-8 leading-relaxed text-center">
            Wir arbeiten nicht sequentiell, sondern parallel. Strategie, UX, Design, Content, Entwicklung und AI-Workflows greifen ineinander und eliminieren typische Agentur-Silos. Das Ergebnis: Schnellere Entscheidungen, bessere Ergebnisse und ganzheitliche digitale Lösungen.
          </p>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold text-brand-heading mb-4">
              Unsere Leistungen im Überblick
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-turquoise/10 transition-colors group"
                >
                  <span className="text-brand-text font-medium group-hover:text-turquoise">
                    {link.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-turquoise opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridApproach;
