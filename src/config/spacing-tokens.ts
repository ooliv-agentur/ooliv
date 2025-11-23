/**
 * Spacing Tokens - Global Layout System
 * Based on exact design specifications
 */

export const spacingTokens = {
  // Section spacing
  section: {
    paddingY: '120px', // Desktop: 120px Top/Bottom
    paddingYMobile: '64px' // Mobile: 64px Top/Bottom
  },
  
  // Container spacing
  container: {
    maxWidth: '1240px', // Exact: 1240px
    paddingX: '32px', // Desktop: 32px Left/Right
    paddingXMobile: '16px' // Mobile: 16px Left/Right
  },
  
  // Grid system
  grid: {
    columnGap: '48px', // 48px between columns
    rowGap: '48px', // 48px between rows
    columnGapMobile: '24px', // 24px Mobile
    rowGapMobile: '24px', // 24px Mobile
    columns: 12 // 12-Column Grid
  },
  
  // Component spacing
  component: {
    gap: '24px', // 24px between components
    gapMobile: '16px' // 16px Mobile
  }
} as const;
