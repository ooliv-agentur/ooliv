
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  // Define footer links based on language
  const services = language === 'de' 
    ? [
        { name: t('footer.webDesign'), path: '/webdesign' },
        { name: t('footer.webDevelopment'), path: '/webentwicklung' },
        { name: t('footer.contentCreation'), path: '/content-erstellung' },
        { name: t('footer.seo'), path: '/seo-optimierung' },
        { name: t('footer.ads'), path: '/google-ads' },
        { name: t('footer.aiTechnologies'), path: '/ki-technologien' },
      ]
    : [
        { name: t('footer.webDesign'), path: '/en/web-design' },
        { name: t('footer.webDevelopment'), path: '/en/web-development' },
        { name: t('footer.contentCreation'), path: '/en/content-creation' },
        { name: t('footer.seo'), path: '/en/seo-optimization' },
        { name: t('footer.ads'), path: '/en/google-ads' },
        { name: t('footer.aiTechnologies'), path: '/en/ai-technologies' },
      ];
      
  const company = language === 'de'
    ? [
        { name: t('footer.aboutUs'), path: '/ueber-ooliv' },
        { name: t('footer.caseStudies'), path: '/case-studies' },
        { name: t('footer.contact'), path: '/kontakt' },
      ]
    : [
        { name: t('footer.aboutUs'), path: '/en/about-ooliv' },
        { name: t('footer.caseStudies'), path: '/en/case-studies' },
        { name: t('footer.contact'), path: '/en/contact' },
      ];
    
  const legal = language === 'de'
    ? [
        { name: t('footer.legal.privacy'), path: '/datenschutz' },
        { name: t('footer.legal.imprint'), path: '/impressum' },
      ]
    : [
        { name: t('footer.legal.privacy'), path: '/en/privacy-policy' },
        { name: t('footer.legal.imprint'), path: '/en/legal-notice' },
      ];

  return (
    <footer className="bg-[#0A1623] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-white/90 mb-6">{t('footer.aboutText')}</p>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/90">ooliv GmbH</p>
                <p className="text-white/90">Petersstraße 1</p>
                <p className="text-white/90">55116 Mainz</p>
              </div>
              <div>
                <p className="text-white/90">{t('footer.location')}</p>
              </div>
              <div>
                <a href="tel:+4961316367801" className="text-white/90 hover:text-white transition-colors">+49 6131 63 678 01</a>
              </div>
              <div>
                <a href="mailto:info@ooliv.de" className="text-white/90 hover:text-white transition-colors">info@ooliv.de</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/90 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
