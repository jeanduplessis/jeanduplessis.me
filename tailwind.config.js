module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
       'sans': ['Roboto','Helvetica', 'Arial', 'sans-serif'],
       'serif': ['Roboto Slab','Helvetica', 'Arial', 'sans-serif'],
       'mono': ['Roboto Mono', 'SFMono-Regular', 'monospace'],
      },
    letterSpacing: { widest: "0.25em" },
    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
