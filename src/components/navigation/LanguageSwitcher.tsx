
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact';
}

const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Map paths between languages
  const pathMappings: Record<string, string> = {
    // German to English
    '/': '/en',
    '/webdesign': '/en/webdesign',
    '/webentwicklung': '/en/webdevelopment',
    '/content-erstellung': '/en/content-creation',
    '/seo-optimierung': '/en/seo',
    '/google-ads': '/en/google-ads',
    '/ki-technologien': '/en/ai-technologies',
    '/case-studies': '/en/case-studies',
    '/ueber-ooliv': '/en/about-us',
    '/kontakt': '/en/contact',
    '/impressum': '/en/legal-notice',
    '/datenschutz': '/en/privacy-policy',
    '/danke': '/en/thank-you',
    
    // English to German
    '/en': '/',
    '/en/webdesign': '/webdesign',
    '/en/webdevelopment': '/webentwicklung',
    '/en/content-creation': '/content-erstellung',
    '/en/seo': '/seo-optimierung',
    '/en/google-ads': '/google-ads',
    '/en/ai-technologies': '/ki-technologien',
    '/en/case-studies': '/case-studies',
    '/en/about-us': '/ueber-ooliv',
    '/en/contact': '/kontakt',
    '/en/legal-notice': '/impressum',
    '/en/privacy-policy': '/datenschutz',
    '/en/thank-you': '/danke',
  };

  const toggleLanguage = () => {
    // Determine new language
    const newLanguage = language === 'de' ? 'en' : 'de';
    
    // First set the language context
    setLanguage(newLanguage);
    
    // Determine new path
    const currentPath = location.pathname;
    console.log('Current path:', currentPath);
    console.log('Current language:', language);
    console.log('New language:', newLanguage);
    
    const newPath = pathMappings[currentPath] || (newLanguage === 'de' ? '/' : '/en');
    console.log('Navigating to:', newPath);
    
    // Navigate to new path
    navigate(newPath);
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className={`flex items-center gap-1 font-medium text-medico-darkGreen hover:text-white transition-colors hover:bg-medico-turquoise border border-transparent hover:border-medico-turquoise/30 hover:shadow-sm ${
        variant === 'compact' ? 'px-2 py-1' : 'mr-20 md:mr-16'
      }`}
      aria-label={language === 'de' ? "Switch to English" : "Zu Deutsch wechseln"}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span>{language === 'de' ? 'EN' : 'DE'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
