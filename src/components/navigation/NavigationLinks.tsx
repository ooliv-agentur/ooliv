
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

interface NavigationLinksProps {
  layout: 'mobile' | 'desktop';
  onLinkClick?: () => void;
}

export const NavigationLinks = ({ layout, onLinkClick }: NavigationLinksProps) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  
  // Navigation links for German language
  const germanLinks = [
    { title: 'Home', path: '/' },
    { title: t('menu.webdesign'), path: '/webdesign' },
    { title: t('menu.webdevelopment'), path: '/webentwicklung' },
    { title: t('menu.contentCreation'), path: '/content-erstellung' },
    { title: t('menu.seo'), path: '/seo-optimierung' },
    { title: t('menu.googleAds'), path: '/google-ads' },
    { title: t('menu.aiTechnologies'), path: '/ki-technologien' },
    { title: t('menu.caseStudies'), path: '/case-studies' },
    { title: t('menu.aboutUs'), path: '/ueber-ooliv' },
    { title: t('menu.contact'), path: '/kontakt' }
  ];

  // Navigation links for English language
  const englishLinks = [
    { title: 'Home', path: '/en' },
    { title: t('menu.webdesign'), path: '/en/web-design' },
    { title: t('menu.webdevelopment'), path: '/en/web-development' },
    { title: t('menu.contentCreation'), path: '/en/content-creation' },
    { title: t('menu.seo'), path: '/en/seo-optimization' },
    { title: t('menu.googleAds'), path: '/en/google-ads' },
    { title: t('menu.aiTechnologies'), path: '/en/ai-technologies' },
    { title: t('menu.caseStudies'), path: '/en/case-studies' },
    { title: t('menu.aboutUs'), path: '/en/about-ooliv' },
    { title: t('menu.contact'), path: '/en/contact' }
  ];

  // Use German or English links based on current language
  const navigationLinks = language === 'de' ? germanLinks : englishLinks;

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
              layout === 'desktop' ? "text-lg py-2" : "text-3xl py-3",
              location.pathname === link.path && "text-[#b1b497]" // Highlight active link
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
