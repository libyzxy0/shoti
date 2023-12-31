// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://closedpersonify.com/6d/8c/e5/6d8ce5b25be546d990d3fc825284770f.js',
          type: 'text/javascript'
        }, 
        {
           innerHTML: `
             let atOptions = {
             'key' : 'c8c0f7d71ac39467b9b1b324af84da93',
             'format' : 'iframe',
             'height' : 300,
             'width' : 160,
             'params' : {}
           };
           `,
            type: 'text/javascript',
            charset: 'utf-8',
        },
        {
            src: 'https://closedpersonify.com/c8c0f7d71ac39467b9b1b324af84da93/invoke.js',
            type: 'text/javascript',
            async: true,
            defer: true,
        },
      ]
    }
  },
  devtools: { enabled: false },
  site: {
    url: "https://shoti.vercel.app",
  },
  sitemap: {
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
      { label: "Hreflangs", select: "count(xhtml)", width: "25%" },
    ],
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "0.0.0.0",
      },
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-gtag",
    "nuxt-simple-sitemap",
  ],
  css: ["@/assets/scss/global.scss", "@/assets/scss/markdown.scss"],
  googleFonts: {
    families: {
      Nunito: [300],
      "Ubuntu Mono": [400],
    },
  },
  content: {
    highlight: {
      theme: {
        default: "nord",
        dark: "github-dark",
        sepia: "monokai",
      },
      preload: ["js", "json", "shell"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: "G-86LPK0H948",
    config: {
      page_title: "Shoti API",
    },
    loadingStrategy: "async",
  },
  runtimeConfig: {
    public: {
      apiBase: "https://api--v1-shoti.vercel.app/api",
    },
  },
});
