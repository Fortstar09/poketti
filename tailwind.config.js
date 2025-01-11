/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primary: '#EF8354',
        grey: '#6A6A70',
        black: '#301A11',
        grey1: '#374151',
        stroke: '#F6F6F6',
        strokebd: '#E8E8E8',
      },
      backgroundImage: {
        'herobgLine': "url('images/bg-lines.png')",
        'heroBg': "url('images/hero-img-back.png')",
        'chatBg': "url('images/infoBg.svg')",
        'reasonbgLine': "url('images/reason-bg.png')",
        'moreRbgLine': "url('images/moreRbg-line.png')",
        'moreImg': "url('images/moreImg.png')",
        'actionBg': "url('images/actionBg.png')",
      },
      fontFamily: {
        aeonik: 'aeonik',
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require('tailwindcss-motion')],
}

