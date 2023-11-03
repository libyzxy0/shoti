// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    server: {
      hmr: {
        protocol: "wss",
        clientPort: 4000,
        host: '0.0.0.0'
      },
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/content", 
    "nuxt-gtag"
  ],
  css: ["@/assets/scss/global.scss", "@/assets/css/markdown.css"],
  googleFonts: {
    families: {
      Nunito: [300],
    },
  },
  content: {
    highlight: {
      theme: {
        default: "dracula",
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
    id: 'G-86LPK0H948', 
    config: {
      page_title: 'Shoti API'
    }, 
    loadingStrategy: 'async'
  }
  /*
  runtimeConfig: {
    dbUrl: process.env.MONGODB_CONNECTION_URI, 
    dbName: process.env.MONGODB_DB_NAME
  }
  */
});
