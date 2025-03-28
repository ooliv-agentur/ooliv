
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MenuColumn from './MenuColumn';
import { Button } from '@/components/ui/button';

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainMenu = ({ isOpen, onClose }: MainMenuProps) => {
  const { language } = useLanguage();
  
  // Define menu columns based on the reference design
  const menuColumns = [
    {
      title: language === 'de' ? 'Was wir tun' : 'What we do',
      links: [
        { title: language === 'de' ? 'Webdesign' : 'Web Design', path: language === 'de' ? '/de/webdesign' : '/web-design' },
        { title: language === 'de' ? 'Webentwicklung' : 'Web Development', path: language === 'de' ? '/de/webentwicklung' : '/web-development' },
        { title: language === 'de' ? 'Content-Erstellung' : 'Content Creation', path: language === 'de' ? '/de/content-erstellung' : '/content-creation' },
        { title: language === 'de' ? 'SEO-Optimierung' : 'SEO Optimization', path: language === 'de' ? '/de/seo-optimierung' : '/seo-optimization' },
        { title: language === 'de' ? 'Google Ads' : 'Google Ads', path: language === 'de' ? '/de/google-ads' : '/google-ads' },
        { title: language === 'de' ? 'KI-Technologien' : 'AI Technologies', path: language === 'de' ? '/de/ki-technologien' : '/ai-technologies' },
      ]
    },
    {
      title: language === 'de' ? 'Über ooliv' : 'About ooliv',
      links: [
        { title: language === 'de' ? 'Über uns' : 'About us', path: language === 'de' ? '/de/ueber-ooliv' : '/about-ooliv' },
        { title: language === 'de' ? 'Case Studies' : 'Case Studies', path: language === 'de' ? '/de/case-studies' : '/case-studies' },
        { title: language === 'de' ? 'Kontakt' : 'Contact', path: language === 'de' ? '/de/kontakt' : '/contact' },
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#222730] overflow-y-auto overflow-x-hidden">
      <div className="container mx-auto px-6 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <Link to={language === 'de' ? '/de' : '/'} onClick={onClose}>
              <img 
                src="/lovable-uploads/be0cdb9b-07f1-49ef-aaf0-07a859efa382.png" 
                alt="ooliv" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to={language === 'de' ? '/de/kontakt' : '/contact'} 
              onClick={onClose}
              className="hidden md:inline-block text-white hover:text-blue-300 transition-colors px-6 py-3 border border-white/20 rounded-full text-sm font-medium"
            >
              {language === 'de' ? 'Kontakt' : 'Get in touch'}
            </Link>
            <button 
              onClick={onClose} 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={language === 'de' ? 'Menü schließen' : 'Close menu'}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {menuColumns.map((column, index) => (
            <MenuColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
              onLinkClick={onClose}
            />
          ))}

          <div className="hidden lg:block"> 
            <div className="bg-[#2C3240] rounded-lg p-6">
              <h3 className="text-white/80 text-sm font-medium mb-4">
                {language === 'de' ? 'Ressourcen' : 'Resources'}
              </h3>
              <div className="aspect-video mb-4 rounded-md overflow-hidden">
                <img 
                  src="/lovable-uploads/1d561f3f-1d16-49ed-a0f7-b91958842bbb.png" 
                  alt="Resource" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white text-lg font-medium mb-2">
                {language === 'de' ? 'Strategien für digitales Wachstum' : 'Digital growth strategies'}
              </h4>
              <Button 
                onClick={onClose}
                variant="outline"
                className="w-full mt-4 border-white/20 text-white hover:bg-white/10"
              >
                {language === 'de' ? 'Herunterladen' : 'Download'}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer - Mobile Contact */}
        <div className="mt-auto pt-8 border-t border-white/10 md:hidden">
          <Link 
            to={language === 'de' ? '/de/kontakt' : '/contact'} 
            onClick={onClose}
            className="block text-white text-center hover:text-blue-300 transition-colors py-4 border border-white/20 rounded-full font-medium"
          >
            {language === 'de' ? 'Kontakt aufnehmen' : 'Get in touch'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
