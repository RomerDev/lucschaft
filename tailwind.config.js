module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        light: '#D6D6D6',
        dark: '#2C2C2C',
        darker: '#191919'
      },
      'primary': '#FDF529',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      'body': ['termina', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
