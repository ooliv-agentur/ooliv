
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "#e2e8f0",
        brand: {
          primary: "#006064",
          primaryHover: "#004D40",
          secondary: "#FF9800",
          secondaryHover: "#F57C00",
          heading: "#0D1B2A",
          text: "#2B2D42",
          background: "#F5F7FA",
          backgroundAlt: "#E9ECEF",
          footer: "#0D1B2A",
          success: "#2E7D32",
          error: "#C62828",
          warning: "#F9A825"
        },
        medico: {
          mint: "#7DDCC0",
          mintLight: "#B8E6D1",
          mintDark: "#5BC9A3",
          yellow: "#F4E04D",
          yellowHover: "#F0DC3C",
          navy: "#1E3A5F",
          navyLight: "#2D4B6B",
          white: "#FFFFFF",
          lightGray: "#F8F9FA",
          mediumGray: "#E9ECEF",
          // Additional background variations
          skyBlue: "#E3F2FD",
          softMint: "#F0FDF4",
          warmBeige: "#FEF7ED",
          lightPurple: "#FAF5FF"
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cardHover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'medico': '0 8px 25px -5px rgba(125, 220, 192, 0.3)',
      },
      backgroundImage: {
        'medico-gradient': 'linear-gradient(135deg, #7DDCC0 0%, #B8E6D1 100%)',
        'medico-hero': 'linear-gradient(135deg, #7DDCC0 0%, #B8E6D1 50%, #F8F9FA 100%)',
        'medico-hero-animated': 'linear-gradient(45deg, #7DDCC0, #B8E6D1, #E3F2FD, #F4E04D)',
        'footer-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #0D1B2A 100%)',
        'section-gradient-1': 'linear-gradient(135deg, #F0FDF4 0%, #E3F2FD 100%)',
        'section-gradient-2': 'linear-gradient(135deg, #FAF5FF 0%, #FEF7ED 100%)',
        'case-studies-gradient': 'linear-gradient(135deg, #E3F2FD 0%, #F0FDF4 50%, #FAF5FF 100%)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)'
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.05)'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
