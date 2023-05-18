/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'LeftRight': '2fr 7fr 3fr',
        'Profile': '2fr 10fr',
        'post': '32px 1fr'
      }
    },
  },
  plugins: [],
}
