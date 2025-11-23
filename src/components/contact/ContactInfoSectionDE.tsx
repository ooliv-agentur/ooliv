
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H3, Paragraph } from '@/components/ui/typography';

const ContactInfoSectionDE = () => {
  return (
    <Section spacing="large" background="light">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-[#32b2ab]" />
            <H3 className="mb-2">Adresse</H3>
            <Paragraph color="secondary" className="text-sm">
              Mombacher Str. 25<br />
              55122 Mainz, Deutschland
            </Paragraph>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-[#32b2ab]" />
            <H3 className="mb-2">Telefon & WhatsApp</H3>
            <Paragraph color="secondary" className="text-sm mb-2">06131 – 63 67 801</Paragraph>
            <a 
              href="https://wa.me/+4917680167641" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#32b2ab] hover:underline text-sm"
            >
              WhatsApp-Chat starten
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-[#32b2ab]" />
            <H3 className="mb-2">E-Mail</H3>
            <a 
              href="mailto:info@ooliv.de"
              className="text-[#555555] hover:text-[#32b2ab] text-sm"
            >
              info@ooliv.de
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-[#32b2ab]" />
            <H3 className="mb-2">Bürozeiten</H3>
            <Paragraph color="secondary" className="text-sm">Mo-Fr: 9:00 – 17:00 Uhr</Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactInfoSectionDE;
