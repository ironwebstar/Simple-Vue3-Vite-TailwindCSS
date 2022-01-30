module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'test-primary': '#343A40',
      'test-primary-light': '#F4F6F8',
      'test-secondary': '#253CF2',
      'test-secondary-light': '#E5E8FD',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
