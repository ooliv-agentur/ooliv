
import React from 'react';
import { User, MessageCircle, CheckCircle } from 'lucide-react';

const ContactPersonalSection = () => {
  return (
    <section className="relative -mt-8 z-10 pb-32 pt-16 bg-gradient-to-b from-medico-mint/30 to-white">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-20 h-20 top-20 left-10 opacity-20"></div>
        <div className="floating-circle delayed w-16 h-16 bottom-20 right-20 opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-medico-yellow/20 text-medico-darkGreen px-4 py-2 rounded-full text-sm font-medium mb-6">
              <User className="h-4 w-4" />
              Ihr persönlicher Ansprechpartner
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Uli — Ihr Ansprechpartner für<br />
              <span className="text-medico-turquoise">digitale Projekte</span>
            </h2>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto leading-relaxed">
              Direkte Kommunikation, klare Prozesse und individuelle Betreuung — so arbeiten wir bei ooliv.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-medico-mint/50">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-2 relative h-80 lg:h-full overflow-hidden bg-gradient-to-br from-medico-mint to-medico-turquoise/20">
                <img 
                  src="/lovable-uploads/Uli.jpg" 
                  alt="Uli, Gründer & CEO bei ooliv" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medico-darkGreen/20 to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-medico-turquoise rounded-full animate-pulse"></div>
                    <span className="text-medico-darkGreen font-medium text-sm">Gründer & CEO</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Main Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-medico-darkGreen mb-6 leading-tight">
                      Persönliche Betreuung von Anfang bis Ende
                    </h3>
                    <p className="text-base lg:text-lg text-medico-darkGreen/80 mb-6 leading-relaxed">
                      Uli ist der Gründer von ooliv – und die erste Person, mit der Sie sprechen. Er begleitet jede Anfrage persönlich, 
                      sorgt für klare Abläufe und entwickelt gemeinsam mit Ihnen eine Strategie, die wirklich zu Ihrem Unternehmen passt.
                    </p>
                    
                    {/* Key Benefits */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-medico-turquoise/20 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                        </div>
                        <span className="text-medico-darkGreen/80 text-sm">Direkter Draht zum Entscheider</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-medico-turquoise/20 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                        </div>
                        <span className="text-medico-darkGreen/80 text-sm">Klare Kommunikation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-medico-turquoise/20 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                        </div>
                        <span className="text-medico-darkGreen/80 text-sm">Individuelle Lösungen</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-medico-turquoise/20 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                        </div>
                        <span className="text-medico-darkGreen/80 text-sm">Transparente Prozesse</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <div className="bg-medico-mint/30 rounded-xl p-6 border-l-4 border-medico-turquoise">
                      <div className="flex items-start gap-4">
                        <MessageCircle className="h-6 w-6 text-medico-turquoise flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-medico-darkGreen font-medium text-lg mb-3 leading-relaxed italic">
                            "Kein Verkaufsdruck, keine Zwischenstellen – nur ein ehrliches Gespräch über Ihr Projekt."
                          </blockquote>
                          <footer className="text-medico-darkGreen/70 text-sm font-medium">
                            — Uli, Gründer & CEO ooliv
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-medico-mint/50">
            <p className="text-medico-darkGreen/70 text-sm mb-4">
              Bereit für Ihr nächstes digitales Projekt?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4961316367801" 
                className="inline-flex items-center gap-2 bg-medico-turquoise text-white px-6 py-3 rounded-full font-medium hover:bg-medico-turquoise/90 transition-colors"
              >
                <span>+49 (0) 6131 63 67 801</span>
              </a>
              <a 
                href="mailto:info@ooliv.de" 
                className="inline-flex items-center gap-2 bg-medico-yellow text-medico-darkGreen px-6 py-3 rounded-full font-medium hover:bg-medico-yellow/90 transition-colors"
              >
                <span>info@ooliv.de</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPersonalSection;
