// Footer Bottom Style System
// Black background section at the bottom of every page
// Contains: Sortlist logo, copyright, Google rating

export const footerBottomStyles = {
  // Container styles
  container: "bg-black text-white py-8",
  innerContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Layout sections
  bottomSection: "flex flex-col items-center space-y-6",
  logoContainer: "flex justify-center w-full",
  logoImage: "h-12",
  
  // Bottom content layout
  bottomContent: "flex flex-col md:flex-row w-full justify-between items-center space-y-4 md:space-y-0",
  copyright: "text-sm text-white/80 font-sans",
  
  // Rating section
  ratingContainer: "flex items-center",
  starIcon: "h-3.5 w-3.5 fill-[#facc15] text-[#facc15]",
  ratingLink: "text-white/80 hover:text-medico-turquoise transition-colors text-sm ml-2"
} as const;

// Helper function to get footer bottom styles
export const getFooterBottomStyles = () => footerBottomStyles;

// Type for footer bottom style keys
export type FooterBottomStyleKey = keyof typeof footerBottomStyles;
