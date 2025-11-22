
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
    { title: 'Home', path: '/' },
    { title: 'Digitale Transformation & Strategie', path: '/digitale-transformation-strategie' },
    { title: 'UX & Konzeption', path: '/ux-konzeption' },
    { title: 'Webdesign & Entwicklung', path: '/webdesign-entwicklung' },
    { title: 'SEO & Performance', path: '/seo-performance' },
    { title: 'AI-Workflows', path: '/ai-workflows' },
    { title: 'Case Studies', path: '/referenzen' },
    { title: 'Über uns', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  // Navigation links for English language
  const englishLinks = [
    { title: 'Home', path: '/en' },
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
  
  return (
    <>
      {navigationLinks.map((link, index) => (
        <div key={index}>
          <Link 
            to={link.path}
            className={cn(
              "block font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0BC3C3]/50 rounded-md hover:scale-105 transition-transform font-sans",
              layout === 'desktop' 
                ? "text-lg py-3.5 leading-tight px-4" // Desktop: smaller text, generous padding
                : "text-3xl py-3", // Mobile: keep original sizing
              isActive(link.path) 
                ? "text-[#0BC3C3] font-extrabold" // Active state: #0BC3C3
                : "text-[#0D0D0D] hover:text-[#0BC3C3]" // Default state: dark text with #0BC3C3 hover
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
