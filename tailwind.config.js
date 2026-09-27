/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: {
    blush: { DEFAULT: '#EBD3CE', soft: '#E8CFC9' },
    sage: { DEFAULT: '#A9C0AE', deep: '#93AC9C' },
    ivory: { DEFAULT: '#F5EDE4', paper: '#FBF6EE' },
    wood: { DEFAULT: '#8B6544', light: '#A47B52' },
    rose: '#D9A8A0'
  }, fontFamily: { hand: ['Caveat', 'cursive'], display: ['Fraunces', 'serif'], round: ['Nunito', 'sans-serif'] } } },
  plugins: []
}
