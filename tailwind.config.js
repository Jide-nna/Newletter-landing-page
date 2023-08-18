/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      ssm : "360",
      sssm : "320"
    },
    extend: {
      colors: {
        'main': 'hsl(234, 29%, 20%)',
        "White": "hsl(0, 0%, 100%)" ,
        "Charcoal Grey": "hsl(235, 18%, 26%)",
        "Grey": 'hsl(231, 7%, 60%)',
        'red' : '#dc2626',
        'tomato': 'hsl(4, 100%, 67%)'
      },
      backgroundImage: {
        'desktop' : "url('./src/assets/images/illustration-sign-up-desktop.svg')",
      }
    },
  },
  plugins: [],
}
