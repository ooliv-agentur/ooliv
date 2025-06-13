
import React from 'react';

const AboutUsLocation = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Hauptsitz in Mainz. Aktiv im DACH-Raum und darüber hinaus.
          </h2>
          <p className="text-lg text-medico-darkGreen leading-relaxed">
            Während unser Hauptsitz in Mainz steht, arbeiten wir mit Kunden in Deutschland, der Schweiz und Mallorca.
            Digital-first, standortflexibel – und immer responsiv.
          </p>
        </div>
        <div className="bg-medico-mint rounded-2xl p-4 shadow-sm max-w-5xl mx-auto border border-gray-100">
          {/* Optimized image with explicit dimensions to prevent layout shift */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png" 
              alt="Ooliv Bürogebäude in Mainz mit moderner Glasarchitektur" 
              width="1200"
              height="400"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: '3/1' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLocation;
