// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    server: {
      hmr: {
        protocol: "wss",
        clientPort: 4000,
      },
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/content"],
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
});
