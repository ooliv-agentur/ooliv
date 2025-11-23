import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, Paragraph } from '@/components/ui/typography';

const AboutUsCTANew = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <Section spacing="large" background="light">
      <Container size="narrow">
        <div className="text-center">
          <H2 className="text-[#0A0A0A] mb-6" alignment="center">
            Lassen Sie uns reden — ohne Agentur-Geschwätz.
          </H2>
          <Paragraph className="text-lg text-[#555555] mb-8 max-w-2xl mx-auto" alignment="center">
            Sie brauchen Klarheit, Struktur und ein digitales System, das für Sie arbeitet? Dann wird&apos;s Zeit für ein erstes Gespräch.
          </Paragraph>
          
          <Button 
            variant="primary"
            size="lg"
            onClick={handleOpenLeadForm}
            className="group"
          >
            Unverbindlich anfragen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUsCTANew;
