
import React from 'react';
import MainNavigation from './navigation/MainNavigation';

const Navbar = () => {
  return (
    <div className="z-50">
      <MainNavigation />
      
      {/* Add global stylesheet to ensure menu buttons are properly positioned */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Force consistent menu button size and position */
        button[aria-label="Open menu"],
        button[aria-label="Close menu"],
        button[aria-label="Menü schließen"] {
          width: 2.5rem !important;
          height: 2.5rem !important;
          min-width: 2.5rem !important;
          min-height: 2.5rem !important;
          position: fixed !important;
          top: 1rem !important;
          right: 1rem !important;
          z-index: 200 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: #b1b497 !important;
          color: white !important;
          border-radius: 9999px !important;
        }
        
        button[aria-label="Open menu"] svg,
        button[aria-label="Close menu"] svg,
        button[aria-label="Menü schließen"] svg {
          width: 1.5rem !important;
          height: 1.5rem !important;
        }
      `}} />
    </div>
  );
};

export default Navbar;
