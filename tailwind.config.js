/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode via class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example to extend your color palette
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        error: "var(--color-error)",
        btnText: "var(--color-btn-text)",
        "hover-shadow": "var(--hover-shadow)",
      },
      fontFamily: {
        sans: "var(--font-sans)", // Custom font
        mono: "var(--font-mono)", // Monospace font
      },
    },
    container: {
      center: true, // Centers container by default
      padding: "1rem", // Adds padding for all breakpoints
      screens: {
        sm: "640px", // Applies at screen width of 640px and up
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
