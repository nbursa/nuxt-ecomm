import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  typescript: {
    typeCheck: true,
  },

  vite: {
    plugins: [],
  },

  compatibilityDate: "2024-09-02",

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&family=Merriweather:wght@400;700&display=swap",
        },
      ],
    },
  },
});
