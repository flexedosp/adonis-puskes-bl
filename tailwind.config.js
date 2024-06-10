/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.edge',
    './resources/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require('flowbite/plugin')],
}
