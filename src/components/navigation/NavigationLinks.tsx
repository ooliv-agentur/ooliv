
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavigationLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

const NavigationLinks = ({ onLinkClick, className }: NavigationLinksProps) => {
  const location = useLocation();

  // Only use German navigation links
  const navigationLinks = [
    { title: 'Home', path: '/' },
    { title: 'Webdesign', path: '/webdesign' },
    { title: 'Webentwicklung', path: '/webentwicklung' },
    { title: 'Content-Erstellung', path: '/content-erstellung' },
    { title: 'SEO-Optimierung', path: '/seo-optimierung' },
    { title: 'Google Ads', path: '/google-ads' },
    { title: 'KI-Technologien', path: '/ki-technologien' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Über ooliv', path: '/ueber-ooliv' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className={cn("w-full", className)}>
      {navigationLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        
        return (
          <div key={index} className="py-1">
            <Link 
              to={link.path}
              className={cn(
                "block py-2 px-3 rounded-md font-bold text-lg transition-colors focus:outline-none hover:scale-105 transition-transform font-sans",
                isActive 
                  ? "text-[#b1b497] bg-[#b1b497]/10" 
                  : "text-brand-heading hover:bg-[#b1b497]/10 hover:text-[#b1b497] focus:text-[#b1b497] focus-visible:ring-2 focus-visible:ring-[#b1b497]/50"
              )}
              onClick={onLinkClick}
            >
              {link.title}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationLinks;
