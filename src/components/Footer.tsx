
import React from 'react';
import { Phone, MapPin, Mail, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { footerStyles } from '@/styles/footer-styles';

const Footer = () => {
  const { t, language } = useLanguage();

  const phoneNumber = '06131 – 63 67 801';
  
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.gridLayout}>
          <div className={footerStyles.sectionSpacing}>
            <h3 className={footerStyles.sectionHeading}>{t('footer.about')}</h3>
            <p className={footerStyles.bodyText}>
              Wir entwickeln Websites, die Ihr Geschäft digital voranbringen. KI-gestützt, strategisch durchdacht und individuell umgesetzt.
            </p>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{t('footer.services')}</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/strategie" className={footerStyles.linkText}>Strategie</Link></li>
              <li><Link to="/webdesign" className={footerStyles.linkText}>{t('footer.webDesign')}</Link></li>
              <li><Link to="/webentwicklung" className={footerStyles.linkText}>{t('footer.webDevelopment')}</Link></li>
              <li><Link to="/content-erstellung" className={footerStyles.linkText}>{t('footer.contentCreation')}</Link></li>
              <li><Link to="/seo-optimierung" className={footerStyles.linkText}>{t('footer.seo')}</Link></li>
              <li><Link to="/google-ads" className={footerStyles.linkText}>{t('footer.ads')}</Link></li>
              <li><Link to="/ki-technologien" className={footerStyles.linkText}>{t('footer.aiTechnologies')}</Link></li>
              <li><Link to="/klickbetrug" className={footerStyles.linkText}>Klickbetrug-Schutz</Link></li>
              <li><Link to="/werbeagentur-mainz" className={footerStyles.linkText}>Werbeagentur Mainz</Link></li>
              <li><Link to="/werbeagentur-wiesbaden" className={footerStyles.linkText}>Werbeagentur Wiesbaden</Link></li>
              <li><Link to="/werbeagentur-frankfurt" className={footerStyles.linkText}>Werbeagentur Frankfurt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>{t('footer.company')}</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/ueber-uns" className={footerStyles.linkText}>{t('footer.aboutUs')}</Link></li>
              <li><Link to="/referenzen" className={footerStyles.linkText}>Referenzen</Link></li>
              <li><Link to="/kontakt" className={footerStyles.linkText}>{t('footer.contact')}</Link></li>
              <li><Link to="/artikel" className={footerStyles.linkText}>Blog</Link></li>
              <li><Link to="/strategie" className={footerStyles.linkText}>Strategie</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>Rechtliches</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/datenschutz" className={footerStyles.linkText}>{t('footer.legal.privacy')}</Link></li>
              <li><Link to="/impressum" className={footerStyles.linkText}>{t('footer.legal.imprint')}</Link></li>
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
                © 2025 ooliv. Alle Rechte vorbehalten.
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
                  4,9 / 5 bei 25 Google-Rezensionen
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
