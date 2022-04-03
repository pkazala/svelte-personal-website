module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        liquido: ["LIQUIDO"],
        glassure: ["GLASSURE"]
      },
      backgroundImage: {
        'dark-gh': "url('src/Assets/SVG/git1.svg')",
        'dark-gh-h': "url('src/Assets/SVG/git2.svg')",
        'light-gh': "url('src/Assets/SVG/git3.svg')",
        'light-gh-h': "url('src/Assets/SVG/git4.svg')",
        'light-linked': "url('src/Assets/SVG/linked1.svg')",
        'light-linked-h': "url('src/Assets/SVG/linked2.svg')",
        'dark-linked': "url('src/Assets/SVG/linked3.svg')",
        'dark-linked-h': "url('src/Assets/SVG/linked4.svg')",
      }
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'mine': '900px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [require("daisyui")],
}
