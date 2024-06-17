import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
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
        bigSphereAnimation: "bigSphereAnimation 3s ease-in-out infinite alternate",
        smallSphereAnimation: "smallSphereAnimation 3s ease-in-out infinite alternate",
        bigPyramidAnimation: "bigPyramidAnimation 3s ease-in-out infinite alternate",
        smallPyramidAnimation: "smallPyramidAnimation 3s ease-in-out infinite alternate",
        stickAnimation: "stickAnimation 3s ease-in-out infinite alternate",
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
        },
        bigSphereAnimation: {
          "0%, 100%": { top: "50px", left: "32px" },
          "50%": { top: "30px", left: "12px" },
        },
        smallSphereAnimation: {
          "0%, 100%": { bottom: "86px", right: "58px" },
          "50%": { bottom: "56px", right: "38px" },
        },
        bigPyramidAnimation: {
          "0%, 100%": { bottom: "54px", left: "18px" },
          "50%": { bottom: "34px", left: "0px" },
        },
        smallPyramidAnimation: {
          "0%, 100%": { top: "20px", right: "80px" },
          "50%": { top: "0px", right: "60px" },
        },
        stickAnimation: {
          "0%, 100%": { top: "160px", right: "32px" },
          "50%": { top: "150px", right: "20px" },
        },
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
