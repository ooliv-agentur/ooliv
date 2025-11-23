/**
 * Typography Tokens - Global Fixed px Values
 * Based on exact design specifications
 */

export const typographyTokens = {
  // Headings with exact px values
  headings: {
    h1: {
      fontSize: '68px',
      fontWeight: '700', // bold
      letterSpacing: '-0.02em', // -2% tracking
      lineHeight: '1.1',
      color: '#0B0B0B',
      mobile: '32px'
    },
    h2: {
      fontSize: '48px',
      fontWeight: '700', // bold
      letterSpacing: '-0.01em',
      lineHeight: '1.2',
      color: '#0B0B0B',
      mobile: '28px'
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
