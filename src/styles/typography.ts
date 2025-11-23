
// Typography Design System - Unified for ooliv brand
// Centralized typography tokens and utility functions

export const typographyStyles = {
  // Headings - consistent across all components - Dark Mode ready
  headings: {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground",
    h2: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground",
    h3: "text-3xl md:text-4xl font-bold leading-tight text-foreground",
    h4: "text-2xl md:text-3xl font-semibold leading-tight text-foreground",
    h5: "text-xl md:text-2xl font-semibold leading-tight text-foreground",
    h6: "text-lg md:text-xl font-semibold leading-tight text-foreground"
  },
  
  // Body text - consistent sizing and line heights - Dark Mode ready
  body: {
    large: "text-xl md:text-2xl leading-relaxed text-muted-foreground",
    base: "text-base md:text-lg leading-relaxed text-muted-foreground",
    small: "text-sm md:text-base leading-relaxed text-muted-foreground",
    caption: "text-xs md:text-sm leading-normal text-muted-foreground"
  },
  
  // Color tokens - semantic color usage - Dark Mode ready
  colors: {
    primary: "text-foreground",
    secondary: "text-muted-foreground",
    muted: "text-muted-foreground",
    light: "text-muted-foreground/70",
    accent: "text-primary",
    warning: "text-primary",
    white: "text-primary-foreground"
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
