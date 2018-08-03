const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('../config')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: utils.cssLoaders({
          extract: true,
          sourceMap: config.build.productionSourceMap
        })
      },
      {
        test: /\.less$/,
        use: utils.lessLoaders({
          extract: true,
          sourceMap: config.build.productionSourceMap,
          theme: config.build.antd.theme
        })
      }
    ]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: config.build.productionSourceMap && {
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[chunkhash].css'),
      chunkFilename: utils.assetsPath('css/[id].[chunkhash].css')
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'logo.png'),
      prefix: utils.assetsPath('icons/'),
      inject: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '..')
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = webpackConfig
