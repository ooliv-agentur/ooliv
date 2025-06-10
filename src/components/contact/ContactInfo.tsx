
import React from 'react';
import { MapPin, Clock, User } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Your Direct Contact to ooliv
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Personal consultation, fast response times, and transparent communication – that's what you can expect from us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-brand-background">
                <MapPin className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Our Office</h3>
            <p className="text-brand-text">
              Rheinstraße 4K<br />
              55116 Mainz<br />
              Germany
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-brand-background">
                <Clock className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Office Hours</h3>
            <p className="text-brand-text">
              Monday - Friday<br />
              9:00 AM - 6:00 PM<br />
              CET/CEST
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-brand-background">
                <User className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Direct Contact</h3>
            <p className="text-brand-text">
              You always speak directly<br />
              with the CEO –<br />
              no middlemen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
