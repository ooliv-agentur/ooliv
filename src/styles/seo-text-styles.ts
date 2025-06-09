
// German Startpage SEO Text Section Style System
// Reusable style definitions for the SEO text section that appears below the footer

export const seoTextStyles = {
  // Container styles - matches the dark footer background
  container: "bg-brand-footer text-white pt-12 pb-16",
  innerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Article wrapper
  articleWrapper: "prose prose-lg max-w-none text-[17px] leading-relaxed text-white",
  
  // Typography
  mainHeading: "text-2xl md:text-3xl font-bold text-white mb-6",
  sectionHeading: "text-xl md:text-2xl font-bold text-white mt-8 mb-4",
  paragraph: "my-4 text-white",
  strongText: "font-bold text-white",
  
  // Lists
  unorderedList: "list-disc pl-6 my-4 space-y-2 text-white",
  listItem: "text-white",
  
  // Interactive elements
  ctaButton: "text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block",
  
  // Quote/testimonial styles
  quote: "block mt-2 text-white italic",
  quoteAuthor: "text-white",
  
  // Spacing utilities
  sectionSpacing: "mt-8 mb-4",
  paragraphSpacing: "my-4",
  listSpacing: "my-4 space-y-2"
} as const;

// Helper function to get SEO text styles
export const getSeoTextStyles = () => seoTextStyles;

// Type for SEO text style keys
export type SeoTextStyleKey = keyof typeof seoTextStyles;
