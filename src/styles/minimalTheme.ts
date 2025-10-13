// Minimal White + Turquoise Hybrid Theme
import { CORE_COLORS, resetToMonthlyColor } from './colorSystem';

// Pure black & white minimal theme (logo stays turquoise)
export const setHybridMinimalTheme = () => {
  if (typeof document !== 'undefined') {
    // Clean up any stored theme preferences (theme is now permanent)
    localStorage.removeItem('use-hybrid-theme');
    
    // Add minimal theme class to body
    document.body.classList.add('minimal-theme');
    
    // Pure white backgrounds
    document.documentElement.style.setProperty('--accent-primary', '0 0% 20%'); // Dark gray for text/buttons
    document.documentElement.style.setProperty('--accent-secondary', '0 0% 100%'); // Pure white
    document.documentElement.style.setProperty('--accent-tertiary', '0 0% 96%'); // Very light gray
    
    // No gradients - solid white
    document.documentElement.style.setProperty('--accent-gradient', 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 100%))');
    
    // No glow effects
    document.documentElement.style.setProperty('--accent-glow', 'hsla(0, 0%, 0%, 0)');
    document.documentElement.style.setProperty('--accent-complementary', '0 0% 20%'); // Dark gray
    
    // Override brand colors to black/white (except logo)
    document.documentElement.style.setProperty('--brand-turquoise', '168 60% 50%'); // Keep for logo only
    document.documentElement.style.setProperty('--brand-dark-green', '0 0% 15%'); // Black instead of dark green
    document.documentElement.style.setProperty('--brand-mint', '0 0% 100%'); // White
    document.documentElement.style.setProperty('--brand-background', '0 0% 100%'); // Pure white
    document.documentElement.style.setProperty('--brand-background-alt', '0 0% 98%'); // Very subtle gray
    
    // Override medico colors
    document.documentElement.style.setProperty('--medico-mint', '0 0% 100%'); // White
    
    // Hide floating circles
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach(circle => {
      (circle as HTMLElement).style.display = 'none';
    });
    
    console.log('🎨 Minimal Theme Active: Pure black & white (logo stays turquoise)');
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
  // Remove minimal theme class from body
  if (typeof document !== 'undefined') {
    document.body.classList.remove('minimal-theme');
    
    // Show floating circles again
    const circles = document.querySelectorAll('.floating-circle');
    circles.forEach(circle => {
      (circle as HTMLElement).style.display = '';
    });
  }
  resetToMonthlyColor();
};
