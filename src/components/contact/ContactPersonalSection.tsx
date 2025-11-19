
import React from 'react';

const ContactPersonalSection = () => {
  return (
    <section className="relative -mt-8 z-10 pb-24 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative h-full overflow-hidden bg-gradient-to-br from-brand-background to-brand-backgroundAlt">
              <img 
                src="/lovable-uploads/Uli.webp"
                alt="Uli, Gründer & CEO bei ooliv" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-block mb-3 px-3 py-1 bg-brand-primary/10 rounded-full w-fit">
                <span className="text-xs font-semibold text-brand-primary">Strategic Advisory</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                Strategische Beratung auf C-Level
              </h2>
              <p className="text-base md:text-lg text-brand-text mb-4">
                Bei ooliv arbeiten Sie direkt mit einem Senior Digital Strategy Lead mit 16+ Jahren Erfahrung in der Transformation digitaler Ökosysteme. Keine Junior-Berater, keine Zwischenstellen – strategische Führung von Anfang bis Ende.
              </p>
              <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-4">
                <div>
                  <p className="font-semibold text-brand-heading text-sm mb-1">Digital Strategy & Advisory</p>
                  <p className="text-sm text-brand-text">End-to-end Consulting für C-Level Stakeholder</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-heading text-sm mb-1">AI-Enabled Transformation</p>
                  <p className="text-sm text-brand-text">Strategische Integration von LLMs & Automation</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-heading text-sm mb-1">Product & UX Leadership</p>
                  <p className="text-sm text-brand-text">Multidisziplinäre Team-Führung bei komplexen Projekten</p>
                </div>
              </div>
              <p className="text-sm text-brand-text italic border-l-3 border-brand-primary pl-4">
                Sie arbeiten von Tag 1 mit einem erfahrenen strategischen Berater, der Ihre digitale Transformation führt – nicht mit wechselnden Projektmanagern oder Junior-Teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPersonalSection;
