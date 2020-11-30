import path from 'path'
const srcPath = path.resolve(__dirname, 'src')
const uiPath = path.resolve(__dirname, 'src/components/UI')

export default {
  srcDir: 'src',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'solves-pro-tt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      // alias
      config.resolve.alias['~'] = srcPath
      config.resolve.alias['@'] = srcPath
      config.resolve.alias['@ui'] = uiPath
    },
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}
