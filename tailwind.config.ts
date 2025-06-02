
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        border: "#e2e8f0", // Adding border color explicitly
        brand: {
          primary: "#006064", // Teal primary color
          primaryHover: "#004D40", // Darker teal for hover states
          secondary: "#FF9800", // Orange accent
          secondaryHover: "#F57C00", // Darker orange for hover states
          heading: "#0D1B2A", // Dark blue-black for headings
          text: "#2B2D42", // Dark slate for body text
          background: "#F5F7FA", // Light gray background
          backgroundAlt: "#E9ECEF", // Slightly darker gray for alternating sections
          footer: "#0D1B2A", // Dark blue-black for footer
          success: "#2E7D32", // Green for success states
          error: "#C62828", // Red for error states
          warning: "#F9A825", // Amber for warning states
          // New medicosearch-inspired mint green palette
          mint: {
            50: "#f0fdfa",
            100: "#ccfbf1", 
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6", // Main mint green
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a"
          }
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cardHover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'mint': '0 4px 14px 0 rgba(20, 184, 166, 0.15)',
        'mintHover': '0 6px 20px 0 rgba(20, 184, 166, 0.25)',
      },
      backgroundImage: {
        'gradient-mint': 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '33%': {
            transform: 'translateY(-20px) translateX(10px)',
          },
          '66%': {
            transform: 'translateY(10px) translateX(-5px)',
          },
        },
        'float-reverse': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '33%': {
            transform: 'translateY(15px) translateX(-10px)',
          },
          '66%': {
            transform: 'translateY(-10px) translateX(8px)',
          },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
