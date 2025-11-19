import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WiesbadenTeamSection = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Strategic Leadership
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            16+ Jahre Digital Strategy Leadership – Uli Schönleber führt Ihre Transformation persönlich.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden bg-[#faf5eb] border-4 border-white shadow-xl flex-shrink-0">
              <img 
                src="/lovable-uploads/Uli.webp" 
                alt="Uli Schönleber - Digital Strategy Lead"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-brand-heading">Uli Schönleber</h3>
              <p className="text-lg text-brand-primary font-semibold mb-4">
                Digital Strategy Lead · AI-Driven Consultant · UX & Product Advisor
              </p>
              <p className="text-brand-text mb-6 leading-relaxed">
                16+ Jahre Track Record in Product & UX Strategy, AI Integration und Digital Transformation. Strategic Advisory mit messbaren Business Outcomes für B2B-Unternehmen im DACH-Raum.
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-brand-text">100+ erfolgreich abgeschlossene Transformationen</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-brand-text">+240% durchschnittliche Conversion Rate Steigerung</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-brand-text">Thought Leadership in Digital Strategy & AI Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/ueber-uns">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              Meet Your Digital Strategy Lead
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTeamSection;
