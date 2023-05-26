/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "rgba(0,0,0,0.5)",
      },
      boxShadow: {
        "type-1": "1px 3px 7px rgba(0,0,0,0.1)",
      },
      screens: {
        "layout-1400px": "1400px",
        "layout-1000px": "1000px",
        "layout-875px": "875px",
        "layout-749px": "749px",
        "layout-612px": "612px",
        "layout-548px": "548px",
        "layout-400px": "400px",
      },
    },
  },
  plugins: [],
};
