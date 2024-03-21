import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '-1px',
        'xl': '1440px',
        '2xl': '-1px',
      },
      animation: {
        marqueeLeft: 'marqueeLeft 25s linear infinite',
        marqueeLeft2: 'marqueeLeft2 25s linear infinite',
        marqueeRight: 'marqueeRight 25s linear infinite',
        marqueeRight2: 'marqueeRight2 25s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeLeft2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeRight2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      fontFamily: {
        sourceSans: "Source Sans Pro",
        ysabeau: "Ysabeau SC",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
