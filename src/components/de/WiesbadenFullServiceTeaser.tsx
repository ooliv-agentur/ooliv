
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WiesbadenFullServiceTeaser = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
          Von der ersten Idee bis zum GoLive — alles aus einer Hand.
        </h2>
        
        <p className="text-lg md:text-xl text-medico-darkGreen/80 mb-8 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
          Ob <span className="text-medico-turquoise font-medium">Website-Relaunch</span>, <span className="text-medico-turquoise font-medium">Google Ads</span> oder <span className="text-medico-turquoise font-medium">Content-Erstellung</span>: Als Werbeagentur in Wiesbaden begleiten wir Sie von der Strategie bis zur Umsetzung. Unsere Projekte basieren auf klaren Prozessen, erprobten Methoden — und echtem Interesse an Ihrem Erfolg.
        </p>
        
        <p className="text-lg md:text-xl text-medico-darkGreen/80 mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
          Unser Angebot umfasst <span className="text-medico-turquoise font-medium">Strategie & UX</span>, <span className="text-medico-turquoise font-medium">Webdesign</span>, <span className="text-medico-turquoise font-medium">Webentwicklung</span>, <span className="text-medico-turquoise font-medium">Content-Erstellung</span>, <span className="text-medico-turquoise font-medium">SEO-Optimierung</span>, <span className="text-medico-turquoise font-medium">Google Ads</span> und <span className="text-medico-turquoise font-medium">KI-Technologien</span>.
        </p>
        
        <Button 
          variant="primary"
          size="lg" 
          className="group"
          onClick={handleStartProject}
        >
          Jetzt Kontakt aufnehmen
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default WiesbadenFullServiceTeaser;
