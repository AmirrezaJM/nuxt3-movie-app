/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      screens: {
        'xs': "576px",
        'sm': "768px",
        'md': "991px",
        'lg': "1024px",
        'xl': "1280px",
      },
      extend: {
        backgroundImage: {
          "hero-pattern":
            "linear-gradient(to bottom, rgb(25, 29, 36), transparent), url('https://cdn.30nama.com/cover/306840_30NAMA.webp?1664133141')",
        },
      },
    },
    plugins: [],
  };
  