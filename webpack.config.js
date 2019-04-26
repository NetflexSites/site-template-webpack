const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const package = require('./package.json')

module.exports = {
  entry: [
    path.resolve(__dirname, 'assets/js/app.js'),
    path.resolve(__dirname, 'assets/scss/styles.scss')
  ],
  performance: {
    hints: false
  },
  stats: {
    all: false,
    assets: true,
    chunks: false
  },
  devtool: 'source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public/assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  grid: true,
                  flexbox: true,
                  browsers: package.browserslist
                })
              ]
            }
          }
        ]
      }
    ]
  }
}
