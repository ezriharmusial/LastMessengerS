const plugin = require('tailwindcss/plugin')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.button': {
          padding: '.5rem 1rem',
          'margin-bottom': '1rem',
          borderRadius: '.25rem',
          fontWeight: '400',
        }
      })
    })
  ]
};

module.exports = config;