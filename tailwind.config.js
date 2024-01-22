/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f0f0",
        white: "#fff",
        rosa: "#ff5887",
        black: "#333",
        dodgerblue: "#0d68c5",
        gray: "#747474",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        montserrat: "Montserrat",
        inherit: "inherit",
        "sub-titulo-1": "Poppins",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
