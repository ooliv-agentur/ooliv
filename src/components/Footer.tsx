import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  
  // Create language-specific URL mappings
  const pathMap: Record<string, string> = {
    'about-ooliv': language === 'de' ? 'ueber-ooliv' : 'about-ooliv',
    'web-design': language === 'de' ? 'webdesign' : 'web-design',
    'web-development': language === 'de' ? 'webentwicklung' : 'web-development',
    'content-creation': language === 'de' ? 'content-erstellung' : 'content-creation',
    'seo-optimization': language === 'de' ? 'seo-optimierung' : 'seo-optimization',
    'google-ads': 'google-ads',
    'ai-technologies': language === 'de' ? 'ki-technologien' : 'ai-technologies',
    'case-studies': language === 'de' ? 'case-studies' : 'case-studies',
    'careers': language === 'de' ? 'karriere' : 'careers',
    'contact': language === 'de' ? 'kontakt' : 'contact',
    'privacy-policy': language === 'de' ? 'datenschutz' : 'privacy-policy',
    'legal-notice': language === 'de' ? 'impressum' : 'legal-notice',
  };
  
  // Create language-specific URL prefixes
  const langPrefix = language === 'de' ? '/de' : '';
  
  // Helper to generate correct URLs
  const getUrl = (path: string) => {
    if (path === '/') return language === 'de' ? '/de' : '/';
    
    const basePath = path.replace(/^\//,''); // remove leading slash if present
    const translatedPath = pathMap[basePath] || basePath;
    return `${langPrefix}/${translatedPath}`;
  };
  
  return (
    <footer className="bg-brand-footer text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans text-white">{t('footer.about')}</h3>
            <p className="text-white text-sm font-sans">
              {t('footer.aboutText')}
            </p>
            <Button 
              variant="outline" 
              className="bg-brand-primary text-white border-brand-primary hover:bg-brand-primaryHover"
              asChild
            >
              <Link to={getUrl('contact')}>
                {t('footer.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Services Links */}
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

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to={getUrl('about-ooliv')} className="text-white hover:text-brand-background transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to={getUrl('case-studies')} className="text-white hover:text-brand-background transition-colors">{t('footer.caseStudies')}</Link></li>
              <li><Link to={getUrl('contact')} className="text-white hover:text-brand-background transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to={getUrl('careers')} className="text-white hover:text-brand-background transition-colors">{t('footer.jobs')}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">Legal</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to={getUrl('privacy-policy')} className="text-white hover:text-brand-background transition-colors">{t('footer.legal.privacy')}</Link></li>
              <li><Link to={getUrl('legal-notice')} className="text-white hover:text-brand-background transition-colors">{t('footer.legal.imprint')}</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
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
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-white/80">
                {language === 'de' 
                  ? 'Alle Kommunikation wird persönlich von unserem Gründer und CEO bearbeitet — schnell, direkt und strategisch.'
                  : 'All communication is handled personally by our founder and CEO — fast, direct, and strategic.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white font-sans">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to={getUrl('privacy-policy')} className="text-sm text-white hover:text-brand-background transition-colors font-sans">{t('footer.legal.privacy')}</Link>
              <Link to={getUrl('legal-notice')} className="text-sm text-white hover:text-brand-background transition-colors font-sans">{t('footer.legal.imprint')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-primary py-3 px-4 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm md:text-base font-medium font-sans">
            {language === 'de' 
              ? 'Sprechen wir über Ihren Website-Relaunch'
              : "Let's Talk About Your Website Relaunch"}
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white text-brand-primary border-white hover:bg-gray-100 hover:text-brand-primary"
            asChild
          >
            <Link to={getUrl('contact')}>
              {language === 'de' ? 'Kostenfreies Beratungsgespräch' : 'Book a Free Strategy Call'} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
