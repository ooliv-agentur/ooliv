import React from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzCaseStudies = () => {
  const caseStudies = [
    {
      title: "B2B SaaS-Unternehmen",
      industry: "Software",
      challenge: "Geringe Sichtbarkeit bei relevanten Zielgruppen",
      result: "Deutlich mehr organischer Traffic und qualifizierte Leads",
      metrics: [
        { icon: <TrendingUp className="h-5 w-5" />, label: "+180% Traffic" },
        { icon: <Users className="h-5 w-5" />, label: "+65% Leads" }
      ]
    },
    {
      title: "Industrieunternehmen",
      industry: "Industrie",
      challenge: "Veraltete Website ohne klare Struktur",
      result: "Moderner Auftritt mit strukturiertem Conversion-Funnel",
      metrics: [
        { icon: <Target className="h-5 w-5" />, label: "+210% Conversions" },
        { icon: <TrendingUp className="h-5 w-5" />, label: "4.2% Conv. Rate" }
      ]
    },
    {
      title: "Beratungsunternehmen",
      industry: "Consulting",
      challenge: "Fehlende digitale Strategie und Lead-Prozesse",
      result: "Klare Positionierung mit messbaren Ergebnissen",
      metrics: [
        { icon: <Users className="h-5 w-5" />, label: "+95% Anfragen" },
        { icon: <TrendingUp className="h-5 w-5" />, label: "3x ROI" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Erfolgsgeschichten aus Mainz und Rhein-Main
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              So helfen wir Unternehmen in Mainz und dem Rhein-Main-Gebiet, digital erfolgreich zu werden
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-8">
                <div className="text-accent-primary text-sm font-semibold mb-2">
                  {study.industry}
                </div>
                <h3 className="text-2xl font-bold text-medico-darkGreen mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  {study.title}
                </h3>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Herausforderung:</div>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Ergebnis:</div>
                  <p className="text-medico-darkGreen font-semibold">{study.result}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 bg-accent-primary/10 px-3 py-2 rounded-lg"
                    >
                      <span className="text-accent-primary">{metric.icon}</span>
                      <span className="text-sm font-semibold text-medico-darkGreen">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="mt-16 text-center">
            <Link 
              to="/referenzen"
              className="inline-flex items-center gap-2 bg-accent-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-medico-darkGreen transition-all duration-300 shadow-lg group"
            >
              Alle Referenzen ansehen
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzCaseStudies;
