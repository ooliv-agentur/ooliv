
import React from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { 
  Card, 
  CardTitle
} from '@/components/ui/card';

const ContactInfoSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="bg-brand-primary text-white p-8">
              <CardTitle className="text-2xl font-bold mb-6">Kontaktdaten</CardTitle>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p>Mombacher Str. 25<br />55122 Mainz, Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p>06131 – 63 67 801</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">E-Mail</h3>
                    <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Bürozeiten</h3>
                    <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="italic">
                  Regionale Wurzeln. Globale Reichweite.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
