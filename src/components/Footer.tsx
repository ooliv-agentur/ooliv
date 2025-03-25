
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-brand-footer text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans text-white">{t('footer.about')}</h3>
            <p className="text-white text-sm font-sans">
              We create high-performance websites that drive business growth. With 16+ years of experience, AI-powered strategies, and a results-driven approach, we help businesses succeed in the digital world.
            </p>
            <Button 
              variant="outline" 
              className="bg-brand-primary text-white border-brand-primary hover:bg-brand-primaryHover"
              asChild
            >
              <Link to="/contact">
                Let's Build Something That Performs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.services')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to="/web-design" className="text-white hover:text-brand-background transition-colors">Web Design</Link></li>
              <li><Link to="/web-development" className="text-white hover:text-brand-background transition-colors">Web Development</Link></li>
              <li><Link to="/content-creation" className="text-white hover:text-brand-background transition-colors">Content Creation</Link></li>
              <li><Link to="/seo-optimization" className="text-white hover:text-brand-background transition-colors">SEO Optimization</Link></li>
              <li><Link to="/lead-generation" className="text-white hover:text-brand-background transition-colors">Lead Generation & Conversion</Link></li>
              <li><Link to="/ai-powered-solutions" className="text-white hover:text-brand-background transition-colors">AI-Powered Solutions</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to="/about-ooliv" className="text-white hover:text-brand-background transition-colors">About ooliv</Link></li>
              <li><Link to="/case-studies" className="text-white hover:text-brand-background transition-colors">{t('footer.caseStudies')}</Link></li>
              <li><Link to="/contact" className="text-white hover:text-brand-background transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/careers" className="text-white hover:text-brand-background transition-colors">{t('footer.jobs')}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">Legal</h3>
            <ul className="space-y-2 text-white text-sm font-sans">
              <li><Link to="/privacy-policy" className="text-white hover:text-brand-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal-notice" className="text-white hover:text-brand-background transition-colors">Legal Notice</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans text-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-white text-sm font-sans">
              <li className="font-medium">ooliv Web Design Agency</li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span>Mombacher Str. 25<br />55122 Mainz</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <span>06131 – 63 67 801</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <span>info@ooliv.de</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-white/80">
                All communication is handled personally by our founder and CEO — fast, direct, and strategic.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white font-sans">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-white hover:text-brand-background transition-colors font-sans">{t('footer.legal.privacy')}</Link>
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
              Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
