
import React from 'react';
import { Globe } from 'lucide-react';

const AboutUsStory = () => {
  return (
    <section className="py-16 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Wo Leidenschaft auf Leistung trifft
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-12 w-12 flex items-center justify-center bg-medico-turquoise rounded-full">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8 text-medico-darkGreen leading-relaxed">
              Was mit einer mutigen Gelegenheit begann, wurde zu einer langfristigen Erfolgsgeschichte. Im Jahr 2008, als eine führende Agentur in Mainz ihre Türen schloss, fragten mehrere treue Kunden:
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100">
              <blockquote className="text-xl md:text-2xl font-bold text-medico-turquoise italic leading-tight">
                "Können Sie mit uns weitermachen?"
              </blockquote>
            </div>
            <p className="text-lg mb-8 text-medico-darkGreen leading-relaxed">
              Das war der Anfang von ooliv.
            </p>
            <p className="text-lg mb-6 text-medico-darkGreen leading-relaxed">
              Seitdem haben wir uns zu einer Remote-First-Agentur mit einem hochqualifizierten, überregional verteilten Team entwickelt – vereint durch eine Denkweise:
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-xl md:text-2xl font-bold text-medico-darkGreen leading-tight">
                Jede Website sollte echten Unternehmenswert schaffen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
