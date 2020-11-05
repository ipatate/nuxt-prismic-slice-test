export default {
  /*
   ** Headers of the page
   */
  head: {
    target: 'static',
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      },
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },

  /*
   ** Global CSS
   */
  css: [
    'vue-essential-slices/src/styles/styles.scss',
    'vue-essential-slices/src/styles/styles.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/prismicLinks',
      ssr: false,
    },
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module', // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/prismic',
    ['nuxt-sm'],
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://goodmotionslice.cdn.prismic.io/api/v2',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:uid',
            },
          ],
        },
      },
    ],
    ['nuxt-sm'],
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    transpile: ['vue-slicezone', 'nuxt-sm', 'vue-slicezone', 'nuxt-sm'],
  },
  prismic: {
    endpoint: 'https://goodmotion-slice.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    apiOptions: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
      ],
    },
  },
  generate: {
    fallback: '404.html',
  },
  storybook: {
    stories: [
      '~/components/slices/**/*.stories.js',
      '~/components/slices/**/*.stories.js',
    ],
  },
  ignore: ['**/*.stories.js', '**/*.stories.js'],
}
