
import React from 'react';

const FrankfurtWerbeagenturSEOText = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="pt-12 pb-16 font-satoshi" style={{ backgroundColor: '#0A1E2C' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed" style={{ color: '#FFFFFF' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#FFFFFF' }}>Werbeagentur Frankfurt – Klar. Strategisch. Messbar.</h2>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            ooliv ist Ihre Werbeagentur in Frankfurt für digitale Markenführung, durchdachtes Webdesign und wirkungsvolles Online-Marketing. Seit über 16 Jahren entwickeln wir ganzheitliche Strategien für Unternehmen in Frankfurt und der Region – kreativ, technisch präzise und datenbasiert. Relaunch, neue Website oder Performance-Marketing: Wir denken Projekte immer ganzheitlich und setzen genau dort an, wo Ihre Marke sichtbar wird und Wirkung entfaltet.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Starten Sie Ihr Projekt noch heute
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default FrankfurtWerbeagenturSEOText;
