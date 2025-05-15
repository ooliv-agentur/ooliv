
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Add safelist to prevent Tailwind from purging critical classes
  safelist: [
    'bg-hero-pattern',
    'bg-hero-pattern::before',
    'bg-hero-pattern::after'
  ],
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
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cardHover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
