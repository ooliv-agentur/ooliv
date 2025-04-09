
import React from 'react';
import PageHero from '@/components/PageHero';

interface LegalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const LegalHero = ({ badge, title, subtitle, primaryCta, secondaryCta }: LegalHeroProps) => {
  // Only pass CTA props to PageHero if they have content
  const primaryCtaProp = primaryCta?.text ? primaryCta : undefined;
  const secondaryCtaProp = secondaryCta?.text ? secondaryCta : undefined;
  
  return (
    <PageHero
      badge={badge}
      title={title}
      subtitle={subtitle}
      primaryCta={primaryCtaProp}
      secondaryCta={secondaryCtaProp}
    />
  );
};

export default LegalHero;
