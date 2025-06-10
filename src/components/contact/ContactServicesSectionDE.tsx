
import React from 'react';
import { Link } from 'react-router-dom';

const ContactServicesSectionDE = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
          Von der ersten Idee bis zum erfolgreichen GoLive begleiten wir Sie als verlässlicher Partner. Mit klarem Fokus auf digitale Lösungen, die funktionieren – individuell und messbar.
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-medico-darkGreen mb-4">
            Unser Leistungsspektrum:
          </h3>
          <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
            <Link to="/strategie" className="text-medico-turquoise hover:underline font-medium">Strategische Beratung</Link>, UX, <Link to="/webdesign" className="text-medico-turquoise hover:underline font-medium">Webdesign</Link>, <Link to="/webentwicklung" className="text-medico-turquoise hover:underline font-medium">Webentwicklung</Link>, <Link to="/seo-optimierung" className="text-medico-turquoise hover:underline font-medium">Suchmaschinenoptimierung</Link>, <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> und <Link to="/ki-technologien" className="text-medico-turquoise hover:underline font-medium">KI-Technologien</Link>.
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
          Wir setzen auf klare Kommunikation, durchdachte Prozesse und messbare Ergebnisse – individuell auf Ihr Unternehmen zugeschnitten.
        </p>
      </div>
    </section>
  );
};

export default ContactServicesSectionDE;
