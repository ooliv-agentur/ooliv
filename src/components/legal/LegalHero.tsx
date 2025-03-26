
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CtaLink {
  text: string;
  link: string;
}

interface LegalHeroProps {
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  badge?: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge
}) => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-brand-backgroundAlt to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          {badge && (
            <div className="inline-block bg-brand-primary/10 rounded-full px-4 py-1.5 text-brand-primary font-medium text-sm mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-heading">
            {title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-brand-text">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to={primaryCta.link}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={secondaryCta.link}>
                {secondaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
