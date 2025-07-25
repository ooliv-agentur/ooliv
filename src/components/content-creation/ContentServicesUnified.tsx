
import React from 'react';
import { FileText, LayoutList, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContentServicesUnified = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading and description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content, der wirkt — von Text bis Visuals
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv als Content Agentur Mainz entwickelt Content-Formate, die Ihre Marke stark machen und für SEO, Conversion und Wiedererkennung sorgen.
          </p>
        </div>
        
        {/* New layout: Side-by-side content blocks with visual hierarchy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left side: Text Content */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medico-turquoise/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-medico-turquoise" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-heading mb-3">
                    Text & Visual Content
                  </h3>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen und Vertrauen aufbauen.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">SEO-optimierte Texte</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Blog-Artikel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Bilder & Illustrationen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Videos & Animationen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Technische & B2B-Inhalte</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Konsistenter Markenstil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Strategy & Structure */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medico-turquoise/20 flex items-center justify-center flex-shrink-0">
                  <LayoutList className="h-6 w-6 text-medico-turquoise" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-heading mb-3">
                    Struktur & Storytelling
                  </h3>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Wir strukturieren Ihre Inhalte strategisch und entwickeln überzeugende Narratives, die Ihre Zielgruppe erreichen.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Content-Architektur</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Storytelling-Struktur</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Conversion-Funnel-Unterstützung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Zielgruppenanalyse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introductory text moved below the boxes */}
        <div className="text-center mt-12 mb-8">
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv als Content Agentur Mainz bietet maßgeschneiderte Lösungen für all diese Herausforderungen.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            onClick={handleStartProject}
            className="bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Content-Strategie entwickeln
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentServicesUnified;
