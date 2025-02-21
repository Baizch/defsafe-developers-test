// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@prisma/nuxt', '@pinia/nuxt', '@nuxtjs/google-fonts', '@nuxt/ui'],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  runtimeConfig: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,

    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
});
