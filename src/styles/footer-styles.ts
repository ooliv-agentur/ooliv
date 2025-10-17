
// German Startpage Footer Style System
// Reusable style definitions for consistent footer styling across the application

export const footerStyles = {
  // Container styles
  container: "bg-medico-darkGreen border-t border-medico-turquoise/20 text-white pt-20 pb-8",
  innerContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Grid layout
  gridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",
  
  // Typography
  sectionHeading: "text-lg font-semibold font-sans text-white mb-4",
  bodyText: "text-white/90 text-sm font-sans",
  linkText: "text-white/90 hover:text-medico-turquoise transition-colors",
  companyName: "font-medium",
  
  // Spacing and layout
  sectionSpacing: "space-y-4",
  listSpacing: "space-y-2",
  contactListSpacing: "space-y-3",
  
  // Divider and bottom section
  divider: "mt-12 pt-8 border-t border-white/20",
  bottomSection: "flex flex-col items-center space-y-6",
  logoContainer: "flex justify-center w-full",
  logoImage: "h-12",
  
  // Bottom content layout
  bottomContent: "flex flex-col md:flex-row w-full justify-between items-center space-y-4 md:space-y-0",
  copyright: "text-sm text-white/80 font-sans",
  
  // Rating section
  ratingContainer: "flex items-center",
  starIcon: "h-3.5 w-3.5 fill-[#facc15] text-[#facc15]",
  ratingLink: "text-white/80 hover:text-medico-turquoise transition-colors text-sm ml-2",
  
  // Icon styles
  contactIcon: "h-4 w-4 mr-2 shrink-0",
  contactIconWithMargin: "h-4 w-4 mr-2 mt-1 shrink-0",
  
  // Address styling
  addressText: "flex items-start",
  phoneText: "flex items-center",
  emailText: "flex items-center"
} as const;

// Helper function to get footer styles
export const getFooterStyles = () => footerStyles;

// Type for footer style keys
export type FooterStyleKey = keyof typeof footerStyles;
