/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D4717A",
          hover: "#C25F69",
        },
        "brand-hover": "#C25F69",
        "brand-rose": "#D07578",
        "card-beige": "#E9E5D2",
        ink: "#141414",
        yellow: "#FFCC00",
        "ellipse-border": "rgba(208, 117, 120, 0.25)",
        text: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
        instrument: ["var(--font-instrument)", "Instrument Sans", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
      },
      fontSize: {
        "fluid-display": "var(--font-fluid-display)",
        "fluid-hero": "var(--font-fluid-hero)",
        "fluid-h2": "var(--font-fluid-h2)",
        "fluid-h3": "var(--font-fluid-h3)",
        "fluid-body": "var(--font-fluid-body)",
        "fluid-small": "var(--font-fluid-small)",
      },
      spacing: {
        "fluid-gutter": "var(--space-fluid-gutter)",
        "fluid-gap": "var(--space-fluid-gap)",
        "fluid-section": "var(--space-fluid-section)",
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        desktop: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
