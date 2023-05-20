/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      big: '0.17em',
    },
    extend: {
      gridTemplateColumns: {
        'LeftRight': '2fr 7fr 3fr',
        'Profile': '2fr 10fr',
        '32': '3fr 2fr',
        'post': '32px 1fr'
      }
    },
  },
  plugins: [],
}
