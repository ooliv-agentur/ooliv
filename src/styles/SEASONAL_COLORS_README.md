# 🎨 Seasonal Color System

## Overview
Automatic monthly-rotating accent colors that keep your brand fresh while maintaining core brand identity.

---

## 🎯 How It Works

### Core Colors (Never Change)
- **Turquoise**: `#38B593` - Your primary brand color
- **Dark Green**: `#003347` - Text and headers
- **White**: `#FFFFFF` - Clean backgrounds

### Monthly Accent Colors (Auto-Rotating)
The system automatically switches accent colors based on the current month:

| Month | Color Name | Psychology |
|-------|------------|------------|
| Januar | Fresh Start Blue | Klarheit, Neuanfang, Fokus |
| Februar | Cozy Coral | Wärme, Verbindung, Nähe |
| März | Spring Sage | Wachstum, Erneuerung, Balance |
| April | Cherry Blossom | Leichtigkeit, Neubeginn, Optimismus |
| Mai | Vibrant Lime | Energie, Frische, Aktivität |
| Juni | Sunset Orange | Lebensfreude, Kreativität, Wärme |
| Juli | Ocean Blue | Erfrischung, Klarheit, Freiheit |
| August | Golden Hour | Erfolg, Optimismus, Fülle |
| September | Harvest Amber | Erdung, Reife, Beständigkeit |
| Oktober | Cozy Caramel | Gemütlichkeit, Stabilität, Wärme |
| November | Deep Plum | Tiefe, Reflexion, Eleganz |
| Dezember | Ice Crystal | Klarheit, Reinheit, Neubeginn |

---

## 🛠 How to Use

### In Components
```tsx
// Use Tailwind classes
<div className="bg-accent-primary text-white">
  This uses the monthly accent color
</div>

// With opacity
<div className="bg-accent-primary/20">
  Subtle accent background
</div>

// Hover states
<button className="hover:bg-accent-primary">
  Hover me
</button>
```

### In CSS
```css
/* Direct CSS variable usage */
.my-element {
  background: var(--accent-gradient);
  color: var(--accent-primary);
}

/* With opacity */
.my-element-subtle {
  background: var(--accent-glow);
}
```

### Available CSS Variables
- `--accent-primary` - Main monthly color
- `--accent-secondary` - Seasonal secondary color
- `--accent-tertiary` - Seasonal tertiary color
- `--accent-gradient` - Monthly gradient
- `--accent-light` - Lighter variant
- `--accent-dark` - Darker variant
- `--accent-glow` - Translucent for effects

### Available Tailwind Classes
- `bg-accent-primary` - Background
- `text-accent-primary` - Text color
- `border-accent-primary` - Border color
- All variants support opacity: `bg-accent-primary/50`

---

## 🎪 Where Colors Rotate

✅ **Automatically Applied:**
- Hero section gradients
- Floating circle animations
- CTA hover states
- Section accent highlights
- Interactive elements

❌ **Never Changes:**
- Logo colors
- Primary navigation
- Footer colors
- Brand turquoise (#38B593)

---

## 🔧 Manual Override (for Campaigns)

```tsx
import { setCustomColor } from '@/styles/colorSystem';

// Override for a special campaign
setCustomColor(
  'hsl(340, 85%, 65%)', // Custom primary
  'linear-gradient(135deg, hsl(340, 85%, 65%), hsl(320, 75%, 70%))' // Custom gradient
);

// Reset to current month
import { resetToMonthlyColor } from '@/styles/colorSystem';
resetToMonthlyColor();
```

---

## 📊 Technical Details

### Auto-Switching
- Colors automatically update on app load
- System checks for month changes every hour
- No manual intervention needed
- Instant update on month transition

### Configuration File
`src/styles/colorSystem.ts` - Contains all monthly definitions

### Hook
`src/hooks/useSeasonalColors.tsx` - React hook for color management

### CSS Variables
`src/index.css` - CSS custom properties for easy rotation

---

## 🎨 Design Philosophy

1. **Consistency**: Core brand colors never change
2. **Freshness**: Monthly accents keep design feeling new
3. **Psychology**: Colors chosen based on seasonal emotions
4. **Performance**: CSS variables = zero runtime cost
5. **Flexibility**: Easy manual override for campaigns

---

## 🚀 Future Enhancements

- Admin dashboard for color preview
- A/B testing different color schemes
- User preference colors (e.g., accessibility modes)
- Integration with marketing campaigns
- Analytics on color performance

---

## 📝 Monthly Announcement Ideas

Want to make the color changes more fun? Add playful announcements:

```tsx
// In your hero or header component
<div className="text-sm text-accent-primary">
  🎨 Januar-Farbe: Fresh Start Blue - Für klaren Fokus ins neue Jahr
</div>
```

---

## 🐛 Debugging

### Check Current Color
```tsx
import { getCurrentMonthColor } from '@/styles/colorSystem';

console.log('Current month color:', getCurrentMonthColor());
```

### Force Specific Month (for testing)
```tsx
import { MONTHLY_COLORS } from '@/styles/colorSystem';

// Test October colors
document.documentElement.style.setProperty('--accent-primary', MONTHLY_COLORS[10].primary);
```

---

## ✨ Pro Tips

1. **Gradients**: Use `var(--accent-gradient)` for beautiful animated backgrounds
2. **Glow Effects**: `var(--accent-glow)` perfect for shadows and overlays
3. **Hover States**: Combine with Tailwind: `hover:bg-accent-primary`
4. **Dark Mode**: Accent colors work in both light/dark modes
5. **Accessibility**: All monthly colors pass WCAG AA contrast requirements

---

Ready to keep your brand fresh every month? 🎉
