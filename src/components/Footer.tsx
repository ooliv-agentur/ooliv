
import { Phone, MapPin, Mail } from 'lucide-react';
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
            <h3 className={footerStyles.sectionHeading}>Über ooliv</h3>
            <p className={footerStyles.bodyText}>
              Digital Strategy Lead mit 16+ Jahren Erfahrung in Digital Transformation, AI Integration und UX Strategy für B2B-Unternehmen.
            </p>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>Unsere Leistungen</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/strategie" className={footerStyles.linkText}>Digitale Strategie</Link></li>
              <li><Link to="/webdesign" className={footerStyles.linkText}>Webdesign</Link></li>
              <li><Link to="/ki-technologien" className={footerStyles.linkText}>KI-Integration</Link></li>
              <li><Link to="/website-relaunch" className={footerStyles.linkText}>Website Relaunch</Link></li>
              <li><Link to="/webentwicklung" className={footerStyles.linkText}>Webentwicklung</Link></li>
              <li><Link to="/automatisierte-content-marketing" className={footerStyles.linkText}>Content Automation</Link></li>
              <li><Link to="/seo-optimierung" className={footerStyles.linkText}>SEO-Optimierung</Link></li>
              <li><Link to="/google-ads" className={footerStyles.linkText}>Google Ads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>Unternehmen</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/" className={footerStyles.linkText}>Home</Link></li>
              <li><Link to="/ueber-uns" className={footerStyles.linkText}>Über uns</Link></li>
              <li><Link to="/referenzen" className={footerStyles.linkText}>Transformationen</Link></li>
              <li><Link to="/kontakt" className={footerStyles.linkText}>Strategiegespräch vereinbaren</Link></li>
              <li><Link to="/artikel" className={footerStyles.linkText}>Strategic Insights</Link></li>
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
            <h3 className={footerStyles.sectionHeading}>Kontakt</h3>
            <ul className={`${footerStyles.contactListSpacing} ${footerStyles.bodyText}`}>
              <li className={footerStyles.companyName}>Uli Schönleber</li>
              <li className="text-sm text-muted-foreground mb-2">Digital Strategy Lead · ooliv</li>
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
            
            <div className="mt-4 pt-4 border-t border-border">
              <a 
                href="https://www.linkedin.com/in/uli-schoenleber/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Uli Schönleber auf LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profil</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
