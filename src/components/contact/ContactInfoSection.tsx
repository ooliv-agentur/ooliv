
import React from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfoSection = () => {
  const handleOpenSidebarForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/4961316367801', '_blank');
  };

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Text */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-3xl mx-auto leading-relaxed">
              Bei ooliv erhalten Sie individuelle Beratung und direkte Kommunikation mit unserem Gründerteam. 
              Kein Projektmanager dazwischen – nur maßgeschneiderte Lösungen, die funktionieren. 
              Wir freuen uns auf Ihre Nachricht!
            </p>
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
            
            {/* Phone & WhatsApp */}
            <div className="flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-medico-turquoise" />
              </div>
              <h3 className="font-bold text-medico-darkGreen mb-2 text-lg">Telefon & WhatsApp</h3>
              <a 
                href="tel:+4961316367801" 
                className="text-medico-darkGreen/80 hover:text-medico-turquoise transition-colors mb-3"
              >
                06131 – 63 67 801
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full transition-colors font-medium"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp-Chat starten
              </button>
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

          {/* Primary CTA Button */}
          <div className="text-center mb-12">
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
