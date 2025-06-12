
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugSolution = () => {
  const handleActivateProtection = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section id="klickbetrug-solution" className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-left">
              <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
                Wir stoppen Klickbetrug – bevor er Schaden anrichtet
              </h2>
              
              <p className={`${getBodyClasses('large', 'primary', 'left')} mb-6`}>
                Unsere Lösung analysiert jede Anzeige in Echtzeit: Woher kommt der Klick? Wie verhält sich der Nutzer? Welche Muster deuten auf Betrug hin? Verdächtige Klicks werden automatisch blockiert – bevor sie Geld kosten.
              </p>

              <p className={`${getBodyClasses('base', 'secondary', 'left')} mb-8`}>
                Als zertifizierter <strong>Google Partner</strong> bieten wir Ihnen komplette Online-Marketing-Lösungen aus einer Hand: Vom professionellen <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads Management</Link> über strategische <Link to="/seo-optimierung" className="text-medico-turquoise hover:underline font-medium">SEO-Optimierung</Link> bis hin zum automatischen Klickbetrug-Schutz. Vertrauen Sie auf unsere Expertise für maximale Werbeeffizienz.
              </p>
              
              <Button 
                size="lg" 
                className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#FFD700', 
                  color: '#003347',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD700';
                }}
                onClick={handleActivateProtection}
              >
                Jetzt Schutz aktivieren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="lg:text-center">
              <div className="bg-medico-mint/20 rounded-2xl p-8 backdrop-blur-sm border border-medico-turquoise/20">
                <h3 className={`${getHeadingClasses('h3', 'primary', 'center')} mb-6`}>
                  Zertifizierter Google Partner
                </h3>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow mb-6">
                  <img 
                    src="/lovable-uploads/e3b55cd1-2d14-4763-ac56-c1f282c0c16f.png"
                    alt="Google Partner Badge"
                    className="w-40 h-auto mx-auto"
                  />
                </div>
                <p className={`${getBodyClasses('base', 'secondary', 'center')} mb-4`}>
                  Höchste Qualitätsstandards für Ihre Google Ads Performance
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    to="/google-ads"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-medico-turquoise hover:text-medico-darkGreen transition-colors"
                  >
                    Google Ads Management
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/seo-optimierung"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-medico-turquoise hover:text-medico-darkGreen transition-colors"
                  >
                    SEO-Optimierung
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugSolution;
