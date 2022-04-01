module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        liquido: ["LIQUIDO"],
        glassure: ["GLASSURE"]
      },
    },
  },
  plugins: [require("daisyui")],
}
