const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, 'assets/main.js')
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
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
