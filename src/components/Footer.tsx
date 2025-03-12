
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.about')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.aboutText')}
            </p>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              {t('footer.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.webDesign')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.seo')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.ads')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.branding')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.caseStudies')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.jobs')}</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@ooliv.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +49 123 456 7890
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {t('footer.location')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{t('footer.legal.imprint')}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 py-3 px-4 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm md:text-base">Let's Talk About Your Website Relaunch</p>
          <Button 
            variant="outline" 
            size="sm"
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            {t('footer.startProject')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Fixed Contact Icons - removed to avoid duplication with Navbar */}
    </footer>
  );
};

export default Footer;
