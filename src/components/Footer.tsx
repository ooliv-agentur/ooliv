
import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  
  const pathMap: Record<string, string> = {
    'about-ooliv': language === 'de' ? 'ueber-ooliv' : 'about-us',
    'web-design': language === 'de' ? 'webdesign' : 'webdesign',
    'web-development': language === 'de' ? 'webentwicklung' : 'webdevelopment',
    'content-creation': language === 'de' ? 'content-erstellung' : 'content-creation',
    'seo-optimization': language === 'de' ? 'seo-optimierung' : 'seo',
    'google-ads': 'google-ads',
    'ai-technologies': language === 'de' ? 'ki-technologien' : 'ai-technologies',
    'case-studies': 'case-studies',
    'contact': language === 'de' ? 'kontakt' : 'contact',
    'privacy-policy': language === 'de' ? 'datenschutz' : 'privacy-policy',
    'legal-notice': language === 'de' ? 'impressum' : 'legal-notice',
  };
  
  const langPrefix = language === 'de' ? '' : '/en';
  
  const getUrl = (path: string) => {
    if (path === '/') return language === 'de' ? '/' : '/en';
    
    const basePath = path.replace(/^\//,'');
    const translatedPath = pathMap[basePath] || basePath;
    return `${langPrefix}/${translatedPath}`;
  };

  // Phone number with international format for English users
  const phoneNumber = language === 'de' ? '06131 – 63 67 801' : '+49 6131 – 63 67 801';
  
  return (
    <footer className="bg-primary-darkgreen text-secondary-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans text-secondary-white">{t('footer.about')}</h3>
            <p className="text-secondary-white text-sm font-sans">
              {language === 'de' 
                ? 'Wir entwickeln Websites, die Ihr Geschäft digital voranbringen. KI-gestützt, strategisch durchdacht und individuell umgesetzt.'
                : t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-secondary-white">{t('footer.services')}</h3>
            <ul className="space-y-2 text-secondary-white text-sm font-sans">
              <li><Link to={getUrl('web-design')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.webDesign')}</Link></li>
              <li><Link to={getUrl('web-development')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{language === 'de' ? t('footer.webDevelopment') : 'Web Development'}</Link></li>
              <li><Link to={getUrl('content-creation')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{language === 'de' ? t('footer.contentCreation') : 'Content Creation'}</Link></li>
              <li><Link to={getUrl('seo-optimization')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.seo')}</Link></li>
              <li><Link to={getUrl('google-ads')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.ads')}</Link></li>
              <li><Link to={getUrl('ai-technologies')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{language === 'de' ? t('footer.aiTechnologies') : 'AI-Powered Solutions'}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-secondary-white">{t('footer.company')}</h3>
            <ul className="space-y-2 text-secondary-white text-sm font-sans">
              <li><Link to={getUrl('about-ooliv')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to={getUrl('case-studies')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">Case Studies</Link></li>
              <li><Link to={getUrl('contact')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-secondary-white">{language === 'de' ? "Rechtliches" : "Legal"}</h3>
            <ul className="space-y-2 text-secondary-white text-sm font-sans">
              <li><Link to={getUrl('privacy-policy')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.legal.privacy')}</Link></li>
              <li><Link to={getUrl('legal-notice')} className="text-secondary-white hover:text-secondary-lightblue transition-colors">{t('footer.legal.imprint')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-secondary-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-secondary-white text-sm font-sans">
              <li className="font-medium">ooliv</li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0 text-secondary-lightblue" />
                <span>Mombacher Str. 25<br />55122 Mainz</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0 text-secondary-lightblue" />
                <span>{phoneNumber}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0 text-secondary-lightblue" />
                <span>info@ooliv.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-lightblue/20">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center w-full">
              <a 
                href="https://www.sortlist.de/agency/uli-werbeagentur?disableCache=true&_gl=1*ry4v5e*_gcl_au*MzA5OTA3ODYxLjE3NDEwMDk3MTI.*_ga*NzY3NTI4Nzk0LjE3MzI4MDI5MTE.*_ga_1R6BD4KZ09*MTc0NDA4OTMzNS4xOC4xLjE3NDQwODk3MDkuNTkuMC4w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/lovable-uploads/19dd8ee6-65ca-4be8-a7b8-93ae2d687d64.png" 
                  alt="Sortlist" 
                  className="h-12"
                />
              </a>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-secondary-white font-sans">
                © 2025 ooliv. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
              </div>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary-yellow text-primary-yellow" />
                ))}
                <a 
                  href="https://g.co/kgs/sgZX29W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-lightblue hover:text-secondary-white transition-colors text-sm ml-2"
                >
                  {language === 'de' ? '4,9 / 5 bei 25 Google-Rezensionen' : '4.9 / 5 from 25 Google reviews'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
