/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-epilogue)"],
        sans: ["var(--font-open-sans)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "pr-primary": "#FFC702",
        "pr-black": "#060606",
        "pr-gray-dark": "#151515",
        "pr-gray-text": "#BCBCBC",
        "pr-gray-content": "#F2F2F2",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      screens: {
        xl: "1024px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1800px",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.35s ease-in",
        "accordion-up": "accordion-up 0.35s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
