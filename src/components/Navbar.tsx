
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
          
          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <Button 
              variant="ghost" 
              size="sm"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 border-b">Home</a>
            
            {/* Services Section */}
            <div className="border-b">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-6 space-y-1 my-2">
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center">
                    <Rocket className="h-4 w-4 mr-2" />
                    Website Relaunch & Design
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    SEO & Performance Optimization
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center">
                    <Bot className="h-4 w-4 mr-2" />
                    AI-Powered Content & Automation
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center">
                    <MousePointer className="h-4 w-4 mr-2" />
                    Lead Generation & Conversion
                  </a>
                </div>
              )}
            </div>
            
            <a href="#cases" className="block px-3 py-2 text-gray-700 hover:text-gray-900 border-b flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Case Studies
            </a>
            
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 border-b flex items-center">
              <User className="h-4 w-4 mr-2" />
              About Us
            </a>
            
            <a href="#careers" className="block px-3 py-2 text-gray-700 hover:text-gray-900 border-b flex items-center">
              <GraduationCap className="h-4 w-4 mr-2" />
              Careers
            </a>
            
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                {t('nav.contact')}
              </Button>
              <Button variant="default" size="sm" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                {t('nav.scheduleCall')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
