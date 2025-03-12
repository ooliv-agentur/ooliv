
import { useState } from 'react';
import { 
  Menu, X, Mail, Phone, ChevronDown, Rocket, Search, Bot, 
  MousePointer, Briefcase, User, GraduationCap, MessageCircle 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">ooliv</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <Rocket className="h-4 w-4 mr-2" />
                    Website Relaunch & Design
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    SEO & Performance Optimization
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <Bot className="h-4 w-4 mr-2" />
                    AI-Powered Content & Automation
                  </a>
                  <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <MousePointer className="h-4 w-4 mr-2" />
                    Lead Generation & Conversion
                  </a>
                </div>
              )}
            </div>
            
            <a href="#cases" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              Case Studies
            </a>
            
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
              <User className="h-4 w-4 mr-1" />
              About Us
            </a>
            
            <a href="#careers" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
              <GraduationCap className="h-4 w-4 mr-1" />
              Careers
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              {t('nav.contact')}
            </Button>
            <Button variant="default" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              {t('nav.scheduleCall')}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitch />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            
            {/* Mobile Services Section */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
                    <Rocket className="h-4 w-4 mr-2" />
                    Website Relaunch & Design
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    SEO & Performance Optimization
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
                    <Bot className="h-4 w-4 mr-2" />
                    AI-Powered Content & Automation
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
                    <MousePointer className="h-4 w-4 mr-2" />
                    Lead Generation & Conversion
                  </a>
                </div>
              )}
            </div>
            
            <a href="#cases" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Case Studies
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
              <User className="h-4 w-4 mr-2" />
              About Us
            </a>
            <a href="#careers" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
              <GraduationCap className="h-4 w-4 mr-2" />
              Careers
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
