/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      red: '#f00',
      white: '#fff',
      black: '#000',
      'demo-gray': '#f5f5f5',
      'demo-blue': '#00f',
      'demo-green': '#0f0',
      'demo-yellow': '#ff0',
      'demo-pink': '#f0f',
      'demo-orange': '#f90',
      'demo-purple': '#90f',
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
