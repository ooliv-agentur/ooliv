
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsIntroduction = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Mehr als eine Webagentur – Ihr strategischer Sparringspartner
          </h2>
          <p className="text-lg mb-12 text-medico-darkGreen max-w-4xl mx-auto leading-relaxed">
            Kreativ, technisch präzise und partnerschaftlich. Ohne Hierarchien, ohne Buzzwords – mit echtem Ergebnisfokus.
          </p>
          
          <div className="bg-medico-mint rounded-2xl p-6 shadow-sm mb-12 border border-gray-100">
            <ul className="space-y-4 text-left">
              {[
                'Gegründet 2008 von Uli Schönleber',
                'Standort Mainz, Kunden europaweit',
                'Inhabergeführtes Studio mit fokussiertem Expertenteam',
                'Kommunikation direkt mit dem Gründer – von Start bis Go-Live',
                'Klarer Projektablauf über Basecamp (Feedback, Aufgaben, Dateien an einem Ort)'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-10 w-10 flex items-center justify-center bg-medico-turquoise rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-medico-darkGreen text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            size="lg" 
            className="group font-bold py-3 px-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400"
            asChild
          >
            <Link to="/kontakt">
              Lassen Sie uns zusammenarbeiten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
