
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
          <div>
            <h3 className="font-medium mb-1">Adresse</h3>
            <p>Mombacher Str. 25<br />55122 Mainz, Deutschland</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
          <div>
            <h3 className="font-medium mb-1">Telefon</h3>
            <p>+49 6131 – 63 67 801</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
          <div>
            <h3 className="font-medium mb-1">E-Mail</h3>
            <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
          <div>
            <h3 className="font-medium mb-1">Bürozeiten</h3>
            <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
