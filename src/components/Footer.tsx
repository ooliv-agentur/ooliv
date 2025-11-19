
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
            <h3 className={footerStyles.sectionHeading}>Strategische Services</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/strategie" className={footerStyles.linkText}>Digital Strategy & Transformation</Link></li>
              <li><Link to="/ki-technologien" className={footerStyles.linkText}>AI-Enabled Business Transformation</Link></li>
              <li><Link to="/produkt-ux-strategie" className={footerStyles.linkText}>Product & UX Strategy</Link></li>
              <li><Link to="/methodik" className={footerStyles.linkText}>Methodik & Prozess</Link></li>
              <li><Link to="/seo-optimierung" className={footerStyles.linkText}>SEO & Performance Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionHeading}>Unternehmen</h3>
            <ul className={`${footerStyles.listSpacing} ${footerStyles.bodyText}`}>
              <li><Link to="/" className={footerStyles.linkText}>Home</Link></li>
              <li><Link to="/ueber-uns" className={footerStyles.linkText}>Über Uli Schönleber</Link></li>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
