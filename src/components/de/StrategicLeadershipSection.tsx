import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StrategicLeadershipSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategic Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            16+ Jahre Digital Strategy Leadership – Uli Schönleber führt Ihre Transformation persönlich.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
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
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-brand-primary opacity-0">
                US
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Uli Schönleber</h3>
              <p className="text-lg text-primary font-semibold mb-4">
                Digital Strategy Lead · AI-Driven Consultant · UX & Product Advisor
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                16+ Jahre Track Record in Product & UX Strategy, AI Integration und Digital Transformation. Strategic Advisory mit messbaren Business Outcomes für B2B-Unternehmen im DACH-Raum – von Strategic Discovery über Implementation Leadership bis C-Level Advisory.
              </p>
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">100+ erfolgreich abgeschlossene Transformationen</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">+240% durchschnittliche Conversion Rate Steigerung</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Thought Leadership in Digital Strategy & AI Integration</span>
                </div>
              </div>
              <Link to="/ueber-uns">
                <Button size="lg">
                  Meet Your Digital Strategy Lead
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicLeadershipSection;
