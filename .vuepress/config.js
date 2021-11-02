const { path } = require("@vuepress/utils");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Critters = require("critters-webpack-plugin");

// DISABLE for PROD. Use webpack-bundle-analyzer
const isAnalyze = false;
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  lang: "en-US",
  title: "ValueHeads",
  description: "ValueHeads Free Value-Entrepreneurship Course and Community",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://www.googletagmanager.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://www.google-analytics.com",
        crossorigin: "",
      },
    ],
    // see https://stackoverflow.com/a/60477207
    [
      "link",
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap",
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],
  ],

  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    logo: "/images/valueheads-logo.svg",
    domain: "https://valueheads.org",
    darkMode: false,
    themePlugins: {
      mediumZoom: false,
    },
    navbar: [
      // NavbarItem
      // {
      //   text: "Get Superpowers",
      //   link: "/#entrepreneurship-superpowers",
      // },
      // {
      //   text: "Ultimate Entrepreneurship Course",
      //   link: "/#entrepreneurship-course",
      // },
      // {
      //   text: "About",
      //   link: "/#about",
      // },
      {
        text: "Help us get to 500 supporters",
        link: "/#cta",
      },
      // NavbarGroup
      // {
      //   text: "Group",
      //   children: ["/group/foo.md", "/group/bar.md"],
      // },
    ],
  },

  plugins: [
    [
      path.resolve(__dirname, "./lib/vuepress-seo-plugin-v2/index.js"),
      {
        /* options */
      },
    ],

    // Docs: https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html
    // Modified locally
    [
      path.resolve(__dirname, "./lib/plugin-google-analytics/index.js"),
      {
        id: "G-BJE62W7VBG",
      },
    ],

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
    "@": path.resolve(__dirname, "."),
  },

  extraWatchFiles: ["../tailwind.config.js"],

  // directives needs transformation https://github.com/vuejs/vue-next/issues/3298
  bundlerConfig: {
    // configureWebpack(config, isServer, isBuild) {
    //   if (!isBuild) return {};

    //   return {
    //     plugins: [
    //       // https://github.com/jantimon/html-webpack-plugin
    //       new HtmlWebpackPlugin(),
    //       new Critters({
    //         // optional configuration (see https://www.npmjs.com/package/critters-webpack-plugin)
    //         inlineThreshold: 100000,
    //       }),
    //     ],
    //   };
    // },

    chainWebpack(config) {
      // see https://github.com/mrbbot/vue-cli-plugin-webpack-bundle-analyzer
      if (isAnalyze)
        config
          .plugin("webpack-bundle-analyzer")
          .use(BundleAnalyzerPlugin)
          .init((Plugin) => new Plugin({ analyzerMode: "static" }));

      config.module
        .rule("svg")
        .test(/\.svg/)
        .use("svg-url-loader")
        .loader("svg-url-loader")
        .options({
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024,
          // Remove quotes around the encoded URL –
          // they’re rarely useful
          noquotes: true,
        });
    },
    vue: {
      compilerOptions: {
        directiveTransforms: {
          // v-scroll-to -> scroll-to (remove v-)
          "scroll-to": () => ({
            props: [],
            needRuntime: true, // <- remember this
          }),
        },
      },
    },
  },
};
