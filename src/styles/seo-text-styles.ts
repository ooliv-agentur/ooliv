
// Master SEO Text Section Style System
// Exakte Übernahme aller Designelemente von der deutschen Startseite (MainzSEOTextSection.tsx)
// Alle Farben, Schriftgrößen, Abstände und Formatierungen sind 1:1 übernommen

export const seoTextStyles = {
  // Container - exakt wie deutsche Startseite
  container: "pt-12 pb-16 font-satoshi",
  containerBackground: "bg-[#0A1E2C]", // Exakte Farbe der deutschen Startseite
  innerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Article wrapper - exakt wie deutsche Startseite
  articleWrapper: "prose prose-lg max-w-none text-[17px] leading-relaxed",
  articleColor: "color: #FFFFFF", // Inline style wie im Master
  
  // Typography - exakte Übernahme
  mainHeading: "text-3xl md:text-4xl font-bold mb-8",
  mainHeadingColor: "color: #FFFFFF", // Inline style wie im Master
  sectionHeading: "text-2xl md:text-3xl font-bold mt-12 mb-6",
  sectionHeadingColor: "color: #FFFFFF", // Inline style wie im Master
  paragraph: "my-6",
  paragraphColor: "color: #F4F4F4", // Inline style wie im Master
  strongText: "font-bold",
  
  // Lists - exakte Übernahme
  unorderedList: "list-disc pl-6 my-6 space-y-2",
  listItem: "",
  
  // Quote/Blockquote - exakte Übernahme vom Master (German homepage style)
  blockquote: "border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4",
  quoteText: "text-medico-mint italic text-lg leading-relaxed",
  quoteAuthor: "text-medico-turquoise font-medium mt-2 not-italic text-base",
  
  // Interactive elements - exakte Übernahme
  ctaButton: "text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg",
  
  // Highlighted text - wie im Master verwendet
  highlightedText: "text-medico-yellow",
  
  // Spacing - exakte Übernahme
  sectionSpacing: "mt-12 mb-6",
  paragraphSpacing: "my-6",
  listSpacing: "my-6 space-y-2"
} as const;

// Helper function to get SEO text styles
export const getSeoTextStyles = () => seoTextStyles;

// Type for SEO text style keys
export type SeoTextStyleKey = keyof typeof seoTextStyles;
