// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/icon'],
  css: ['@/assets/scss/main.scss'],
  ssr: false, // obligatorio para GitHub Pages
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/MyBoardGames/' // 👈 MUY IMPORTANTE
  }
})