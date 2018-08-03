const path = require('path')
const utils = require('./utils')
const config = require('../config')
const tsImportPluginFactory = require('ts-import-plugin')

function resolve (dir = '') {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  context: resolve(),
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.gql', '.graphql'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            useCache: true
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }

      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  }
}

module.exports = webpackConfig
