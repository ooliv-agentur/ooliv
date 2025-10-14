
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
    { title: 'Strategie', path: '/strategie' },
    { title: 'Webdesign', path: '/webdesign' },
    { title: 'Webentwicklung', path: '/webentwicklung' },
    { title: 'Content-Erstellung', path: '/content-erstellung' },
    { title: 'Content Automation', path: '/automatisierte-content-marketing' },
    { title: 'SEO-Optimierung', path: '/seo-optimierung' },
    { title: 'Google Ads', path: '/google-ads' },
    { title: 'KI-Technologien', path: '/ki-technologien' },
    { title: 'Case Studies', path: '/referenzen' },
    { title: 'Über ooliv', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  // Navigation links for English language
  const englishLinks = [
    { title: 'Home', path: '/en' },
    { title: 'Web Design', path: '/en/webdesign' },
    { title: 'Web Development', path: '/en/webdevelopment' },
    { title: 'Content Creation', path: '/en/content-creation' },
    { title: 'SEO', path: '/en/seo' },
    { title: 'Google Ads', path: '/en/google-ads' },
    { title: 'AI Technologies', path: '/en/ai-technologies' },
    { title: 'Case Studies', path: '/en/case-studies' },
    { title: 'About ooliv', path: '/en/about-us' },
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
              "block font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md hover:scale-105 transition-transform font-sans",
              layout === 'desktop' 
                ? "text-2xl py-1.5 leading-tight" // Reduced padding from py-3 to py-1.5 and tighter line height for desktop
                : "text-3xl py-3", // Keep original mobile sizing
              isActive(link.path) 
                ? "text-black font-extrabold" // Active state: bold black
                : "text-gray-800 hover:text-black" // Default state: gray with black hover
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
