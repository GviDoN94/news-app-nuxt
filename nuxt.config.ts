// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `
            @use "~/assets/scss/variables.scss" as *;
            @use "~/assets/scss/mixins.scss" as *;
          `,
        },
      },
    },
  },
  css: ['@/assets/scss/normalize.scss', '@/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
});
