
import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { LargeParagraph } from '@/components/ui/typography';

const ContactIntroductionDE = () => {
  return (
    <Section spacing="large" background="white">
      <Container size="narrow">
        <LargeParagraph alignment="center" color="primary">
          Sie brauchen keine Agentur mit 50 Mitarbeitern – Sie brauchen einen Partner, der Ihr Projekt versteht und umsetzt. Bei ooliv arbeiten Sie direkt mit dem Gründer. Ohne Verkaufsdruck, ohne Warteschleifen. Nur ein ehrliches Gespräch über das, was wirklich funktioniert.
        </LargeParagraph>
      </Container>
    </Section>
  );
};

export default ContactIntroductionDE;
