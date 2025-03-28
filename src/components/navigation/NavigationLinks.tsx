
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface NavigationLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

const NavigationLinks = ({ onLinkClick, className }: NavigationLinksProps) => {
  const { language } = useLanguage();
  const location = useLocation();

  const getNavigationLinks = () => {
    if (language === 'de') {
      return [
        { title: 'Home', path: '/de' },
        { title: 'Webdesign', path: '/de/webdesign' },
        { title: 'Webentwicklung', path: '/de/webentwicklung' },
        { title: 'Content-Erstellung', path: '/de/content-erstellung' },
        { title: 'SEO-Optimierung', path: '/de/seo-optimierung' },
        { title: 'Google Ads', path: '/de/google-ads' },
        { title: 'KI-Technologien', path: '/de/ki-technologien' },
        { title: 'Case Studies', path: '/de/case-studies' },
        { title: 'Über ooliv', path: '/de/ueber-ooliv' },
        { title: 'Kontakt', path: '/de/kontakt' }
      ];
    } else {
      return [
        { title: 'Home', path: '/' },
        { title: 'Web Design', path: '/web-design' },
        { title: 'Web Development', path: '/web-development' },
        { title: 'Content Creation', path: '/content-creation' },
        { title: 'SEO Optimization', path: '/seo-optimization' },
        { title: 'Google Ads', path: '/google-ads' },
        { title: 'AI Technologies', path: '/ai-technologies' },
        { title: 'Case Studies', path: '/case-studies' },
        { title: 'About ooliv', path: '/about-ooliv' },
        { title: 'Contact', path: '/contact' }
      ];
    }
  };

  const navigationLinks = getNavigationLinks();

  return (
    <nav className={cn("w-full", className)}>
      {navigationLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        
        return (
          <div key={index}>
            <Link 
              to={link.path}
              className={cn(
                "block py-2 font-bold transition-colors focus:outline-none rounded-md hover:scale-105 transition-transform font-sans",
                isActive 
                  ? "text-[#b1b497]" 
                  : "text-brand-heading hover:text-[#b1b497] focus:text-[#b1b497] focus-visible:ring-2 focus-visible:ring-[#b1b497]/50"
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
