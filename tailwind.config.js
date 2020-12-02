module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-blue': '#13218C',
        'white-lilac': '#F8F8FC',
        'bright-turq': '#00FFC4',
        'electric-violet': '#753EFF',
        'biloba-violet': '#B4B7EE',
      },
      fontFamily: {
        logo: ['Kodchasan'],
        logoTwo: ['Montserrat Alternates']
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}