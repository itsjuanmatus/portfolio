module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ["Roboto", "Helvetica", "sans-serif"],
    },

    extend: {
      colors: {
        blue: {
          137: "#3A72E4",
        },
        purple: {
          137: "#090621",
          138: "#383657"
        },
        gray: {
          137: "#E5E7EB",
        }
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
};
