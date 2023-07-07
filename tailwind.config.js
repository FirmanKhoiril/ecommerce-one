/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#7c3aed",
        secondary: "#ab47ed",
        card: "#fafafa",
      },
      fontWeight: {
        extrabold: "900",
      },
      fontSize: {
        xs: "12px",
        xss: "48px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
