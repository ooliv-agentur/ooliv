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
        
        // New MedicoSearch-inspired palette
        primary: {
          mintgreen: '#D3F6E6',
          darkgreen: '#00403D',
          yellow: '#FFE600',
        },
        secondary: {
          lightblue: '#A6E6D9',
          white: '#FFFFFF',
          darkgray: '#333333',
        },
        tertiary: {
          pastelgreen: '#CDF5E3',
          lightyellow: '#FFF38A',
          black: '#000000',
        },
        
        // Legacy brand colors (maintaining compatibility)
        brand: {
          primary: "#A6E6D9", // Updated to secondary-lightblue
          primaryHover: "#D3F6E6",
          secondary: "#FFE600", // Updated to primary-yellow
          secondaryHover: "#FFF38A", // Updated to tertiary-lightyellow
          heading: "#00403D", // Updated to primary-darkgreen
          text: "#333333", // Updated to secondary-darkgray
          background: "#D3F6E6", // Updated to primary-mintgreen
          backgroundAlt: "#CDF5E3", // Updated to tertiary-pastelgreen
          footer: "#00403D", // Updated to primary-darkgreen
          success: "#A6E6D9", // Updated to secondary-lightblue
          error: "#C62828",
          warning: "#FFE600" // Updated to primary-yellow
        },
        
        // Keep existing medico colors for backward compatibility
        medico: {
          mint: "#D3F6E6", // Updated to primary-mintgreen
          yellow: "#FFE600", // primary-yellow
          turquoise: "#A6E6D9", // Updated to secondary-lightblue
          darkGreen: "#00403D", // Updated to primary-darkgreen
          white: "#FFFFFF"
        }
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '1.5' }],
        'h2': ['32px', { lineHeight: '1.5' }],
        'h3': ['26px', { lineHeight: '1.5' }],
        'body': ['18px', { lineHeight: '1.5' }],
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
        'hero-gradient': 'linear-gradient(-45deg, #D3F6E6, #A6E6D9, #FFE600, #D3F6E6)',
        'hero-gradient-animated': 'linear-gradient(-45deg, #D3F6E6, #A6E6D9, #FFE600, #D3F6E6, #A6E6D9, #D3F6E6)',
      },
      backgroundSize: {
        '400': '400% 400%',
      }
    },
  },
  plugins: [],
} satisfies Config;
