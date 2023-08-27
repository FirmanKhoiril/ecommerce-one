/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./utils/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3b82f6",
        secondary: "#C439ED",
        card: "#fafafa",
      },
      fontWeight: {
        extrabold: "900",
      },
      textColor: {
        primary: "#3b82f6",
      },
      fontSize: {
        xs: "12px",
        xss: "48px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
