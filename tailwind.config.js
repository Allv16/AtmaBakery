/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cormorant: ["Cormorant"],
      mulish: ["Mulish"],
    },
    extend: {
      colors: {
        primary: "#29565B",
        "primary-dark": "#18373B",
        "primary-light": "#537478",
        secondary: "#B69231",
        "secondary-dark": "#634E16",
        "secondary-light": "#F5F1E4",
        black: "#040A0A",
        white: "#FBFBFB",
      },
      backgroundImage: (theme) => ({
        texture: "url('/src/assets/images/others/Texture.png')",
      }),
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#29565B",
          "primary-content": "#FBFBFB",
          secondary: "#B69231",
          "secondary-content": "#FBFBFB",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
