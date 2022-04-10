import colors from 'vuetify/es5/util/colors'
import i18nConfig from "./i18n/config";
import locales from "./i18n/locales";

export default {
  head: {
    titleTemplate: '유네임 | %s',
    title: 'uooname',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/earlyaccess/nanumgothic.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/common.scss",
    "~/assets/main.scss",
    "~/assets/content.scss",
    "~/assets/footer.scss",
    "~/assets/mobile.scss",
  ],

  plugins: [
    '~/plugins/component.js',
    '~/plugins/global.js',
    {src:'~/plugins/vuex-persis.js', ssr:false},
    {src:"~plugins/vue-particles",ssr:false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  modules: [
    'nuxt-i18n',
  ],

  i18n:{
    seo: true,
    locales,
    defaultLocale: 'ko',
    vueI18n: i18nConfig,
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Noto Sans Korean'
      }
    },
    theme: {
      dark: false,
      themes: {
        light:{
          primary: '#6347e2',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: '#536DFE',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
