
import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { footerStyles } from '@/styles/footer-styles';

const Footer = () => {
  const { t, language } = useLanguage();
  
  const pathMap: Record<string, string> = {
    'about-ooliv': language === 'de' ? 'ueber-uns' : 'about-us',
    'strategy': language === 'de' ? 'strategie' : 'strategy',
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

  const phoneNumber = '06131 – 63 67 801';
  
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.gridLayout}>
          <div className={footerStyles.sectionSpacing}>
            <h3 className={footerStyles.sectionHeading}>{t('footer.about')}</h3>
            <p className={footerStyles.bodyText}>
              {language === 'de' 
                ? 'Wir entwickeln Websites, die Ihr Geschäft digital voranbringen. KI-gestützt, strategisch durchdacht und individuell umgesetzt.'
                : t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{t('footer.services')}</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to={getUrl('strategy')} className={footerStyles.linkText}>Strategie</Link></li>
              <li><Link to={getUrl('web-design')} className={footerStyles.linkText}>{t('footer.webDesign')}</Link></li>
              <li><Link to={getUrl('web-development')} className={footerStyles.linkText}>{language === 'de' ? t('footer.webDevelopment') : 'Web Development'}</Link></li>
              <li><Link to={getUrl('content-creation')} className={footerStyles.linkText}>{language === 'de' ? t('footer.contentCreation') : 'Content Creation'}</Link></li>
              <li><Link to={getUrl('seo-optimization')} className={footerStyles.linkText}>{t('footer.seo')}</Link></li>
              <li><Link to={getUrl('google-ads')} className={footerStyles.linkText}>{t('footer.ads')}</Link></li>
              <li><Link to={getUrl('ai-technologies')} className={footerStyles.linkText}>{language === 'de' ? t('footer.aiTechnologies') : 'AI-Powered Solutions'}</Link></li>
              {language === 'de' && (
                <>
                  <li><Link to="/klickbetrug" className={footerStyles.linkText}>Klickbetrug-Schutz</Link></li>
                  <li><Link to="/werbeagentur-wiesbaden" className={footerStyles.linkText}>Werbeagentur Wiesbaden</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{t('footer.company')}</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to={getUrl('about-ooliv')} className={footerStyles.linkText}>{t('footer.aboutUs')}</Link></li>
              <li><Link to={getUrl('case-studies')} className={footerStyles.linkText}>Case Studies</Link></li>
              <li><Link to={getUrl('contact')} className={footerStyles.linkText}>{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{language === 'de' ? "Rechtliches" : "Legal"}</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to={getUrl('privacy-policy')} className={footerStyles.linkText}>{t('footer.legal.privacy')}</Link></li>
              <li><Link to={getUrl('legal-notice')} className={footerStyles.linkText}>{t('footer.legal.imprint')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{t('footer.contactInfo')}</h3>
            <ul className={`${footerStyles.contactListSpacing} ${footerStyles.bodyText}`}>
              <li className={footerStyles.companyName}>ooliv</li>
              <li className={footerStyles.addressText}>
                <MapPin className={footerStyles.contactIconWithMargin} />
                <span>Mombacher Str. 25<br />55122 Mainz</span>
              </li>
              <li className={footerStyles.phoneText}>
                <Phone className={footerStyles.contactIcon} />
                <a href="tel:+4961316367801" className={footerStyles.linkText}>{phoneNumber}</a>
              </li>
              <li className={footerStyles.emailText}>
                <Mail className={footerStyles.contactIcon} />
                <a href="mailto:info@ooliv.de" className={footerStyles.linkText}>info@ooliv.de</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={footerStyles.divider}>
          <div className={footerStyles.bottomSection}>
            <div className={footerStyles.logoContainer}>
              <a 
                href="https://www.sortlist.de/agency/uli-werbeagentur?disableCache=true&_gl=1*ry4v5e*_gcl_au*MzA5OTA3ODYxLjE3NDEwMDk3MTI.*_ga*NzY3NTI4Nzk0LjE3MzI4MDI5MTE.*_ga_1R6BD4KZ09*MTc0NDA4OTMzNS4xOC4xLjE3NDQwODk3MDkuNTkuMC4w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/lovable-uploads/19dd8ee6-65ca-4be8-a7b8-93ae2d687d64.png" 
                  alt="Sortlist" 
                  className={footerStyles.logoImage}
                />
              </a>
            </div>

            <div className={footerStyles.bottomContent}>
              <div className={footerStyles.copyright}>
                © 2025 ooliv. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
              </div>
              
              <div className={footerStyles.ratingContainer}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={footerStyles.starIcon} />
                ))}
                <a 
                  href="https://g.co/kgs/sgZX29W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={footerStyles.ratingLink}
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
