/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainBlue':'#003F62',
        'mainYellow':'#EDA415',
        'white':'#fff',
        'lightBlue':'#E2F4FF',
        'skyBlue':'#87BCD9',
        'textColor': '#292D32',
        'greyColor': '#B6B6B6',
        'cartBackground':'#E2F4FF',
      }
    },
  },
  plugins: [],
}

