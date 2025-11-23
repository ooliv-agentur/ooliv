
// Typography Design System - Unified for ooliv brand
// Centralized typography tokens and utility functions

export const typographyStyles = {
  // Headings - consistent across all components
  headings: {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0A0A0A]",
    h2: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A0A0A]",
    h3: "text-3xl md:text-4xl font-bold leading-tight text-[#0A0A0A]",
    h4: "text-2xl md:text-3xl font-semibold leading-tight text-[#0A0A0A]",
    h5: "text-xl md:text-2xl font-semibold leading-tight text-[#0A0A0A]",
    h6: "text-lg md:text-xl font-semibold leading-tight text-[#0A0A0A]"
  },
  
  // Body text - consistent sizing and line heights
  body: {
    large: "text-xl md:text-2xl leading-relaxed text-[#555555]",
    base: "text-base md:text-lg leading-relaxed text-[#555555]",
    small: "text-sm md:text-base leading-relaxed text-[#7A7A7A]",
    caption: "text-xs md:text-sm leading-normal text-[#7A7A7A]"
  },
  
  // Color tokens - semantic color usage
  colors: {
    primary: "text-[#0A0A0A]",
    secondary: "text-[#555555]",
    muted: "text-[#7A7A7A]",
    light: "text-[#A3A3A3]",
    accent: "text-[#0BC3C3]",
    warning: "text-[#0BC3C3]",
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

export const getBodyClasses = (size: keyof typeof typographyStyles.body, color: keyof typeof typographyStyles.colors = 'secondary', alignment: keyof typeof typographyStyles.alignment = 'left') => {
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
