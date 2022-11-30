/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#64748b",
        light: "#e2e8f0",
        dark: "#0f172a",
        instagram: "#E4405F",
        line: "#00C300",
        whatsapp: "#25D366",
        twitter: "#1DA1F2",
        tiktok: "#000000",
        linkedin: "#0A66C2",
        discord: "#5865F2",
        tailwind: "#0ea5e9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
