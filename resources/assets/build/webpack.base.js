'use strict'
const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const postcss = {
  plugins: [
    require('autoprefixer')({
      browsers: config.browsers
    })
  ]
}

let webpack_base = {
  entry: config.entry,
  output: {
    path: config.assets_path,
    filename: '[name].js',
    publicPath: config.assets_url
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../js'),
      components: path.join(__dirname, '../js/components'),
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   exclude: [/node_modules/, /libs/, /build/],
      //   enforce: 'pre'
      // },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /libs/],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /tinymce[\\/]skins[\\/]/,
        loader: ['css-loader', 'postcss-loader']
      }, {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10,
            name: '[name].[hash:7].[ext]'
          }
        }],

      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: postcss,
        vue: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            js: 'babel-loader'
          },
          postcss: postcss
        }
      }
    })
  ],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}

if (config.stylelint) {
  webpack_base.plugins.push(
    new StyleLintPlugin({
      files: config.stylelint
    })
  )
}

if (config.html) {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  webpack_base.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  )
}

module.exports = webpack_base
