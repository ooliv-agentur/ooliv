
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
              <li><Link to="/werbeagentur-darmstadt" className={footerStyles.linkText}>Werbeagentur Darmstadt</Link></li>
              <li><Link to="/digitalagentur-schweiz" className={footerStyles.linkText}>Digitalagentur Schweiz</Link></li>
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
      </div>
    </footer>
  );
};

export default Footer;
