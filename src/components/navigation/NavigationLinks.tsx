
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationLinksProps {
  layout: 'mobile' | 'desktop';
  onLinkClick?: () => void;
}

export const NavigationLinks = ({ layout, onLinkClick }: NavigationLinksProps) => {
  const { language } = useLanguage();
  
  // Navigation links for German language
  const germanLinks = [
    { title: 'Home', path: '/' },
    { title: 'Webdesign', path: '/webdesign' },
    { title: 'WordPress', path: '/wordpress-agentur' },
    { title: 'Content-Erstellung', path: '/content-erstellung' },
    { title: 'SEO', path: '/seo-agentur' },
    { title: 'Google Ads', path: '/google-ads' },
    { title: 'KI-Technologien', path: '/ki-technologien' },
    { title: 'Marketing', path: '/marketing' },
    { title: 'Über uns', path: '/ueber-ooliv' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  // Use German links by default
  const navigationLinks = germanLinks;

  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    } else {
      // Default behavior: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {navigationLinks.map((link, index) => (
        <div key={index}>
          <Link 
            to={link.path}
            className={cn(
              "block py-2 font-bold text-brand-heading hover:text-[#b1b497] transition-colors focus:outline-none focus:text-[#b1b497] focus-visible:ring-2 focus-visible:ring-[#b1b497]/50 rounded-md hover:scale-105 transition-transform font-sans",
              layout === 'desktop' ? "text-lg py-2" : "text-3xl py-3"
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
