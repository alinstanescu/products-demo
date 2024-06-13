// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  build: {
    transpile: []
  },
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' },
  ]
})