
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
        'gradient-flow': 'gradient-flow 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-diagonal': 'float-diagonal 8s ease-in-out infinite',
        'float-reverse-diagonal': 'float-reverse-diagonal 10s ease-in-out infinite',
        'float-wave': 'float-wave 7s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
        'orbit-reverse': 'orbit-reverse 12s linear infinite',
        'pulse-scale': 'pulse-scale 4s ease-in-out infinite',
        'zigzag': 'zigzag 5s ease-in-out infinite',
        'bounce-around': 'bounce-around 6s ease-in-out infinite',
        'spiral': 'spiral 20s linear infinite',
        'color-morph': 'color-morph 8s ease-in-out infinite',
        'morph-size': 'morph-size 6s ease-in-out infinite',
        'expand-contract': 'expand-contract 10s ease-in-out infinite',
        'slow-drift': 'slow-drift 25s ease-in-out infinite',
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
        'gradient-flow': {
          '0%': {
            'background-position': '0% 0%'
          },
          '25%': {
            'background-position': '100% 100%'
          },
          '50%': {
            'background-position': '100% 0%'
          },
          '75%': {
            'background-position': '0% 100%'
          },
          '100%': {
            'background-position': '0% 0%'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)'
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.05)'
          }
        },
        'float-diagonal': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)'
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.1) rotate(120deg)'
          },
          '66%': {
            transform: 'translate(-25px, -15px) scale(0.9) rotate(240deg)'
          }
        },
        'float-reverse-diagonal': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)'
          },
          '33%': {
            transform: 'translate(-30px, 20px) scale(1.15) rotate(-120deg)'
          },
          '66%': {
            transform: 'translate(25px, 15px) scale(0.85) rotate(-240deg)'
          }
        },
        'float-wave': {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px) scale(1)'
          },
          '25%': {
            transform: 'translateX(20px) translateY(-10px) scale(1.05)'
          },
          '50%': {
            transform: 'translateX(0px) translateY(-20px) scale(1.1)'
          },
          '75%': {
            transform: 'translateX(-20px) translateY(-10px) scale(1.05)'
          }
        },
        'orbit': {
          '0%': {
            transform: 'rotate(0deg) translateX(50px) rotate(0deg) scale(1)'
          },
          '25%': {
            transform: 'rotate(90deg) translateX(50px) rotate(-90deg) scale(1.2)'
          },
          '50%': {
            transform: 'rotate(180deg) translateX(50px) rotate(-180deg) scale(0.8)'
          },
          '75%': {
            transform: 'rotate(270deg) translateX(50px) rotate(-270deg) scale(1.1)'
          },
          '100%': {
            transform: 'rotate(360deg) translateX(50px) rotate(-360deg) scale(1)'
          }
        },
        'orbit-reverse': {
          '0%': {
            transform: 'rotate(0deg) translateX(40px) rotate(0deg) scale(1)'
          },
          '100%': {
            transform: 'rotate(-360deg) translateX(40px) rotate(360deg) scale(1)'
          }
        },
        'pulse-scale': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.7'
          },
          '50%': {
            transform: 'scale(1.3)',
            opacity: '0.4'
          }
        },
        'zigzag': {
          '0%, 100%': {
            transform: 'translate(0px, 0px)'
          },
          '12.5%': {
            transform: 'translate(15px, -10px)'
          },
          '25%': {
            transform: 'translate(30px, 0px)'
          },
          '37.5%': {
            transform: 'translate(15px, 10px)'
          },
          '50%': {
            transform: 'translate(0px, 20px)'
          },
          '62.5%': {
            transform: 'translate(-15px, 10px)'
          },
          '75%': {
            transform: 'translate(-30px, 0px)'
          },
          '87.5%': {
            transform: 'translate(-15px, -10px)'
          }
        },
        'bounce-around': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '20%': {
            transform: 'translate(25px, -25px) scale(1.1)'
          },
          '40%': {
            transform: 'translate(-20px, -15px) scale(0.9)'
          },
          '60%': {
            transform: 'translate(-25px, 20px) scale(1.05)'
          },
          '80%': {
            transform: 'translate(15px, 25px) scale(0.95)'
          }
        },
        'spiral': {
          '0%': {
            transform: 'rotate(0deg) translateX(30px) rotate(0deg) scale(1)'
          },
          '100%': {
            transform: 'rotate(360deg) translateX(60px) rotate(-360deg) scale(1.2)'
          }
        },
        'color-morph': {
          '0%, 100%': {
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '25%': {
            filter: 'hue-rotate(90deg) brightness(1.2)'
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(0.8)'
          },
          '75%': {
            filter: 'hue-rotate(270deg) brightness(1.1)'
          }
        },
        'morph-size': {
          '0%, 100%': {
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '50%'
          },
          '33%': {
            transform: 'scale(1.5) rotate(120deg)',
            borderRadius: '30%'
          },
          '66%': {
            transform: 'scale(0.7) rotate(240deg)',
            borderRadius: '40%'
          }
        },
        'expand-contract': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.6'
          },
          '50%': {
            transform: 'scale(1.8)',
            opacity: '0.2'
          }
        },
        'slow-drift': {
          '0%, 100%': {
            transform: 'translate(0px, 0px) rotate(0deg)'
          },
          '25%': {
            transform: 'translate(40px, -30px) rotate(90deg)'
          },
          '50%': {
            transform: 'translate(20px, 40px) rotate(180deg)'
          },
          '75%': {
            transform: 'translate(-30px, 20px) rotate(270deg)'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
