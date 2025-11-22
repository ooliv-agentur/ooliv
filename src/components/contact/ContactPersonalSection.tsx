
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
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                Uli – Ihr direkter Draht (ohne Umwege)
              </h2>
              <p className="text-base md:text-lg text-brand-text mb-6">
                Uli ist der Gründer von ooliv – und die Person, mit der Sie von Anfang an sprechen. Keine Junior-Berater, keine Zwischenstellen. Er begleitet jedes Projekt persönlich und sorgt dafür, dass Sie bekommen, was Sie brauchen – ohne Verkaufsmasche.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-5 py-3 italic bg-gray-50 rounded-r-lg">
                "Ich hasse selbst diese typischen Agentur-Verkaufsgespräche. Deshalb gibt's bei uns keine."
                <footer className="text-sm mt-2 font-medium">– Uli, Gründer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPersonalSection;
