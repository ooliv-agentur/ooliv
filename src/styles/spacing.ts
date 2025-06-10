
// Spacing and Layout Design System
// Centralized spacing tokens and layout utility functions

export const spacingStyles = {
  // Section spacing - consistent vertical spacing between major page sections
  section: {
    small: "py-12 md:py-16",
    medium: "py-16 md:py-20", 
    large: "py-20 md:py-24",
    extraLarge: "py-24 md:py-32"
  },
  
  // Container patterns - consistent max-widths and padding
  container: {
    // Main content containers
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
    
    // Specialized containers
    hero: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
    content: "max-w-4xl mx-auto",
    fullWidth: "w-full"
  },
  
  // Component spacing - gaps between elements within components
  component: {
    tight: "space-y-2",
    small: "space-y-4", 
    medium: "space-y-6",
    large: "space-y-8",
    extraLarge: "space-y-12"
  },
  
  // Grid gaps - consistent spacing in grid layouts
  grid: {
    tight: "gap-4",
    small: "gap-6", 
    medium: "gap-8",
    large: "gap-12"
  },
  
  // Padding patterns for cards and components
  padding: {
    small: "p-4",
    medium: "p-6", 
    large: "p-8",
    extraLarge: "p-12"
  },
  
  // Margin patterns
  margin: {
    small: "mb-4",
    medium: "mb-6",
    large: "mb-8", 
    extraLarge: "mb-12"
  }
} as const;

// Layout utility functions
export const getContainerClasses = (variant: keyof typeof spacingStyles.container = 'default') => {
  return spacingStyles.container[variant];
};

export const getSectionClasses = (variant: keyof typeof spacingStyles.section = 'medium', background?: 'white' | 'mint') => {
  const spacing = spacingStyles.section[variant];
  const bg = background === 'mint' ? 'bg-medico-mint' : background === 'white' ? 'bg-white' : '';
  return `${spacing} ${bg}`.trim();
};

export const getGridClasses = (columns: 1 | 2 | 3 | 4, gap: keyof typeof spacingStyles.grid = 'medium') => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid md:grid-cols-2',
    3: 'grid md:grid-cols-2 lg:grid-cols-3', 
    4: 'grid md:grid-cols-2 lg:grid-cols-4'
  };
  
  return `grid ${gridCols[columns]} ${spacingStyles.grid[gap]}`;
};

// Type exports for better TypeScript support
export type SectionVariant = keyof typeof spacingStyles.section;
export type ContainerVariant = keyof typeof spacingStyles.container;
export type ComponentSpacing = keyof typeof spacingStyles.component;
export type GridGap = keyof typeof spacingStyles.grid;
export type PaddingVariant = keyof typeof spacingStyles.padding;
