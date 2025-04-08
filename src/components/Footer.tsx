import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  
  const pathMap: Record<string, string> = {
    'about-ooliv': language === 'de' ? 'ueber-ooliv' : 'about-ooliv',
    'web-design': language === 'de' ? 'webdesign' : 'web-design',
    'web-development': language === 'de' ? 'webentwicklung' : 'web-development',
    'content-creation': language === 'de' ? 'content-erstellung' : 'content-creation',
    'seo-optimization': language === 'de' ? 'seo-optimierung' : 'seo-optimization',
    'google-ads': 'google-ads',
    'ai-technologies': language === 'de' ? 'ki-technologien' : 'ai-technologies',
    'case-studies': 'case-studies',
    'careers': language === 'de' ? 'karriere' : 'careers',
    'contact': language === 'de' ? 'kontakt' : 'contact',
    'privacy-policy': language === 'de' ? 'datenschutz' : 'privacy-policy',
    'legal-notice': language === 'de' ? 'impressum' : 'legal-notice',
  };
  
  const langPrefix = language === 'de' ? '/de' : '';
  
  const getUrl = (path: string) => {
    if (path === '/') return language === 'de' ? '/de' : '/';
    
    const basePath = path.replace(/^\//,'');
    const translatedPath = pathMap[basePath] || basePath;
    return `${langPrefix}/${translatedPath}`;
  };
  
  return (
    <footer className="bg-brand-footer text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans text-white">{t('footer.about')}</h3>
            <p className="text-white text-sm font-sans">
              {language === 'de' 
                ? 'Wir entwickeln Websites, die Ihr Geschäft digital voranbringen. KI-gestützt, strategisch durchdacht und individuell umgesetzt.'
                : t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.services')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to={getUrl('web-design')} className="text-white hover:text-brand-background transition-colors">{t('footer.webDesign')}</Link></li>
              <li><Link to={getUrl('web-development')} className="text-white hover:text-brand-background transition-colors">{language === 'de' ? t('footer.webDevelopment') : 'Web Development'}</Link></li>
              <li><Link to={getUrl('content-creation')} className="text-white hover:text-brand-background transition-colors">{language === 'de' ? t('footer.contentCreation') : 'Content Creation'}</Link></li>
              <li><Link to={getUrl('seo-optimization')} className="text-white hover:text-brand-background transition-colors">{t('footer.seo')}</Link></li>
              <li><Link to={getUrl('google-ads')} className="text-white hover:text-brand-background transition-colors">{t('footer.ads')}</Link></li>
              <li><Link to={getUrl('ai-technologies')} className="text-white hover:text-brand-background transition-colors">{language === 'de' ? t('footer.aiTechnologies') : 'AI-Powered Solutions'}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to={getUrl('about-ooliv')} className="text-white hover:text-brand-background transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to={getUrl('case-studies')} className="text-white hover:text-brand-background transition-colors">Case Studies</Link></li>
              <li><Link to={getUrl('contact')} className="text-white hover:text-brand-background transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to={getUrl('careers')} className="text-white hover:text-brand-background transition-colors">{t('footer.jobs')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{language === 'de' ? "Rechtliches" : "Legal"}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to={getUrl('privacy-policy')} className="text-white hover:text-brand-background transition-colors">{t('footer.legal.privacy')}</Link></li>
              <li><Link to={getUrl('legal-notice')} className="text-white hover:text-brand-background transition-colors">{t('footer.legal.imprint')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-white text-sm font-sans">
              <li className="font-medium">ooliv GmbH</li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span>Mombacher Str. 25<br />55122 Mainz</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <span>06131 – 63 67 801</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <span>info@ooliv.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
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
              <div className="text-sm text-white font-sans">
                © 2025 ooliv. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
              </div>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#facc15] text-[#facc15]" />
                ))}
                <a 
                  href="https://g.co/kgs/sgZX29W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm ml-2"
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
