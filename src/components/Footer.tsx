import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const phoneNumber = '06131 – 63 67 801';
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load headquarters image:', e);
  };

  const handleImageLoad = () => {
    console.log('Headquarters image loaded successfully');
  };
  
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content - Links & Info */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.about')}</h3>
              <p className="text-foreground text-sm">
                Wir entwickeln Websites, die Ihr Geschäft digital voranbringen. KI-gestützt, strategisch durchdacht und individuell umgesetzt.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.services')}</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li><Link to="/digitale-transformation-strategie" className="text-foreground hover:text-primary transition-colors">Digitale Transformation & Strategie</Link></li>
                <li><Link to="/ux-konzeption" className="text-foreground hover:text-primary transition-colors">UX & Konzeption</Link></li>
                <li><Link to="/webdesign-entwicklung" className="text-foreground hover:text-primary transition-colors">Webdesign & Entwicklung</Link></li>
                <li><Link to="/seo-performance" className="text-foreground hover:text-primary transition-colors">SEO & Performance</Link></li>
                <li><Link to="/ai-workflows" className="text-foreground hover:text-primary transition-colors">AI-Workflows</Link></li>
                <li><Link to="/klickbetrug" className="text-foreground hover:text-primary transition-colors">Klickbetrug-Schutz</Link></li>
                <li><Link to="/werbeagentur-mainz" className="text-foreground hover:text-primary transition-colors">Werbeagentur Mainz</Link></li>
                <li><Link to="/werbeagentur-wiesbaden" className="text-foreground hover:text-primary transition-colors">Werbeagentur Wiesbaden</Link></li>
                <li><Link to="/werbeagentur-frankfurt" className="text-foreground hover:text-primary transition-colors">Werbeagentur Frankfurt</Link></li>
                <li><Link to="/werbeagentur-darmstadt" className="text-foreground hover:text-primary transition-colors">Werbeagentur Darmstadt</Link></li>
                <li><Link to="/digitalagentur-schweiz" className="text-foreground hover:text-primary transition-colors">Digitalagentur Schweiz</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.company')}</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li><Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/ueber-uns" className="text-foreground hover:text-primary transition-colors">{t('footer.aboutUs')}</Link></li>
                <li><Link to="/referenzen" className="text-foreground hover:text-primary transition-colors">Referenzen</Link></li>
                <li><Link to="/kontakt" className="text-foreground hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
                <li><Link to="/artikel" className="text-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li><Link to="/datenschutz" className="text-foreground hover:text-primary transition-colors">{t('footer.legal.privacy')}</Link></li>
                <li><Link to="/impressum" className="text-foreground hover:text-primary transition-colors">{t('footer.legal.imprint')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.contactInfo')}</h3>
              <ul className="space-y-3 text-foreground text-sm">
                <li className="font-medium">ooliv</li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0 text-[#7A7A7A]" />
                  <span>Mombacher Str. 25<br />55122 Mainz</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 shrink-0 text-[#7A7A7A]" />
                  <a href="tel:+4961316367801" className="text-foreground hover:text-primary transition-colors">{phoneNumber}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 shrink-0 text-[#7A7A7A]" />
                  <a href="mailto:info@ooliv.de" className="text-foreground hover:text-primary transition-colors">info@ooliv.de</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Location Layer */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
              Zuhause in Mainz. Aktiv in ganz Deutschland und im DACH-Raum.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Team arbeitet von Mainz aus – mit Kunden in ganz Deutschland, der Schweiz und Mallorca. Persönliche Betreuung, kurze Reaktionszeiten, verlässliche Ansprechpartner.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm max-w-5xl mx-auto border border-gray-100">
            <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
                alt="ooliv Bürogebäude in Mainz mit moderner Glasarchitektur"
                className="w-full h-full object-cover transition-opacity duration-300"
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
