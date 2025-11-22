
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'border-[#003347]',
    'bg-[#003347]',
    'hover:border-[#38B593]',
    'ring-[#003347]',
    'data-[state=checked]:bg-[#003347]',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      
      // Enhanced typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        'hero': ['4rem', { lineHeight: '4.5rem' }],
      },
      
      // Enhanced line heights for better readability
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        'extra-loose': '2.5',
      },
      
      colors: {
        border: "hsl(180 11% 90%)",
        brand: {
          primary: "#26CFCC", // Turquoise brand color
          primaryHover: "#1da8a6",
          secondary: "#0D0D0D", // Primary text
          secondaryHover: "#000000",
          heading: "#0D0D0D", // Primary text
          text: "#0D0D0D", // Primary text
          background: "#FFFFFF", // White background
          backgroundAlt: "#F4F7F7", // Light grey background
          footer: "#0D0D0D",
          success: "#26CFCC",
          error: "#C62828",
          warning: "#26CFCC"
        },
        // ooliv brand palette
        ooliv: {
          turquoise: "#26CFCC",
          turquoiseHover: "#1da8a6",
          black: "#0D0D0D",
          white: "#FFFFFF",
          lightGrey: "#F4F7F7"
        },
        // Service-specific color variants (subtle professional differentiation)
        service: {
          seo: {
            primary: "#38B593",     // medico-turquoise
            accent: "#D8F4E3",      // medico-mint
            hover: "#2a8a73"
          },
          webdesign: {
            primary: "#38B593",     // medico-turquoise
            accent: "#B8E6D3",      // mint blend
            hover: "#2a8a73"
          },
          webdev: {
            primary: "#2a8a73",     // darker turquoise
            accent: "#38B593",      // medico-turquoise
            hover: "#1e6b5a"
          },
          googleads: {
            primary: "#FFE500",     // medico-yellow
            accent: "#FFF59D",      // lighter yellow
            hover: "#E6CE00"
          },
          content: {
            primary: "#B8E6D3",     // soft mint-turquoise
            accent: "#D8F4E3",      // medico-mint
            hover: "#9DD9C1"
          },
          ai: {
            primary: "#38B593",     // gradient start
            accent: "#D8F4E3",      // gradient end
            hover: "#2a8a73"
          }
        },
        // Extended yellow variants for better design system
        yellow: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fed570",
          300: "#feca57",
          400: "#FFC700", // hover state
          500: "#FFE500", // medico-yellow
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        },
        // Turquoise color scale
        turquoise: {
          50: "#f0fdfd",
          100: "#ccfbf9",
          200: "#99f6f3",
          300: "#5deee9",
          400: "#26CFCC", // Brand turquoise
          500: "#26CFCC", // Default
          600: "#1da8a6", // Hover state
          700: "#178583",
          800: "#136a68",
          900: "#105554",
          light: "#e6fcfc",
          DEFAULT: "#26CFCC",
          hover: "#1da8a6"
        },
        // Text color tokens
        text: {
          primary: "#0D0D0D",
          secondary: "#525252",
          muted: "#7A7A7A",
          light: "#A3A3A3",
          accent: "#26CFCC",
          white: "#FFFFFF",
          warning: "#26CFCC"
        },
        // Accent colors mapped to turquoise
        accent: {
          primary: '#26CFCC',
          complementary: '#1da8a6',
          secondary: '#26CFCC',
          tertiary: '#5deee9',
          light: '#e6fcfc',
          dark: '#178583',
          glow: 'rgba(38, 207, 204, 0.2)',
        }
      },
      // Icon-specific design tokens
      iconSize: {
        xs: '0.75rem',    // 12px
        sm: '1rem',       // 16px
        base: '1.25rem',  // 20px
        md: '1.5rem',     // 24px
        lg: '2rem',       // 32px
        xl: '2.5rem',     // 40px
        '2xl': '3rem',    // 48px
      },
      iconColors: {
        primary: '#38B593',
        secondary: '#FFE500',
        muted: '#003347',
        background: '#D8F4E3',
        accent: '#38B593',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cardHover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'gradient-slow': 'gradient 20s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
        'scroll-preview': 'scroll-preview 20s ease-in-out infinite',
        'grid-move': 'grid-move 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
        'float-reverse': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(20px) rotate(-5deg)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'accordion-down': {
          from: { 
            height: '0',
            opacity: '0'
          },
          to: { 
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          },
        },
        'accordion-up': {
          from: { 
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          },
          to: { 
            height: '0',
            opacity: '0'
          },
        },
        'slide-in-bottom': {
          from: {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'scroll-preview': {
          '0%': {
            transform: 'translateY(0)',
          },
          '45%': {
            transform: 'translateY(-60%)',
          },
          '55%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'grid-move': {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '64px 64px'
          }
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(-45deg, #D8F4E3, #38B593, #FFE500, #D8F4E3)',
        'hero-gradient-animated': 'linear-gradient(-45deg, #D8F4E3, #38B593, #FFE500, #D8F4E3, #38B593, #D8F4E3)',
      },
      backgroundSize: {
        '400': '400% 400%',
      }
    },
  },
  plugins: [],
} satisfies Config;
