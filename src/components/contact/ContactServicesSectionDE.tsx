
import React from 'react';
import { Link } from 'react-router-dom';

const ContactServicesSectionDE = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
          Ob <Link to="/webdesign" className="text-medico-turquoise hover:underline font-medium">Website-Relaunch</Link>, <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> oder <Link to="/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>: Wir begleiten Sie von der Strategie bis zum GoLive. Unsere Projekte basieren auf klaren Prozessen, erprobten Tools — und auf echtem Interesse an Ihrem Erfolg.
        </p>
        <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
          Unser Leistungsspektrum umfasst <Link to="/strategie" className="text-medico-turquoise hover:underline font-medium">Strategie & UX</Link>, <Link to="/webdesign" className="text-medico-turquoise hover:underline font-medium">Webdesign</Link>, <Link to="/webentwicklung" className="text-medico-turquoise hover:underline font-medium">Webentwicklung</Link>, <Link to="/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>, <Link to="/seo-optimierung" className="text-medico-turquoise hover:underline font-medium">SEO-Optimierung</Link>, <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> und <Link to="/ki-technologien" className="text-medico-turquoise hover:underline font-medium">KI-Technologien</Link>. Dabei setzen wir auf durchdachte Prozesse und messbare Ergebnisse — individuell auf Ihr Unternehmen abgestimmt.
        </p>
      </div>
    </section>
  );
};

export default ContactServicesSectionDE;
