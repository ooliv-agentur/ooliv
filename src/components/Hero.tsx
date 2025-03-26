
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  pageTag?: string;
}

const Hero: React.FC<HeroProps> = ({ pageTag }) => {
  const { language } = useLanguage();
  
  // Determine content based on language
  let badge = pageTag || (language === 'de' ? 'Startseite' : 'Startpage');
  let heading = language === 'de' 
    ? "Strategisch. Sichtbar. Skalierbar." 
    : "Strategic. Visible. Scalable.";
  let subheading = language === 'de'
    ? "Wir entwickeln Websites, die nicht nur gut aussehen, sondern auch messbare Ergebnisse liefern. B2B-optimierte Websites, die Ihre Geschäftsziele unterstützen."
    : "We build websites that don't just look good, but deliver measurable results. B2B-optimized websites that support your business goals.";
  let primaryCta = language === 'de' ? "Projekt starten" : "Start Your Project";
  let secondaryCta = language === 'de' ? "Unsere Arbeit ansehen" : "See Our Work";
  let primaryLink = language === 'de' ? "/de/kontakt" : "/contact";
  let secondaryLink = language === 'de' ? "/de/case-studies" : "/case-studies";
  
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-brand-backgroundAlt to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-brand-primary/10 rounded-full px-4 py-1.5 text-brand-primary font-medium text-sm mb-6">
            {badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-heading">
            {heading}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-brand-text">
            {subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to={primaryLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={secondaryLink}>
                {secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
