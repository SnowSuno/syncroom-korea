/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      white: "#ffffff",
      gray: {
        50: "#f9fafb",
        100: "#f2f4f6",
        200: "#e5e8eb",
        300: "#d1d6db",
        400: "#b0b8c1",
        500: "#8b95a1",
        600: "#6b7684",
        700: "#4e5968",
        800: "#333d4b",
        900: "#191f28",
      },

      primary: {
        default: "#26a797",
      },
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      spacing: {
        fold: "theme(spacing[16])",
        expand: "theme(spacing[80])",
        profile: "theme(spacing[10])",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(theme(spacing[96]), 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
