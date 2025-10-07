
// Typography Design System
// Centralized typography tokens and utility functions

export const typographyStyles = {
  // Headings - consistent across all components
  headings: {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px] font-medium leading-tight",
    h2: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",
    h3: "text-xl md:text-2xl font-bold leading-tight",
    h4: "text-lg md:text-xl font-semibold leading-tight",
    h5: "text-base md:text-lg font-semibold leading-tight",
    h6: "text-sm md:text-base font-semibold leading-tight"
  },
  
  // Body text - consistent sizing and line heights
  body: {
    large: "text-lg sm:text-xl md:text-2xl leading-relaxed",
    base: "text-base md:text-lg leading-relaxed",
    small: "text-sm md:text-base leading-relaxed",
    caption: "text-xs md:text-sm leading-normal"
  },
  
  // Color tokens - semantic color usage
  colors: {
    primary: "text-medico-darkGreen",
    secondary: "text-gray-700",
    muted: "text-gray-600",
    light: "text-gray-500",
    accent: "text-accent-primary",
    warning: "text-medico-yellow",
    white: "text-white"
  },
  
  // Font weights
  weights: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black"
  },
  
  // Text alignment
  alignment: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  }
} as const;

// Utility functions for combining typography styles
export const getHeadingClasses = (level: keyof typeof typographyStyles.headings, color: keyof typeof typographyStyles.colors = 'primary', alignment: keyof typeof typographyStyles.alignment = 'left') => {
  return `${typographyStyles.headings[level]} ${typographyStyles.colors[color]} ${typographyStyles.alignment[alignment]}`;
};

export const getBodyClasses = (size: keyof typeof typographyStyles.body, color: keyof typeof typographyStyles.colors = 'primary', alignment: keyof typeof typographyStyles.alignment = 'left') => {
  return `${typographyStyles.body[size]} ${typographyStyles.colors[color]} ${typographyStyles.alignment[alignment]}`;
};

export const getTextClasses = (weight: keyof typeof typographyStyles.weights, color: keyof typeof typographyStyles.colors = 'primary', alignment: keyof typeof typographyStyles.alignment = 'left') => {
  return `${typographyStyles.weights[weight]} ${typographyStyles.colors[color]} ${typographyStyles.alignment[alignment]}`;
};

// Type exports for better TypeScript support
export type HeadingLevel = keyof typeof typographyStyles.headings;
export type BodySize = keyof typeof typographyStyles.body;
export type TextColor = keyof typeof typographyStyles.colors;
export type FontWeight = keyof typeof typographyStyles.weights;
export type TextAlignment = keyof typeof typographyStyles.alignment;
