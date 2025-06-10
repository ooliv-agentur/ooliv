
import React from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfoSection = () => {
  const handleOpenSidebarForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Kontaktieren Sie uns direkt
            </h2>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Contact Methods - Open Layout */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-medico-darkGreen mb-8">So erreichen Sie uns</h3>
            <p className="text-lg text-medico-darkGreen/80 max-w-3xl mx-auto mb-12">
              Wählen Sie den für Sie angenehmsten Kommunikationsweg – wir sind auf allen Kanälen für Sie da.
            </p>
            
            {/* Contact Methods - Simple Layout */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-12">
              {/* Phone */}
              <a 
                href="tel:+4961316367801"
                className="flex flex-col items-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-medico-turquoise/20 transition-colors">
                  <Phone className="h-8 w-8 text-medico-turquoise" />
                </div>
                <span className="font-semibold text-medico-darkGreen group-hover:text-medico-turquoise transition-colors">
                  06131 – 63 67 801
                </span>
                <span className="text-sm text-medico-darkGreen/70">Anrufen</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/+4917680167641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <span className="font-semibold text-medico-darkGreen group-hover:text-green-600 transition-colors">
                  WhatsApp Chat
                </span>
                <span className="text-sm text-medico-darkGreen/70">Nachricht senden</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@ooliv.de"
                className="flex flex-col items-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
                  <Mail className="h-8 w-8 text-amber-600" />
                </div>
                <span className="font-semibold text-medico-darkGreen group-hover:text-amber-600 transition-colors">
                  info@ooliv.de
                </span>
                <span className="text-sm text-medico-darkGreen/70">E-Mail senden</span>
              </a>
            </div>

            {/* Primary CTA Button */}
            <div className="mb-12">
              <Button 
                size="lg"
                className="bg-medico-yellow hover:bg-yellow-400 text-medico-darkGreen font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={handleOpenSidebarForm}
              >
                <Send className="h-5 w-5 mr-2" />
                Anfrage senden
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-medico-darkGreen/70 mt-3">
                Projekt-Details über unser Formular teilen
              </p>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-50 border border-medico-turquoise/20 rounded-lg px-6 py-3 shadow-sm">
              <p className="text-medico-darkGreen font-medium">
                Keine Zwischenstellen. Keine Warteschleifen. Ihre Nachricht landet direkt im Team.
              </p>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-center">
            <p className="text-medico-darkGreen/80 text-lg italic">
              Regionale Wurzeln. Globale Reichweite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
