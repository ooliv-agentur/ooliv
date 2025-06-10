
import React from 'react';
import { 
  MessageCircle,
  Send,
  Mail,
  Phone,
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

const ContactMethodsSection = () => {
  const handleOpenSidebarForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-heading mb-3">So erreichen Sie uns</h2>
            <p className="text-lg text-brand-text max-w-3xl mx-auto">
              Wählen Sie den für Sie angenehmsten Kommunikationsweg – wir sind auf allen Kanälen für Sie da.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
          
          <div className="mt-10 text-center">
            <div className="inline-block bg-gray-50 border border-gray-100 rounded-lg px-6 py-3 shadow-sm">
              <p className="text-brand-text font-medium">
                Keine Zwischenstellen. Keine Warteschleifen. Ihre Nachricht landet direkt im Team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsSection;
