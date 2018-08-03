const webpack = require('webpack')
const merge = require('webpack-merge')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')

const HOST = process.env.HOST || config.dev.host
const PORT = (process.env.PORT && Number(process.env.PORT)) || config.dev.port

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: utils.cssLoaders({ sourceMap: config.dev.cssSourceMap })
      },
      {
        test: /\.less$/,
        use: utils.lessLoaders({
          sourceMap: config.dev.cssSourceMap,
          theme: config.dev.antd.theme
        })
      }
    ]
  },

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    open: config.dev.autoOpenBrowser,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true
  },

  plugins: [
    new StyleLintPlugin({
      context: 'src',
      files: ['**/*.css', '**/*.tsx'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${HOST}:${PORT}`]
      },
      onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
    })
  ]
})

module.exports = webpackConfig
