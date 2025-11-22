import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const UliSection = () => {
  return (
    <section className="py-24 bg-[#F4F7F7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
              Ihr Ansprechpartner: Uli Schönleber
            </h2>
            <p className="text-xl text-teal font-medium">
              Digital Strategy Lead seit 2008. 200+ Projekte. Klarheit statt Agentur-Theater.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] rounded-[20px] overflow-hidden bg-white border-2 border-teal">
              <img 
                src="/lovable-uploads/Uli.webp" 
                alt="Uli Schönleber"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-primary-text mb-6 font-normal leading-relaxed">
              Ich führe jedes Projekt persönlich — keine Junioren, keine Übergaben, keine Sales-Schleifen.
            </p>
            <p className="text-lg text-primary-text mb-6 font-normal leading-relaxed">
              Mein Fokus: präzise Analyse, ehrliche Empfehlungen und messbare Ergebnisse.
            </p>
            <p className="text-lg text-primary-text mb-8 font-normal leading-relaxed">
              Seit über 15 Jahren verbinde ich Strategie, UX und AI-gestützte Prozesse zu digitalen Systemen, die verkaufen.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-primary-text font-normal">15+ Jahre Erfahrung (Strategie, UX, AI-gestützte Workflows)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-primary-text font-normal">200+ Projekte für Mittelstand & Marktführer</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-primary-text font-normal">Direkte Zusammenarbeit auf Geschäftsführungsniveau</span>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group" asChild>
              <Link to="/ueber-uns">
                Lernen Sie Uli kennen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliSection;
