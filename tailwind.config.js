/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        "color-1": "#2575fc",
        gray: {
          "100": "rgba(255, 255, 255, 0.1)",
          "200": "rgba(255, 255, 255, 0.15)",
        },
        primary: "#134edf",
        "dashboard-text": "#030229",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        inherit: "inherit",
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "177xl": "196px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "37xl": "56px",
      "5xl": "24px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
