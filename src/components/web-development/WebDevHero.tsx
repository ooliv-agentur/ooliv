
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <div className="relative">
      <PageHero
        badge={isGerman 
          ? "Webentwicklung" 
          : "Web Development"
        }
        title={isGerman 
          ? "WordPress Agentur Mainz für skalierbare Unternehmenslösungen" 
          : "Web Development That Drives Business Growth"
        }
        subtitle={isGerman 
          ? "Maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis Custom Code." 
          : "Scalable, secure, and search-optimized websites – from custom WordPress to pure code."
        }
        primaryCta={{
          text: isGerman ? "Projekt starten" : "Start Your Project",
          link: "#",
          onClick: handleStartProject
        }}
        secondaryCta={{
          text: isGerman ? "Fallstudien ansehen" : "View Case Studies",
          link: isGerman ? "/de/case-studies" : "/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDevHero;
