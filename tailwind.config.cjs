const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,md}",
    // Keep existing values and append the following:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addComponents }) {
      addComponents({
        '.button': {
          padding: '.5rem 1rem',
          'margin-bottom': '1rem',
          borderRadius: '.25rem',
          fontWeight: '400',
        }
      })
    }),
    // Keep any existing plugins present and append the following:
		require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')
  ]
};

module.exports = config;