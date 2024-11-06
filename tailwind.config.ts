import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#5E8057',    // Green
        gray1: '#A1A298',    // Gray 1
        gray2: '#B7BEB8',    // Gray 2
        black: '#24221D',    // Black
        white: '#F6F7F5',    // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['56px', { lineHeight: '61.6px' }],
        'heading-2': ['48px', { lineHeight: '52.8px' }],
        'heading-3': ['40px', { lineHeight: '44px' }],
        'heading-4': ['32px', { lineHeight: '35.2px' }],
        'heading-5': ['24px', { lineHeight: '26.4px' }],
        'heading-6': ['20px', { lineHeight: '22px' }],
        'large-bold': ['20px', { lineHeight: '34px' }],
        'large-regular': ['20px', { lineHeight: '34px' }],
        'medium-bold': ['18px', { lineHeight: '160%' }],
        'medium-regular': ['18px', { lineHeight: '160%' }],
        'normal-bold': ['16px', { lineHeight: '156%' }],
        'normal-regular': ['16px', { lineHeight: '156%' }],
        'small-bold': ['14px', { lineHeight: '155%' }],
      },
    },
  },
  plugins: [],
};
export default config;
