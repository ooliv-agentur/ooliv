
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
  return (
    <PageHero
      badge={badge}
      title={title}
      subtitle={subtitle}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
    />
  );
};

export default LegalHero;
