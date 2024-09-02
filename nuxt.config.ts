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
});
