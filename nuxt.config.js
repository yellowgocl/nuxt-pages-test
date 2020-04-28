require('dotenv').config()
let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = process.env.DEV_BASE_URL
    break;
  case 'production':
    baseUrl = process.env.PROD_BASE_URL
    break;
  case 'test':
    baseUrl = process.env.TEST_BASE_URL
    break;
  default:
    baseUrl = process.env.PROD_BASE_URL
    break;
}

module.exports = {
  mode: 'spa',
  env: {
    baseUrl
  },
  router: {
    base: '/nuxt-pages-test/',
    middleware: [ 'routeCallback' ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [ 'element-ui/lib/theme-chalk/index.css', '@/assets/css/main.scss' ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [ '@/plugins/element-ui', '@/plugins/axios' ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true,
    baseURL: baseUrl, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60 * 1000,
    headers: {
      post: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'https://h5api.zhefengle.cn', //这个网站是开源的可以请求到数据的
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [ /^element-ui/, 'vue-echarts', 'resize-detector' ],
    /*
     ** You can extend webpack config here
     */
    vendor: [ 'axios' ], // 防止重复打包
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isClient) {
        config.resolve.alias['vue'] = 'vue/dist/vue.js'
      }
    }
  },
  // generate: {
  //   dir: 'dist',
  // }


}
