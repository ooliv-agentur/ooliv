
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from "react-router-dom";

interface CTAProps {
  lightBackground?: boolean;
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}

const CTA = ({ 
  lightBackground = false, 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  secondaryCtaLink
}: CTAProps) => {
  const { language } = useLanguage();
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  const translations = {
    en: {
      title: title || "Ready to transform your digital presence?",
      subtitle: subtitle || "Let's discuss how our team can help your business achieve its online goals.",
      primaryCta: primaryCta || "Start Your Website Project",
      secondaryCta: secondaryCta || "View Our Work"
    },
    de: {
      title: title || "Bereit für eine Website, die Ihr Unternehmen voranbringt?",
      subtitle: subtitle || "Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen.",
      primaryCta: primaryCta || "Projekt starten",
      secondaryCta: secondaryCta || "Unsere Arbeiten ansehen"
    }
  };

  const t = language === 'de' ? translations.de : translations.en;
  const defaultSecondaryLink = language === 'de' ? '/case-studies' : '/en/case-studies';

  return (
    <section className={`py-20 ${lightBackground ? 'bg-gradient-to-br from-brand-mint-50 to-white' : 'bg-gradient-to-br from-brand-mint-100 to-brand-mint-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-mint border border-brand-mint-200">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-brand-text mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-brand-mint-500 text-white hover:bg-brand-mint-600 shadow-mint hover:shadow-mintHover transition-all duration-300" 
              onClick={handleOpenLeadForm}
            >
              {t.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {secondaryCta && (
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-mint-400 text-brand-mint-600 hover:bg-brand-mint-500 hover:text-white hover:border-brand-mint-500 transition-all duration-300"
                asChild
              >
                <Link to={secondaryCtaLink || defaultSecondaryLink}>
                  {t.secondaryCta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
