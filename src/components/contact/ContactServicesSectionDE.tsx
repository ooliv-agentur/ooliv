
import React from 'react';
import { Link } from 'react-router-dom';

const ContactServicesSectionDE = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed mb-4">
          Unser Leistungsportfolio umfasst{' '}
          <Link 
            to="/strategie" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            Strategie
          </Link>,{' '}
          <Link 
            to="/webdesign" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            Webdesign
          </Link>,{' '}
          <Link 
            to="/webentwicklung" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            Webentwicklung
          </Link>,{' '}
          <Link 
            to="/content-erstellung" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            Content-Erstellung
          </Link>,
        </p>
        <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed">
          <Link 
            to="/seo-optimierung" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            SEO-Optimierung
          </Link>,{' '}
          <Link 
            to="/google-ads" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            Google Ads
          </Link>{' '}
          und{' '}
          <Link 
            to="/ki-technologien" 
            className="text-medico-turquoise hover:text-medico-darkGreen underline hover:no-underline transition-colors"
          >
            KI-Technologien
          </Link>. Dabei setzen wir auf durchdachte Prozesse und messbare Ergebnisse — individuell auf Ihr Unternehmen abgestimmt.
        </p>
      </div>
    </section>
  );
};

export default ContactServicesSectionDE;
