
import React from 'react';

const ContactMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Besuchen Sie uns</h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto">
            Wir freuen uns über Ihren Besuch in unserem Büro in Mainz.
          </p>
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="ooliv Standort in Mainz"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.018386856617!2d8.247095115717766!3d49.99997297941667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd96f73bdb8a93%3A0x4cfd3447cd63a483!2sMombacher%20Str.%2025%2C%2055122%20Mainz%2C%20Germany!5e0!3m2!1sen!2sus!4v1586438353054!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
