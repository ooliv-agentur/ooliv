
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const WiesbadenTeamTeaser = () => {
  return (
    <section className="py-20 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
            Unser Team: Kreativ & engagiert in Wiesbaden
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <div className="text-brand-text">
              <p className="mb-6">
                Hinter ooliv steht ein achtköpfiges Team aus Designern, Entwicklern und Marketing-Experten. Unter der Leitung von Uli Schönleber setzen wir Projekte schnell, professionell und zuverlässig um.
              </p>
              <p className="mb-8">
                Gemeinsam verfolgen wir das Ziel, unseren Kunden aus Wiesbaden und Umgebung außergewöhnliche Ergebnisse zu liefern.
              </p>
              <Link 
                to="/ueber-ooliv" 
                className="flex items-center font-medium text-brand-primary hover:text-brand-primaryHover transition-colors"
              >
                Team kennenlernen 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-md aspect-square">
                <img 
                  src="/lovable-uploads/Uli.jpg" 
                  alt="Uli Schönleber - Geschäftsführer ooliv" 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-medium text-white">Uli Schönleber</h3>
                  <p className="text-sm text-white/90">Geschäftsführer</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-md aspect-square">
                <img 
                  src="/lovable-uploads/Lisa.jpg" 
                  alt="Lisa Olejnik - Projektmanagerin ooliv" 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-medium text-white">Lisa Olejnik</h3>
                  <p className="text-sm text-white/90">Projektmanagerin</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTeamTeaser;
