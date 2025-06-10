
import React from 'react';
import { Users, MessageCircle, CheckCircle } from 'lucide-react';

const ContactPersonalSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - matching homepage style */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Direkte Ansprechpartner – persönlich & individuell
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto" style={{ lineHeight: '1.5' }}>
              Unser Gründerteam begleitet Sie persönlich von der ersten Idee bis zum erfolgreichen Launch. Keine Umwege, keine Zwischenstellen.
            </p>
          </div>

          {/* Main Content Grid - matching homepage layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium text-medico-darkGreen mb-6 leading-tight">
                  Kompetenz und Struktur für Ihren Erfolg
                </h3>
                <p className="text-lg text-medico-darkGreen/80 mb-8 leading-relaxed">
                  Unser Gründerteam begleitet jedes Projekt persönlich von der ersten Anfrage bis zur erfolgreichen Umsetzung. 
                  Sie erhalten klare Ansprechpartner, transparente Kommunikation und strukturierte Prozesse, die messbare 
                  Ergebnisse liefern.
                </p>
              </div>

              {/* Key Benefits - matching homepage icon style */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-medico-darkGreen/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </div>
                  <span className="text-medico-darkGreen/80 text-base">Direkter Zugang zu Entscheidern</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-medico-darkGreen/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </div>
                  <span className="text-medico-darkGreen/80 text-base">Transparente Kommunikation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-medico-darkGreen/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </div>
                  <span className="text-medico-darkGreen/80 text-base">Maßgeschneiderte Lösungen</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-medico-darkGreen/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </div>
                  <span className="text-medico-darkGreen/80 text-base">Strukturierte Prozesse</span>
                </div>
              </div>
            </div>
            
            {/* Visual Section - simplified to match homepage */}
            <div className="relative">
              <div className="aspect-square bg-medico-white/50 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/Uli.jpg" 
                  alt="ooliv Gründerteam" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quote Section - matching homepage yellow highlight style */}
          <div className="bg-medico-yellow/20 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-medico-turquoise flex-shrink-0 mt-1" />
              <div>
                <blockquote className="text-medico-darkGreen font-medium text-xl mb-3 leading-relaxed">
                  „Keine Umwege, keine Zwischenstellen – nur professionelle Beratung und messbare Ergebnisse für Ihr Unternehmen."
                </blockquote>
                <footer className="text-medico-darkGreen/70 text-base font-medium">
                  — ooliv Gründerteam
                </footer>
              </div>
            </div>
          </div>

          {/* CTA Section - matching homepage style */}
          <div className="text-center">
            <p className="text-medico-darkGreen/70 text-lg mb-6">
              Bereit für Ihr nächstes digitales Projekt?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4961316367801" 
                className="inline-flex items-center justify-center gap-2 bg-medico-turquoise text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-medico-turquoise/90 transition-colors"
              >
                +49 (0) 6131 63 67 801
              </a>
              <a 
                href="mailto:info@ooliv.de" 
                className="inline-flex items-center justify-center gap-2 bg-medico-yellow text-medico-darkGreen px-8 py-4 rounded-full font-medium text-lg hover:bg-medico-yellow/90 transition-colors"
              >
                info@ooliv.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPersonalSection;
