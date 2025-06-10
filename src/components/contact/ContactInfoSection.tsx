
import React from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  MessageCircle,
  CheckCircle
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
          {/* Contact Details Grid */}
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

          {/* Contact Options - Inquiry Form Button */}
          <div className="text-center mb-16">
            <Button 
              size="lg"
              className="bg-medico-yellow hover:bg-yellow-400 text-medico-darkGreen font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={handleOpenSidebarForm}
            >
              <Send className="h-5 w-5 mr-2" />
              Projektanfrage stellen
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust & Competence Section */}
          <div className="bg-medico-mint rounded-2xl p-8 mb-16">
            <p className="text-lg text-medico-darkGreen text-center leading-relaxed">
              Bei ooliv erhalten Sie direkte Kommunikation mit der Geschäftsführung – ohne Zwischenstellen und mit klaren Ansprechpartnern. 
              Wir stehen für transparente Prozesse, strategisches Denken und messbare Ergebnisse.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-medico-turquoise/50 transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-medico-turquoise h-6 w-6" />
                <h3 className="font-bold text-lg ml-3 text-medico-darkGreen">Strategischer Fokus</h3>
              </div>
              <p className="text-medico-darkGreen/80">Fokus auf Geschäftsergebnisse, nicht nur auf Design</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-medico-turquoise/50 transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-medico-turquoise h-6 w-6" />
                <h3 className="font-bold text-lg ml-3 text-medico-darkGreen">Persönliche Betreuung</h3>
              </div>
              <p className="text-medico-darkGreen/80">Direkter Zugang zur Geschäftsführung ohne Umwege</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-medico-turquoise/50 transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-medico-turquoise h-6 w-6" />
                <h3 className="font-bold text-lg ml-3 text-medico-darkGreen">Schnelle Umsetzung</h3>
              </div>
              <p className="text-medico-darkGreen/80">Schlanke Prozesse für effiziente Projektumsetzung</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-medico-turquoise/50 transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-medico-turquoise h-6 w-6" />
                <h3 className="font-bold text-lg ml-3 text-medico-darkGreen">Messbare Ergebnisse</h3>
              </div>
              <p className="text-medico-darkGreen/80">Transparente Kommunikation und nachvollziehbare Resultate</p>
            </div>
          </div>
          
          {/* Footer CTA */}
          <div className="text-center">
            <div className="bg-medico-yellow/20 rounded-2xl p-8">
              <p className="text-xl text-medico-darkGreen font-medium leading-relaxed">
                Über 100 erfolgreiche Projekte umgesetzt – starten Sie jetzt Ihr digitales Projekt mit ooliv.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
