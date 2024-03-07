/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontSize: {
      lg: "clamp(1.125rem, 1vw, 3rem)",
      sm: "clamp(0.875rem, 1vw, 2.5rem)",
      xl: "clamp(1.25rem, 1vw, 3.2rem)",
      xs: "clamp(0.75rem, .5vw, 2rem)"
    },
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "desaturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },

      fontFamily: {
        "primary-font": ["Kumbh Sans", "sans-serif"],
      },

      screens: {
        sm: "375px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};

