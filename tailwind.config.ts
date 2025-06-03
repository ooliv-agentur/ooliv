
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
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
        // New medicosearch.ch color palette
        medico: {
          mint: "#D8F4E3",
          yellow: "#FFE500",
          turquoise: "#38B593",
          darkGreen: "#003347",
          white: "#FFFFFF"
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cardHover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(-45deg, #D8F4E3, #38B593, #FFE500, #D8F4E3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
