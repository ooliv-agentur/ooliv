
import React from 'react';
import { FileText, LayoutList, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        
        {/* New layout: Three service blocks with visual hierarchy */}
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left: Text & Visual Content */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medico-turquoise/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-medico-turquoise" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-heading mb-3">
                    Text & Visual Content
                  </h3>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen.
                  </p>
                  <div className="space-y-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center: Strategy & Structure */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medico-turquoise/20 flex items-center justify-center flex-shrink-0">
                  <LayoutList className="h-6 w-6 text-medico-turquoise" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-heading mb-3">
                    Struktur & Storytelling
                  </h3>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Strategische Content-Planung und überzeugende Narratives für Ihre Zielgruppe.
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
                      <span className="text-brand-text">Conversion-Optimierung</span>
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

          {/* Right: Automated Content Distribution */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-medico-yellow/20 to-medico-turquoise/20 backdrop-blur-sm p-8 rounded-2xl border border-medico-yellow/30 shadow-lg h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medico-yellow/30 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-6 w-6 text-medico-darkGreen" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-heading mb-2">
                    Automatisierte Content-Verteilung
                  </h3>
                  <div className="bg-medico-yellow/20 px-2 py-1 rounded text-xs font-semibold text-medico-darkGreen mb-3 inline-block">
                    NEU: AI-Powered
                  </div>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Ihr Content-Team, das niemals schläft – automatische Erstellung und Verteilung.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Tägliche SEO-Artikel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Social Media Automation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Multi-Sprachen Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-medico-turquoise flex-shrink-0" />
                      <span className="text-brand-text">Automatische Backlinks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrative mention on homepage */}
        <div className="bg-gradient-to-r from-medico-yellow/10 to-medico-turquoise/10 p-6 rounded-xl mb-8">
          <h3 className="text-lg font-bold text-brand-heading mb-3 flex items-center">
            <Sparkles className="w-5 h-5 text-medico-turquoise mr-2" />
            NEU: Automatisierte Content-Marketing Lösung
          </h3>
          <p className="text-brand-text mb-4">
            Ihr Content-Team, das niemals schläft – AI-gestützte tägliche Content-Erstellung und automatische Verteilung auf alle Kanäle. 
            Perfekt für Unternehmen, die kontinuierlich frischen Content benötigen.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-medico-turquoise border-medico-turquoise hover:bg-medico-turquoise/10"
            asChild
          >
            <Link to="/automatisierte-content-marketing">
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
