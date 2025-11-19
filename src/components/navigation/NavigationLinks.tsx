import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface NavigationLinksProps {
  layout: 'mobile' | 'desktop';
  onLinkClick?: () => void;
}

interface NavLink {
  title: string;
  path: string;
  subItems?: NavLink[];
}

export const NavigationLinks = ({ layout, onLinkClick }: NavigationLinksProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Navigation links for German language
  const germanLinks: NavLink[] = [
    { title: 'Home', path: '/' },
    { title: 'Digitale Transformation', path: '/strategie' },
    { 
      title: 'Leistungen', 
      path: '#',
      subItems: [
        { title: 'Digitale Strategie', path: '/strategie' },
        { title: 'Website Relaunch', path: '/website-relaunch' },
        { title: 'Webdesign', path: '/webdesign' },
        { title: 'Webentwicklung', path: '/webentwicklung' },
        { title: 'KI-Integration', path: '/ki-technologien' },
        { title: 'Content Automation', path: '/automatisierte-content-marketing' },
        { title: 'SEO-Optimierung', path: '/seo-optimierung' },
        { title: 'Google Ads', path: '/google-ads' },
      ]
    },
    { title: 'Referenzen', path: '/referenzen' },
    { title: 'Über Uli', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/kontakt' }
  ];

  // Navigation links for English language
  const englishLinks: NavLink[] = [
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
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  // Desktop layout with hover dropdown
  if (layout === 'desktop') {
    return (
      <>
        {navigationLinks.map((link, index) => (
          <div key={index} className="relative group">
            {link.subItems ? (
              <>
                <button
                  className={cn(
                    "flex items-center gap-1 font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md hover:scale-105 transition-transform font-sans",
                    "text-2xl py-1.5 leading-tight",
                    "text-medico-darkGreen hover:text-medico-turquoise"
                  )}
                  onMouseEnter={() => setOpenDropdown(link.title)}
                  onClick={() => toggleDropdown(link.title)}
                >
                  {link.title}
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                {/* Dropdown menu */}
                <div
                  className={cn(
                    "absolute left-0 top-full mt-2 min-w-[240px] bg-white rounded-lg shadow-lg border border-border z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                    openDropdown === link.title && "opacity-100 visible"
                  )}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-2">
                    {link.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={cn(
                          "block px-4 py-2.5 text-lg font-semibold transition-colors hover:bg-medico-turquoise/10",
                          isActive(subItem.path)
                            ? "text-medico-turquoise bg-medico-turquoise/5"
                            : "text-medico-darkGreen hover:text-medico-turquoise"
                        )}
                        onClick={handleClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link 
                to={link.path}
                className={cn(
                  "block font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md hover:scale-105 transition-transform font-sans",
                  "text-2xl py-1.5 leading-tight",
                  isActive(link.path) 
                    ? "text-medico-turquoise font-extrabold nav-link-active"
                    : "text-medico-darkGreen hover:text-medico-turquoise"
                )}
                onClick={handleClick}
              >
                {link.title}
              </Link>
            )}
          </div>
        ))}
      </>
    );
  }

  // Mobile layout with accordion
  return (
    <>
      {navigationLinks.map((link, index) => (
        <div key={index}>
          {link.subItems ? (
            <div>
              <button
                className={cn(
                  "w-full flex items-center justify-between font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md font-sans",
                  "text-3xl py-3",
                  "text-medico-darkGreen hover:text-medico-turquoise"
                )}
                onClick={() => toggleDropdown(link.title)}
              >
                {link.title}
                <ChevronDown 
                  className={cn(
                    "w-7 h-7 transition-transform",
                    openDropdown === link.title && "rotate-180"
                  )}
                />
              </button>
              
              {/* Accordion content */}
              {openDropdown === link.title && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className={cn(
                        "block font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md font-sans",
                        "text-2xl py-2",
                        isActive(subItem.path)
                          ? "text-medico-turquoise font-extrabold"
                          : "text-medico-darkGreen hover:text-medico-turquoise"
                      )}
                      onClick={handleClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link 
              to={link.path}
              className={cn(
                "block font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 rounded-md hover:scale-105 transition-transform font-sans",
                "text-3xl py-3",
                isActive(link.path) 
                  ? "text-medico-turquoise font-extrabold nav-link-active"
                  : "text-medico-darkGreen hover:text-medico-turquoise"
              )}
              onClick={handleClick}
            >
              {link.title}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};
