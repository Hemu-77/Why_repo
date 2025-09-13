// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        textStroke: {
          '1': '1px',
          '2': '2px',
          // you can add more sizes as needed
        },
        colors: {
          'outline-gray': '#F2F2F2', // or any color you want for the outline
        }
      },
    },
    plugins: [
      require('tailwindcss-text-stroke'), // You'll need to install a plugin
    ],
  }