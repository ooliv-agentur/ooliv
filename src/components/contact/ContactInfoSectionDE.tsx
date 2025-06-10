
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfoSectionDE = () => {
  return (
    <section className="py-24 bg-medico-mint">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
            <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Adresse</h3>
            <p className="text-medico-darkGreen">
              Mombacher Str. 25<br />
              55122 Mainz, Deutschland
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
            <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Telefon & WhatsApp</h3>
            <p className="text-medico-darkGreen mb-2">06131 – 63 67 801</p>
            <a 
              href="https://wa.me/+4917680167641" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-medico-turquoise hover:underline text-sm"
            >
              WhatsApp-Chat starten
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
            <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">E-Mail</h3>
            <a 
              href="mailto:info@ooliv.de"
              className="text-medico-darkGreen hover:text-medico-turquoise"
            >
              info@ooliv.de
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
            <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Bürozeiten</h3>
            <p className="text-medico-darkGreen">Mo-Fr: 9:00 – 17:00 Uhr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSectionDE;
