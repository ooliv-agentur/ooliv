
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
          primary: "#38B593", // Updated to medico-turquoise
          primaryHover: "#2a8a73",
          secondary: "#FFE500", // Updated to medico-yellow
          secondaryHover: "#e6ce00",
          heading: "#003347", // Updated to medico-darkGreen
          text: "#003347", // Updated to medico-darkGreen
          background: "#D8F4E3", // Updated to medico-mint
          backgroundAlt: "#D8F4E3", // Updated to medico-mint
          footer: "#003347", // Updated to medico-darkGreen
          success: "#38B593", // Updated to medico-turquoise
          error: "#C62828",
          warning: "#FFE500" // Updated to medico-yellow
        },
        // Primary medicosearch.ch color palette
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
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'gradient-slow': 'gradient 20s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
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
        'hero-gradient-animated': 'linear-gradient(-45deg, #D8F4E3, #38B593, #FFE500, #D8F4E3, #38B593, #D8F4E3)',
      },
      backgroundSize: {
        '400': '400% 400%',
      }
    },
  },
  plugins: [],
} satisfies Config;
