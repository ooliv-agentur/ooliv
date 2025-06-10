
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
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContactCardProps {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'amber' | 'purple';
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  color,
  title,
  description,
  buttonText,
  onClick,
  href
}) => {
  const colorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    amber: 'bg-amber-50',
    purple: 'bg-purple-50'
  };

  const ButtonElement = () => (
    <Button 
      variant="outline" 
      className="w-full justify-between group"
      onClick={onClick}
      asChild={Boolean(href)}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <>
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md border border-gray-100 hover:border-brand-primary/50 flex flex-col">
      <CardHeader className="pb-2">
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-2", colorClasses[color])}>
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3 flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <ButtonElement />
      </CardFooter>
    </Card>
  );
};

const ContactInfoSection = () => {
  const handleOpenSidebarForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="relative py-16 md:py-24 bg-medico-mint overflow-hidden">
      {/* Floating circles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
        <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
        <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
        <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
        <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
        <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
      </div>

      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
                Kontaktieren Sie uns direkt
              </h2>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

              {/* Contact Methods */}
              <div className="pt-8 border-t border-medico-darkGreen/10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-medico-darkGreen mb-3">So erreichen Sie uns</h3>
                  <p className="text-lg text-medico-darkGreen/80 max-w-3xl mx-auto">
                    Wählen Sie den für Sie angenehmsten Kommunikationsweg – wir sind auf allen Kanälen für Sie da.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  <ContactCard 
                    icon={<MessageCircle className="h-6 w-6 text-gray-600" />} 
                    color="blue"
                    title="WhatsApp"
                    description="Direkter WhatsApp-Chat"
                    buttonText="WhatsApp öffnen"
                    href="https://wa.me/+4917680167641"
                  />
                  
                  <ContactCard 
                    icon={<Send className="h-6 w-6 text-gray-600" />} 
                    color="green"
                    title="Anfrage senden"
                    description="Projekt-Details über unser Formular teilen"
                    buttonText="Formular öffnen"
                    onClick={handleOpenSidebarForm}
                  />
                  
                  <ContactCard 
                    icon={<Mail className="h-6 w-6 text-gray-600" />} 
                    color="amber"
                    title="E-Mail schreiben"
                    description="Direkt an unser Postfach schreiben"
                    buttonText="Mail verfassen"
                    href="mailto:info@ooliv.de"
                  />
                  
                  <ContactCard 
                    icon={<Phone className="h-6 w-6 text-gray-600" />} 
                    color="purple"
                    title="Anrufen"
                    description="Direktes Gespräch mit unserem Team"
                    buttonText="06131 - 63 67 801"
                    href="tel:+4961316367801"
                  />
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-medico-mint/50 border border-medico-turquoise/20 rounded-lg px-6 py-3 shadow-sm">
                    <p className="text-medico-darkGreen font-medium">
                      Keine Zwischenstellen. Keine Warteschleifen. Ihre Nachricht landet direkt im Team.
                    </p>
                  </div>
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
      </div>
    </section>
  );
};

export default ContactInfoSection;
