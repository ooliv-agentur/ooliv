
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  lightBackground?: boolean;
}

const CTA = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  secondaryCtaLink,
  lightBackground = true
}: CTAProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  const bgClass = lightBackground 
    ? "bg-medico-gradient" 
    : "bg-medico-darkGradient";
  
  const textColorClass = lightBackground 
    ? "text-medico-navy" 
    : "text-white";
    
  const subtitleColorClass = lightBackground 
    ? "text-medico-navyLight" 
    : "text-white/90";

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColorClass}`}>
            {title || (isGerman 
              ? "Bereit für eine Website, die Ihr Unternehmen voranbringt?" 
              : "Ready to Transform Your Digital Presence?"
            )}
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 ${subtitleColorClass} font-medium`}>
            {subtitle || (isGerman 
              ? "Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen." 
              : "Let's discuss how our team can help you achieve your business goals with a high-performance website."
            )}
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-medico-yellow text-medico-navy hover:bg-medico-yellowHover font-bold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={handleOpenLeadForm}
            >
              {primaryCta || (isGerman ? "Projekt starten" : "Start Your Project")}
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {secondaryCta && (
              <Button 
                variant="outline" 
                size="lg" 
                className={`${lightBackground 
                  ? "border-medico-mint text-medico-navy hover:bg-medico-mint hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-medico-navy"
                } font-bold px-10 py-5 text-lg transition-all duration-300`}
                asChild
              >
                <Link to={secondaryCtaLink || (isGerman ? "/de/case-studies" : "/case-studies")}>
                  {secondaryCta}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
