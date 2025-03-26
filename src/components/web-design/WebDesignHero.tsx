
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface WebDesignHeroProps {
  pageTag?: string;
}

const WebDesignHero: React.FC<WebDesignHeroProps> = ({ pageTag }) => {
  const { language } = useLanguage();
  
  // English content
  let title = "Strategic Web Design for B2B Success";
  let subtitle = "We create websites that convert visitors into customers through strategic design, compelling content, and optimized user experience.";
  let primaryCta = "Start Your Web Project";
  let secondaryCta = "Book a Strategy Call";
  let tagContent = pageTag || "Web Design";
  
  // German content
  if (language === 'de') {
    title = "Strategisches Webdesign für B2B-Erfolg";
    subtitle = "Wir erstellen Websites, die Besucher durch strategisches Design, überzeugende Inhalte und optimierte Nutzererfahrung zu Kunden machen.";
    primaryCta = "Webprojekt starten";
    secondaryCta = "Strategiegespräch buchen";
    tagContent = pageTag || "Webdesign";
  }
  
  const primaryLink = language === 'de' ? '/de/kontakt' : '/contact';
  
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-brand-backgroundAlt to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-primary/10 rounded-full px-4 py-1.5 text-brand-primary font-medium text-sm mb-6">
            {tagContent}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-heading">
            {title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-text">
            {subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to={primaryLink}>
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={primaryLink}>
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

export default WebDesignHero;
