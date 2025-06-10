
import React from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-medico-turquoise">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Kontaktdaten
            </h2>
          </div>

          {/* Contact Info Grid */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="font-bold text-medico-darkGreen mb-2 text-lg">Adresse</h3>
                <p className="text-medico-darkGreen/80 leading-relaxed">
                  Mombacher Str. 25<br />
                  55122 Mainz, Deutschland
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="font-bold text-medico-darkGreen mb-2 text-lg">Telefon</h3>
                <a 
                  href="tel:+4961316367801" 
                  className="text-medico-darkGreen/80 hover:text-medico-turquoise transition-colors"
                >
                  06131 – 63 67 801
                </a>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="font-bold text-medico-darkGreen mb-2 text-lg">E-Mail</h3>
                <a 
                  href="mailto:info@ooliv.de" 
                  className="text-medico-darkGreen/80 hover:text-medico-turquoise transition-colors"
                >
                  info@ooliv.de
                </a>
              </div>
              
              {/* Office Hours */}
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="font-bold text-medico-darkGreen mb-2 text-lg">Bürozeiten</h3>
                <p className="text-medico-darkGreen/80">Mo-Fr: 9:00 - 17:00 Uhr</p>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="mt-12 pt-8 border-t border-medico-darkGreen/10 text-center">
              <p className="text-medico-darkGreen/80 text-lg italic">
                Regionale Wurzeln. Globale Reichweite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
