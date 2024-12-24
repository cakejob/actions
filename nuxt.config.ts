// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  srcDir: "./src/",
  app: {
    head: {
      title: "Dorapita Application",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "This is my web app",
        },
        {
          name: "keywords",
          content: "This is my keywords",
        },
      ],
      htmlAttrs: {
        dir: "ltr",
        lang: "en",
        class: "dark",
      },
    },
  },
  css: ["~/assets/css/main.css", "~/assets/scss/app.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/tools.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: "123", // The private keys which are only available server-side
    public: {
      // Keys within public are also exposed client-side
      apiBase: "/api",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
