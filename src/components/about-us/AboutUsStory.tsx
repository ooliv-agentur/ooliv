
import React from 'react';
import { Globe } from 'lucide-react';
import { H2, Paragraph } from '@/components/ui/typography';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

const AboutUsStory = () => {
  return (
    <Section spacing="medium" background="light" className="font-satoshi">
      <Container size="narrow">
        <H2 alignment="center" className="mb-6 text-[#0A0A0A]">
          Seit 2008 aus Mainz. Heute in DACH aktiv.
        </H2>
        <div className="flex justify-center mb-8">
          <div className="h-12 w-12 flex items-center justify-center bg-[#0BC3C3] rounded-full">
            <Globe className="h-6 w-6 text-white" />
          </div>
        </div>
        <Paragraph className="leading-relaxed text-[#555555]" alignment="center">
          Was als Notlösung für mehrere Unternehmen begann, wurde zu einer langfristigen Erfolgsgeschichte: Als eine Mainzer Agentur 2008 schloss, baten ehemalige Kunden den Gründer Uli Schönleber weiterzumachen.
          Heute ist ooliv eine strategische Digitalagentur mit klarer Struktur, seniorseitiger Führung und einem hochspezialisierten Remote-Team in Deutschland, Mallorca und der Schweiz.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default AboutUsStory;
