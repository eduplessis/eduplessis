// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: 'content-wind',
  modules: ['@nuxtjs/plausible','@nuxt/devtools'],
  plausible: {
    apiHost: 'https://analytic.eduplessis.com'
  },
  devtools:{
    enabled: false
  },
  experimental: {
    writeEarlyHints: false
  }
})
