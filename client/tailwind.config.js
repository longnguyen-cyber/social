module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      display: ['group-hover'],
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px'
      },
      fontSize: {
        DEFAULT: '8px',
        xss: '10px'
      }
    }
  },
  plugins: []
}
