
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationLinksProps {
  layout: 'mobile' | 'desktop';
  onLinkClick?: () => void;
}

export const NavigationLinks = ({ layout, onLinkClick }: NavigationLinksProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Navigation links for German language
  const germanLinks = [
    { title: 'Digitale Transformation & Strategie', path: '/digitale-transformation-strategie' },
    { title: 'UX & Konzeption', path: '/ux-konzeption' },
    { title: 'Webdesign & Entwicklung', path: '/webdesign-entwicklung' },
    { title: 'SEO & Performance', path: '/seo-performance' },
    { title: 'AI-Workflows', path: '/ai-workflows' },
    { title: 'Referenzen', path: '/referenzen' },
    { title: 'Über uns', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  // Navigation links for English language
  const englishLinks = [
    { title: 'Digital Transformation & Strategy', path: '/en/digital-transformation-strategy' },
    { title: 'UX & Conception', path: '/en/ux-conception' },
    { title: 'Web Design & Development', path: '/en/webdesign-development' },
    { title: 'SEO & Performance', path: '/en/seo-performance' },
    { title: 'AI Workflows', path: '/en/ai-workflows' },
    { title: 'Case Studies', path: '/en/case-studies' },
    { title: 'About us', path: '/en/about-us' },
    { title: 'Contact', path: '/en/contact' }
  ];

  // Use appropriate links based on language
  const navigationLinks = language === 'de' ? germanLinks : englishLinks;

  const handleClick = () => {
    // Always scroll to top immediately when clicking any navigation link
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Call the provided onLinkClick callback if present
    if (onLinkClick) {
      onLinkClick();
    }
  };

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Determine if link is a primary service (first 5) or secondary (last 3)
  const isPrimaryService = (index: number) => index < 5;
  
  return (
    <>
      {navigationLinks.map((link, index) => (
        <div key={index}>
          <Link 
            to={link.path}
            className={cn(
              "block font-bold transition-colors duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32b2ab]/50 rounded-md font-sans relative",
              // Animated underline effect
              "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-[#32b2ab] after:origin-bottom-right after:transition-transform after:duration-[250ms] hover:after:scale-x-100 hover:after:origin-bottom-left",
              layout === 'desktop' 
                ? isPrimaryService(index)
                  ? "text-[46px] leading-[1.1] py-2" // Primary services: 46px
                  : "text-[38px] leading-[1.2] py-2" // Secondary links: 38px
                : isPrimaryService(index)
                  ? "text-[40px] leading-[1.1] py-3" // Mobile primary: 40px
                  : "text-[32px] leading-[1.2] py-3", // Mobile secondary: 32px
              isActive(link.path) 
                ? "text-[#32b2ab] font-extrabold" // Active state
                : "text-[#000000] hover:text-[#32b2ab]" // Default state
            )}
            onClick={handleClick}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </>
  );
};
