module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
      fontFamily: {
       'sans': ['Roboto','Helvetica', 'Arial', 'sans-serif'],
       'serif': ['Roboto Slab','Helvetica', 'Arial', 'sans-serif'],
       'mono': ['Roboto Mono', 'SFMono-Regular', 'monospace'],
      },
    letterSpacing: { widest: "0.25em" },
    extend: {},
  },  
  plugins: [require("@tailwindcss/typography")],
};
