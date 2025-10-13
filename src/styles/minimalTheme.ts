// Minimal White + Turquoise Hybrid Theme
import { CORE_COLORS } from './colorSystem';

// Hybrid theme: 90% white, 10% strategic turquoise
export const setHybridMinimalTheme = () => {
  if (typeof document !== 'undefined') {
    // White backgrounds with subtle gray for contrast
    document.documentElement.style.setProperty('--accent-primary', '168 60% 50%'); // Turquoise for accents
    document.documentElement.style.setProperty('--accent-secondary', '0 0% 98%'); // Almost white
    document.documentElement.style.setProperty('--accent-tertiary', '0 0% 95%'); // Light gray
    
    // Subtle gradients (white to very light gray)
    document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 98%))');
    
    // Turquoise glow for CTAs and hover states
    document.documentElement.style.setProperty('--accent-glow', 'hsla(168, 60%, 50%, 0.12)');
    document.documentElement.style.setProperty('--accent-complementary', '168 60% 50%'); // Turquoise
    
    // Override brand colors to minimal palette
    document.documentElement.style.setProperty('--brand-turquoise', '168 60% 50%'); // Keep turquoise
    document.documentElement.style.setProperty('--brand-dark-green', '195 100% 10%'); // Keep dark green
    document.documentElement.style.setProperty('--brand-mint', '0 0% 100%'); // White instead of mint
    document.documentElement.style.setProperty('--brand-background', '0 0% 100%'); // Pure white
    document.documentElement.style.setProperty('--brand-background-alt', '0 0% 98%'); // Very light gray
    
    console.log('🎨 Hybrid Minimal Theme Active: White canvas + Turquoise accents');
  }
};

// Full minimal theme (if they want even less color)
export const setFullMinimalTheme = () => {
  if (typeof document !== 'undefined') {
    // Almost no color except logo
    document.documentElement.style.setProperty('--accent-primary', '0 0% 20%'); // Dark gray
    document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 99%))');
    document.documentElement.style.setProperty('--accent-glow', 'hsla(0, 0%, 0%, 0.03)');
    
    console.log('🎨 Full Minimal Theme Active: Ultra-minimal white');
  }
};

// Reset to colorful theme
export const resetToColorfulTheme = () => {
  const { resetToMonthlyColor } = require('./colorSystem');
  resetToMonthlyColor();
};
