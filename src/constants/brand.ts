/**
 * Brand Identity Constants
 * Always use these constants to ensure consistent brand naming across the entire site
 */

export const BRAND = {
  // CRITICAL: Brand name is ALWAYS lowercase "ooliv"
  name: 'ooliv',
  
  // Formal version with descriptor
  nameFormal: 'ooliv Werbeagentur',
  
  // Location
  location: 'Mainz',
  
  // Full formal name with location
  nameFull: 'ooliv Werbeagentur Mainz',
  
  // Tagline
  tagline: 'Werbeagentur für B2B-Unternehmen',
  
  // Contact
  email: 'info@ooliv.de',
  phone: '+49-6131-9027640',
  
  // Address
  address: {
    street: 'Am Brand 8',
    city: 'Mainz',
    postalCode: '55116',
    country: 'DE',
    region: 'Rheinland-Pfalz'
  },
  
  // URLs
  url: 'https://ooliv.de',
  
  // SEO defaults
  defaultTitleSuffix: 'ooliv Werbeagentur Mainz'
} as const;

/**
 * Helper function to create consistent page titles
 * Format: [Page Name] | ooliv Werbeagentur Mainz
 */
export const createPageTitle = (pageName: string): string => {
  return `${pageName} | ${BRAND.defaultTitleSuffix}`;
};
