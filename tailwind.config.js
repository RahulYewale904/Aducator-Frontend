module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primeBlue: "#218FF2",
        primeVoilet: "#8E44AD",
      },
      screens: {
        xs: { max: "480px" },
        sm: { max: "780px" },
      },
    },
  },
  plugins: [],
};
