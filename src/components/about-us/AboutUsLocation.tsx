
import React from 'react';

const AboutUsLocation = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load headquarters image:', e);
  };

  const handleImageLoad = () => {
    console.log('Headquarters image loaded successfully');
  };

  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
            Zuhause in Mainz. Aktiv in ganz Deutschland und im DACH-Raum.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unser Team arbeitet von Mainz aus – mit Kunden in ganz Deutschland, der Schweiz und Mallorca. Persönliche Betreuung, kurze Reaktionszeiten, verlässliche Ansprechpartner.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-4 shadow-sm max-w-5xl mx-auto border border-gray-100">
          <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden bg-gray-100">
            <img
              src="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
              alt="ooliv Bürogebäude in Mainz mit moderner Glasarchitektur"
              className="w-full h-full object-cover transition-opacity duration-300"
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLocation;
