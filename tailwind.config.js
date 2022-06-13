module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'sans-serif'],
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          137: '#3A72E4',
        },
        purple: {
          137: '#090621',
          138: '#383657',
        },
        gray: {
          136: '#F3F3F3',
          137: '#E5E7EB',
          138: '#A8A8A8',
          139: '#414141',
          140: '#686868',
          background: '#111111',
        },
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
    },
  },

  plugins: [],
};
