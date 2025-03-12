
import { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">ooliv</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#process" className="text-gray-700 hover:text-gray-900 transition-colors">Process</a>
            <a href="#cases" className="text-gray-700 hover:text-gray-900 transition-colors">Cases</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button variant="default" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Schedule Call
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-xl">
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Solutions</a>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Process</a>
            <a href="#cases" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Cases</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-gray-900">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
