
import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H3, LargeParagraph } from '@/components/ui/typography';

const ContactServicesSectionDE = () => {
  return (
    <Section spacing="large" background="light">
      <Container size="narrow" className="text-center">
        <LargeParagraph className="max-w-4xl mx-auto mb-8" alignment="center" color="primary">
          Von der ersten Idee bis zum erfolgreichen GoLive begleiten wir Sie als verlässlicher Partner. Mit klarem Fokus auf digitale Lösungen, die funktionieren – individuell und messbar.
        </LargeParagraph>
        
        <div className="mb-8">
          <H3 className="mb-4" alignment="center">
            Unser Leistungsspektrum:
          </H3>
          <LargeParagraph className="max-w-4xl mx-auto" alignment="center" color="primary">
            <Link to="/digitale-transformation-strategie" className="text-[#32b2ab] hover:underline font-medium">Strategische Beratung</Link>, UX, <Link to="/webdesign-entwicklung" className="text-[#32b2ab] hover:underline font-medium">Webdesign</Link>, <Link to="/webdesign-entwicklung" className="text-[#32b2ab] hover:underline font-medium">Webentwicklung</Link>, <Link to="/seo-performance" className="text-[#32b2ab] hover:underline font-medium">Suchmaschinenoptimierung</Link>, Google Ads und <Link to="/ai-workflows" className="text-[#32b2ab] hover:underline font-medium">KI-Technologien</Link>.
          </LargeParagraph>
        </div>
        
        <LargeParagraph className="max-w-4xl mx-auto" alignment="center" color="primary">
          Wir setzen auf klare Kommunikation, klare Abläufe und messbare Ergebnisse – individuell auf Ihr Unternehmen zugeschnitten.
        </LargeParagraph>
      </Container>
    </Section>
  );
};

export default ContactServicesSectionDE;
