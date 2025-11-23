
import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { LargeParagraph } from '@/components/ui/typography';

const ContactIntroductionDE = () => {
  return (
    <Section spacing="large" background="white">
      <Container size="narrow">
        <LargeParagraph alignment="center" color="primary">
          Sie benötigen keinen großen Agenturapparat — sondern jemanden, der strategisch denkt und klar führt. Bei ooliv arbeiten Sie direkt mit Uli Schönleber. Ohne Sales-Layer, ohne Wartezeiten, ohne Umwege.
        </LargeParagraph>
      </Container>
    </Section>
  );
};

export default ContactIntroductionDE;
