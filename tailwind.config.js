module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Poppins",
      tertiary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/bgwave3.svg')",
        bgabout: "url(./assets/bgabout.svg)",
        about: "url('./assets/about1.png')",
        services: "url('./assets/bgservices.svg')",
        work: "url('./assets/bgwork.svg')",
        contact: "url('./assets/bgcontact.svg')"
      },
    },
  },
  plugins: [],
};
