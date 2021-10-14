const { path } = require("@vuepress/utils");

module.exports = {
  lang: "en-US",
  title: "ValueHeads",
  description: "ValueHeads Free Value-Entrepreneurship Course and Community",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    // [
    //   "script",
    //   { src: "../node_modules/lazysizes/lazysizes.min.js", async: "" },
    // ],
  ],

  //   theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/images/v.svg",
  },

  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],

    // Docs https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html#usage
    [
      "@vuepress/medium-zoom",
      {
        // disable zoom. only for img with class zoom-img
        selector: "img.zoom-img",
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {},
      },
    ],
  ],

  alias: {
    "@": path.resolve(__dirname, ".vuepress"),
  },

  extraWatchFiles: ["../tailwind.config.js"],
};
