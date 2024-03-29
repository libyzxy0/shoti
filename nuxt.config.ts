// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      apiBase: "https://shoti-srv1.onrender.com/api",
    },
  },
});
