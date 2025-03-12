
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-footer text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Link to="/contact">
                {t('footer.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.services')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to="/web-design-development" className="text-white hover:text-brand-background transition-colors">{t('footer.webDesign')}</Link></li>
              <li><Link to="/seo-performance-optimization" className="text-white hover:text-brand-background transition-colors">{t('footer.seo')}</Link></li>
              <li><Link to="/lead-generation" className="text-white hover:text-brand-background transition-colors">{t('footer.ads')}</Link></li>
              <li><Link to="/ai-powered-solutions" className="text-white hover:text-brand-background transition-colors">{t('footer.branding')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to="/about-us" className="text-white hover:text-brand-background transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/case-studies" className="text-white hover:text-brand-background transition-colors">{t('footer.caseStudies')}</Link></li>
              <li><Link to="/contact" className="text-white hover:text-brand-background transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/careers" className="text-white hover:text-brand-background transition-colors">{t('footer.jobs')}</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-white text-sm font-sans">
              <li>ooliv Web Design Agency</li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Mombacher Str. 25<br />
                55122 Mainz
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                06131 – 63 67 801
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Info@ooliv.de
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white font-sans">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/data-privacy" className="text-sm text-white hover:text-brand-background transition-colors font-sans">{t('footer.legal.privacy')}</Link>
              <Link to="/legal-notice" className="text-sm text-white hover:text-brand-background transition-colors font-sans">{t('footer.legal.imprint')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-primary py-3 px-4 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm md:text-base font-medium font-sans">Let's Talk About Your Website Relaunch</p>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white text-brand-primary border-white hover:bg-gray-100 hover:text-brand-primary"
            asChild
          >
            <Link to="/contact">
              {t('footer.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
