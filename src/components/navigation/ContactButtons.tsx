
import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactButtonsProps {
  className?: string;
}

const ContactButtons = ({ className }: ContactButtonsProps) => {
  const { language } = useLanguage();
  
  const contactOptions = [
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/4961316367801" },
    { icon: Mail, label: language === 'de' ? "E-Mail" : "Email", href: "mailto:info@ooliv.de" },
    { icon: Phone, label: language === 'de' ? "Telefon" : "Phone", href: "tel:+4961316367801" }
  ];

  return (
    <div className={`grid grid-cols-3 gap-6 ${className}`}>
      {contactOptions.map((contact, index) => (
        <Button 
          key={index}
          variant="outline" 
          size="lg" 
          className="w-full py-6 min-h-[60px] border-gray-300 text-[#b1b497] bg-gray-50/50 hover:bg-[#b1b497]/10 hover:text-[#b1b497] transition-all duration-200 hover:border-[#b1b497]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 flex items-center justify-center"
          aria-label={contact.label}
          asChild
        >
          <a href={contact.href}>
            <contact.icon className="h-6 w-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default ContactButtons;
