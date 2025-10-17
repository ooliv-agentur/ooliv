import React from 'react';
import { Star } from 'lucide-react';
import { footerBottomStyles } from '@/styles/footer-bottom-styles';

const FooterBottom = () => {
  return (
    <div className={footerBottomStyles.container}>
      <div className={footerBottomStyles.innerContainer}>
        <div className={footerBottomStyles.bottomSection}>
          <div className={footerBottomStyles.logoContainer}>
            <a 
              href="https://www.sortlist.de/agency/uli-werbeagentur?disableCache=true&_gl=1*ry4v5e*_gcl_au*MzA5OTA3ODYxLjE3NDEwMDk3MTI.*_ga*NzY3NTI4Nzk0LjE3MzI4MDI5MTE.*_ga_1R6BD4KZ09*MTc0NDA4OTMzNS4xOC4xLjE3NDQwODk3MDkuNTkuMC4w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="/lovable-uploads/19dd8ee6-65ca-4be8-a7b8-93ae2d687d64.png" 
                alt="Sortlist" 
                className={footerBottomStyles.logoImage}
              />
            </a>
          </div>

          <div className={footerBottomStyles.bottomContent}>
            <div className={footerBottomStyles.copyright}>
              © 2025 ooliv. Alle Rechte vorbehalten.
            </div>
            
            <div className={footerBottomStyles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={footerBottomStyles.starIcon} />
              ))}
              <a 
                href="https://g.co/kgs/sgZX29W" 
                target="_blank" 
                rel="noopener noreferrer"
                className={footerBottomStyles.ratingLink}
              >
                4,9 / 5 bei 25 Google-Rezensionen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
