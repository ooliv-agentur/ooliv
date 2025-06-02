
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
          warning: "#F9A825" // Amber for warning states
        },
        // Medicosearch color scheme
        medico: {
          mint: "#7DDCC0", // Main mint green from medicosearch
          mintLight: "#B8E6D1", // Lighter mint
          mintDark: "#5BC9A3", // Darker mint
          yellow: "#F4E04D", // Bright yellow from buttons
          yellowHover: "#F0DC3C", // Darker yellow for hover
          navy: "#1E3A5F", // Dark navy blue from text
          navyLight: "#2D4B6B", // Lighter navy
          white: "#FFFFFF",
          lightGray: "#F8F9FA",
          mediumGray: "#E9ECEF"
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
      },
    },
  },
  plugins: [],
} satisfies Config;
