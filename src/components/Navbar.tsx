
import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import LanguageSwitcher from './navigation/LanguageSwitcher';

const Navbar = () => {
  return (
    <div className="z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo will be positioned by MainNavigation */}
        <div className="flex-grow">
          <MainNavigation />
        </div>
        
        {/* Language Switcher - aligned with logo and menu */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
