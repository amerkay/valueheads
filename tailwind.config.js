// See https://irian.to/blogs/setting-up-vuepress-with-tailwindcss/

module.exports = {
  mode: "jit", // for some reason did not work!

  corePlugins: { preflight: false },
  important: true, // Components in Markdown require this

  purge: {
    content: ["./.vuepress/**/*.@(js|md|vue|html)", "./.course/**/*.md"],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#3F2680",
          50: "#F1EDFA",
          100: "#DBD2F2",
          200: "#AE9BE1",
          300: "#8264D1",
          400: "#5A36B7",
          500: "#3F2680",
          600: "#372170",
          700: "#301D61",
          800: "#281851",
          900: "#201341",
        },
        yellow: {
          DEFAULT: "#FBCD22",
          50: "#FFFBED",
          100: "#FEF6D6",
          200: "#FDECA9",
          300: "#FDE17C",
          400: "#FCD74F",
          500: "#FBCD22",
          600: "#E1B204",
          700: "#AA8603",
          800: "#735B02",
          900: "#3C2F01",
        },
        green: {
          DEFAULT: "#19B873",
          50: "#D4F9E9",
          100: "#BCF6DD",
          200: "#8AEFC3",
          300: "#59E8AA",
          400: "#27E291",
          500: "#19B873",
          600: "#14905A",
          700: "#0E6740",
          800: "#093F27",
          900: "#03160E",
        },
        olive: {
          DEFAULT: "#5A5745",
          50: "#E8E7E1",
          100: "#DAD8CE",
          200: "#BDBAA9",
          300: "#A09C83",
          400: "#807B62",
          500: "#5A5745",
          600: "#464336",
          700: "#323026",
          800: "#1D1C17",
          900: "#090907",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};