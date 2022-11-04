const {
  black
} = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{html,js}"],

  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    screens: {
      "ss": "425",
      "xsm": "525px",
      "sm": "768px",
      "md": "992px",
      "lg": "1200px",
      "xl": "1240px",
      "2xl": "1440px",

    },
    extend: {
      colors: {
        "Middle-Green-Yellow": "#A4B660",
        "place-gray": "#BEBBBB",
        "border-grey": "#CCCCCC",
        "sky-blue": "#00ADEF",
        "orange": "#FE0000",
        "dim-grey": "#E9E7E7",
        "dim-black": "#384450",
        "Chinese-Silver": "#CCCCCC",
        "black": "#000",
        "Sonic-Silver": "#7A7A7A",
        "Charcoal": "#384450",
        "Yankees-Blue": "#3F361F",
        "border": "#D9D9D9",
        "red": "#CF1717",
        "bg-black": "rgba(0,0,0,0.5)",
        "Alice-Blue": "#F2FBFF",
        "lite-yellow": "#FFE49F",
        "liteblue": "#C2EFFF",
        "GrayX11": "#BBB9B9",
        "UE-Red": "#BE0808",
        "Malachite-Green": "#57EF94",
        "Semi-Black": "#1c1c1c"
      },
 

    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({
      addComponents
    }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "730px",
          },
          "@screen md": {
            maxWidth: "900px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1100px",
          },
          "@screen 2xl": {
            maxWidth: "1300px",
          },
        },
      });
    },
  ],
  prefix: "om-",
};