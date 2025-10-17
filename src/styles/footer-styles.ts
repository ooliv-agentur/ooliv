
// German Startpage Footer Style System
// Reusable style definitions for consistent footer styling across the application

export const footerStyles = {
  // Container styles
  container: "bg-white border-t border-gray-200 text-medico-darkGreen pt-20 pb-8",
  innerContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Grid layout
  gridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",
  
  // Typography
  sectionHeading: "text-lg font-semibold font-sans text-medico-darkGreen mb-4",
  bodyText: "text-medico-darkGreen text-sm font-sans",
  linkText: "text-medico-darkGreen hover:text-brand-primary transition-colors",
  companyName: "font-medium",
  
  // Spacing and layout
  sectionSpacing: "space-y-4",
  listSpacing: "space-y-2",
  contactListSpacing: "space-y-3",
  
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
