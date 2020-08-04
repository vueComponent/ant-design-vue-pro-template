const path = require('path')
const webpack = require('webpack')
const { IgnorePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())

// const isProd = process.env.NODE_ENV === 'production'
const isUseCDN = process.env.IS_USE_CDN === 'true'
const isAnalyz = process.env.IS_ANALYZ === 'true'

function resolve (dir) {
  return path.join(__dirname, dir)
}

// check Git
function getGitHash () {
  try {
    return GitRevision.version()
  } catch (e) {}
  return 'unknown'
}

const assetsCDN = {
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
  },
  assets: {
    css: [],
    // https://unpkg.com/:package@:version/:file
    // https://cdn.jsdelivr.net/package:version/:file
    js: [
      '//cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@latest/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@latest/dist/vuex.min.js',
    ],
  },
}

// vue.config
const vueConfig = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        GIT_HASH: JSON.stringify(getGitHash()),
        BUILD_DATE: buildDate,
      }),
    ],
    resolve: {
      alias: {
        '@ant-design/icons/lib/dist$': resolve('./src/icons.js'),
      },
    },
    externals: isUseCDN ? assetsCDN.externals : {},
  },
  chainWebpack: config => {
    // replace svg-loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule.oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })

    // if `IS_USE_CDN` env is TRUE require on cdn assets
    isUseCDN && config.plugin('html').tap(args => {
      args[0].cdn = assetsCDN.assets
      return args
    })
    // if `IS_ANALYZ` env is TRUE on report bundle info
    isAnalyz && config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
      {
        analyzerMode: 'static',
      },
    ])
  },
  // style config
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          'border-radius-base': '2px',
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    // development server port 8000
    port: 8001,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        // backend url
        target: 'http://localhost:8080/gateway',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  /* ADVANCED SETTINGS */

  // disable source map in production
  productionSourceMap: false,
  // ESLint Check: DISABLE for false
  // Type: boolean | 'warning' | 'default' | 'error'
  lintOnSave: 'warning',
  // babel-loader no-ignore node_modules/*
  transpileDependencies: [],
}

module.exports = vueConfig
