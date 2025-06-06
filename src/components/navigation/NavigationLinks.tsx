
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
    if (onLinkClick) {
      onLinkClick();
    } else {
      // Default behavior: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
              "block py-2 font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise/50 rounded-md hover:scale-105 transition-transform font-sans",
              layout === 'desktop' ? "text-lg py-2" : "text-3xl py-3",
              isActive(link.path) 
                ? "text-medico-turquoise" // Active state: highlighted in medico turquoise
                : "text-medico-darkGreen hover:text-medico-turquoise" // Default state: dark green with turquoise hover
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
