/**
 * Typography Tokens - Global Fixed px Values
 * Based on exact design specifications
 */

export const typographyTokens = {
  // Headings with exact px values - BOLD & IMPACTFUL (Celonis-inspired)
  headings: {
    h1: {
      fontSize: '72px',
      fontWeight: '800', // extrabold (Celonis-style)
      letterSpacing: '-0.03em', // -3% tracking (tighter)
      lineHeight: '1.05',
      color: '#0B0B0B',
      mobile: '36px'
    },
    h2: {
      fontSize: '56px',
      fontWeight: '800', // extrabold (Celonis-style)
      letterSpacing: '-0.02em', // -2% tracking (tighter)
      lineHeight: '1.1',
      color: '#0B0B0B',
      mobile: '32px'
    },
    h3: {
      fontSize: '32px',
      fontWeight: '500', // medium
      lineHeight: '1.3',
      color: '#0B0B0B',
      mobile: '24px'
    },
    h4: {
      fontSize: '24px',
      fontWeight: '500', // medium
      lineHeight: '1.4',
      color: '#0B0B0B',
      mobile: '20px'
    }
  },
  
  // Body text
  body: {
    paragraph: {
      fontSize: '20px',
      fontWeight: '400', // regular
      lineHeight: '1.6',
      color: '#444444',
      mobile: '16px'
    },
    meta: {
      fontSize: '18px',
      fontWeight: '400', // regular
      lineHeight: '1.5',
      color: '#444444',
      mobile: '16px'
    },
    label: {
      fontSize: '16px',
      fontWeight: '400', // regular
      lineHeight: '1.5',
      color: '#444444',
      mobile: '14px'
    }
  },
  
  // Links
  links: {
    hover: {
      color: '#32B2AB',
      textDecoration: 'none' // NIE underline
    }
  }
} as const;
