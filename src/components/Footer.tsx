
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About ooliv</h3>
            <p className="text-gray-300 text-sm">
              We create high-performance websites that drive business growth. With 16+ years of experience, AI-powered strategies, and a results-driven approach, we help businesses succeed in the digital world.
            </p>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
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
                Mainz, Germany
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 ooliv. All rights reserved.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Imprint</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 py-3 px-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-white text-sm md:text-base">Need a Website That Grows Your Business? Let's Talk.</p>
          <Button 
            variant="outline" 
            size="sm"
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Fixed Contact Icons */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-0"
        >
          <Mail className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-0"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
