// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: 'content-wind',
  modules: ['@nuxtjs/plausible'],
  plausible: {
    apiHost: 'https://analytic.eduplessis.com'
  },
  experimental: {
    writeEarlyHints: false
  }
})
