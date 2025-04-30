
import React from 'react';
import PageHero from '@/components/PageHero';

interface LegalHeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  secondaryCta?: {
    text: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  badge?: string;
}

const LegalHero = ({ title, subtitle, primaryCta, secondaryCta, badge }: LegalHeroProps) => {
  return (
    <PageHero
      badge={badge}
      title={title}
      subtitle={subtitle}
      primaryCta={{
        text: primaryCta.text,
        link: primaryCta.link,
        onClick: primaryCta.onClick
      }}
      secondaryCta={secondaryCta ? {
        text: secondaryCta.text,
        link: secondaryCta.link,
        onClick: secondaryCta.onClick
      } : undefined}
    />
  );
};

export default LegalHero;
