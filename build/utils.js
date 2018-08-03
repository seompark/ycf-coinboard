const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const config = require('../config')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options = {
  extract: false,
  sourceMap: true
}) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  return [
    options.extract ? {
      loader: MiniCssExtractPlugin.loader
    } : {
      loader: 'style-loader'
    },
    cssLoader,
    postcssLoader
  ].filter(e => e)
}

exports.lessLoaders = function(options = {
  extract: false,
  sourceMap: true,
  theme
}) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      importLoaders: 1
    }
  }

  const lessLoader = {
    loader: 'less-loader',
    options: {
      sourceMap: options.sourceMap,
      javascriptEnabled: true,
      modifyVars: options.theme
    }
  }

  return [
    options.extract ? {
      loader: MiniCssExtractPlugin.loader
    } : {
        loader: 'style-loader'
      },
    cssLoader,
    lessLoader
  ].filter(e => e)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: require('../package.json').name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
