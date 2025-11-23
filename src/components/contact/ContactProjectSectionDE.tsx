
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2 } from '@/components/ui/typography';

const ContactProjectSectionDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <Section spacing="large" background="white">
      <Container size="narrow" className="text-center">
        <Send className="h-12 w-12 mx-auto mb-6 text-[#32b2ab]" />
        <H2 className="mb-8" alignment="center">
          Projekt-Details über unser Formular teilen
        </H2>
        <Button 
          variant="primary"
          size="lg" 
          className="group"
          onClick={handleStartProject}
        >
          Projektanfrage stellen
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Container>
    </Section>
  );
};

export default ContactProjectSectionDE;
