const colors = require('tailwindcss/colors');

module.exports = {
  // purge: ['./src/**/*{html, js}'],
  content: ['./src/**/*{html, js}', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      ...colors,
    },
  },
};
