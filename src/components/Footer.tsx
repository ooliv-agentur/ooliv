
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-footer-gradient text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-medico-yellow">ooliv</h3>
            <p className="text-white/90 leading-relaxed">
              {isGerman 
                ? "Werbeagentur Mainz für strategisches Webdesign, SEO und digitales Marketing."
                : "Strategic web design, SEO and digital marketing agency based in Mainz, Germany."
              }
            </p>
            <div className="flex items-center text-white/80">
              <MapPin className="h-5 w-5 mr-2 text-medico-mint" />
              <span>Mainz, Deutschland</span>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-medico-yellow">
              {isGerman ? "Dienstleistungen" : "Services"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={isGerman ? "/de/webdesign" : "/web-design"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Webdesign" : "Web Design"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isGerman ? "/de/webentwicklung" : "/web-development"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Webentwicklung" : "Web Development"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isGerman ? "/de/seo-optimierung" : "/seo"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link 
                  to={isGerman ? "/de/content-erstellung" : "/content-creation"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Content-Erstellung" : "Content Creation"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-medico-yellow">
              {isGerman ? "Unternehmen" : "Company"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={isGerman ? "/de/ueber-uns" : "/about-us"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Über uns" : "About Us"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isGerman ? "/de/case-studies" : "/case-studies"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Referenzen" : "Case Studies"}
                </Link>
              </li>
              <li>
                <Link 
                  to={isGerman ? "/de/kontakt" : "/contact"} 
                  className="text-white/80 hover:text-medico-mint transition-colors"
                >
                  {isGerman ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-medico-yellow">
              {isGerman ? "Kontakt" : "Contact"}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="h-5 w-5 mr-2 text-medico-mint" />
                <a href="mailto:info@ooliv.de" className="hover:text-medico-mint transition-colors">
                  info@ooliv.de
                </a>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="h-5 w-5 mr-2 text-medico-mint" />
                <a href="tel:+4961314067150" className="hover:text-medico-mint transition-colors">
                  +49 (0) 6131 40 67 150
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} ooliv. {isGerman ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              to={isGerman ? "/de/impressum" : "/legal-notice"} 
              className="text-white/70 hover:text-medico-mint transition-colors"
            >
              {isGerman ? "Impressum" : "Legal Notice"}
            </Link>
            <Link 
              to={isGerman ? "/de/datenschutz" : "/privacy-policy"} 
              className="text-white/70 hover:text-medico-mint transition-colors"
            >
              {isGerman ? "Datenschutz" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
