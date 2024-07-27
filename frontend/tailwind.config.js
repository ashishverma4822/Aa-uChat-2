/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4DA6FF',
        'dark-blue': '#0c1e33',
        'dark-gray': '#333333',
        'white-text': '#80848c',
        'custom-dark': '#010f24',
      },
      boxShadow: {
        'neon-blue': '0 0 10px 2px #00FFFF',
      },
      backgroundImage: {
        'custom-bg': "url('https://wallpapers.com/images/featured/neon-qrmwb65rtvlrzu8q.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
}