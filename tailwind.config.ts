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
      colors: {
        "white": "#FAFAFA",
        "black": "#060606"
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
        firstBubbleAnimation: "firstBubbleAnimation 3s ease-in-out infinite alternate",
        secondBubbleAnimation: "secondBubbleAnimation 3s ease-in-out infinite alternate",
        thirdBubbleAnimation: "thirdBubbleAnimation 3s ease-in-out infinite alternate",
        fourthBubbleAnimation: "fourthBubbleAnimation 3s ease-in-out infinite alternate",
        fifthBubbleAnimation: "fifthBubbleAnimation 3s ease-in-out infinite alternate",
        sixthBubbleAnimation: "sixthBubbleAnimation 3s ease-in-out infinite alternate",
        sevenBubbleAnimation: "seventhBubbleAnimation 3s ease-in-out infinite alternate",
        eightBubbleAnimation: "eighthBubbleAnimation 3s ease-in-out infinite alternate",
        nineBubbleAnimation: "ninthBubbleAnimation 3s ease-in-out infinite alternate",
        tenthBubbleAnimation: "tenthBubbleAnimation 3s ease-in-out infinite alternate",
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
        firstBubbleAnimation: {
          "0%, 100%": { top: "202px", right: "424px" },
          "50%": { top: "190px", right: "400px" },
        },
        secondBubbleAnimation: {
          "0%, 100%": { top: "42px", right: "444px" },
          "50%": { top: "30px", right: "434px" },
        },
        thirdBubbleAnimation: {
          "0%, 100%": { top: "458px", right: "530px" },
          "50%": { top: "448px", right: "520px" },
        },
        fourthBubbleAnimation: {
          "0%, 100%": { top: "24px", right: "180px" },
          "50%": { top: "8px", right: "174x" },
        },
        fifthBubbleAnimation: {
          "0%, 100%": { top: "560px", right: "424px" },
          "50%": { top: "540px", right: "402px" },
        },
        sixthBubbleAnimation: {
          "0%, 100%": { top: "388px", right: "72px" },
          "50%": { top: "370px", right: "60px" },
        },
        seventhBubbleAnimation: {
          "0%, 100%": { top: "518px", right: "72px" },
          "50%": { top: "500px", right: "60px" },
        },
        eighthBubbleAnimation: {
          "0%, 100%": { top: "388px", right: "220px" },
          "50%": { top: "370px", right: "210px" },
        },
        ninthBubbleAnimation: {
          "0%, 100%": { top: "236px", right: "40px" },
          "50%": { top: "216px", right: "30px" },
        },
        tenthBubbleAnimation: {
          "0%, 100%": { top: "170px", right: "2px" },
          "50%": { top: "160px", right: "12px" },
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
