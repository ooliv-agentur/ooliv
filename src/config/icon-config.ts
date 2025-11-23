/**
 * Icon Configuration - Global Icon System
 * Based on exact design specifications
 */

export const iconConfig = {
  // Default icon styles
  default: {
    strokeWidth: 2, // 2px stroke
    color: '#0B0B0B', // schwarz
    size: 24 // 24px default
  },
  
  // Icons in türkis menu overlay
  menuOverlay: {
    strokeWidth: 2,
    color: '#FFFFFF', // weiß im türkisen Menü
    size: 24
  },
  
  // Floating action button icons
  floatingActionButton: {
    background: '#FFFFFF',
    border: '1px solid #E4E6E7',
    hoverBackground: '#32B2AB',
    hoverIconColor: '#FFFFFF',
    strokeWidth: 2,
    size: 20
  }
} as const;
